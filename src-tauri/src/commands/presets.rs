use serde::{Deserialize, Serialize};
use serde_json::{Map, Value};
use std::time::{SystemTime, UNIX_EPOCH};
use tauri::AppHandle;

use crate::storage;

const PRESETS_FILE: &str = "presets.json";

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SavedPreset {
    pub id: String,
    pub name: String,
    pub method: String,
    pub payload: Value,
    pub created_at: u64,
}

impl Default for SavedPreset {
    fn default() -> Self {
        Self {
            id: String::new(),
            name: String::new(),
            method: String::new(),
            payload: Value::Object(Map::new()),
            created_at: 0,
        }
    }
}

fn now_ms() -> Result<u64, String> {
    Ok(SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map_err(|error| format!("clock error: {error}"))?
        .as_millis() as u64)
}

fn ensure_object(payload: Value) -> Value {
    match payload {
        Value::Object(_) => payload,
        _ => Value::Object(Map::new()),
    }
}

#[tauri::command]
pub fn get_presets(app: AppHandle) -> Result<Vec<SavedPreset>, String> {
    storage::read_json(&app, PRESETS_FILE)
}

#[tauri::command]
pub fn save_preset(
    app: AppHandle,
    name: String,
    method: String,
    payload: Value,
) -> Result<SavedPreset, String> {
    let mut presets: Vec<SavedPreset> = storage::read_json(&app, PRESETS_FILE)?;
    let created_at = now_ms()?;

    let preset = SavedPreset {
        id: format!("preset-{created_at}"),
        name,
        method,
        payload: ensure_object(payload),
        created_at,
    };

    presets.insert(0, preset.clone());
    storage::write_json(&app, PRESETS_FILE, &presets)?;

    Ok(preset)
}
