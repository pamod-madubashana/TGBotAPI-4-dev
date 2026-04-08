use serde::{Deserialize, Serialize};
use tauri::AppHandle;

use crate::storage;

const SETTINGS_FILE: &str = "settings.json";

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct AppSettings {
    pub sidebar_collapsed: bool,
}

#[tauri::command]
pub fn get_settings(app: AppHandle) -> Result<AppSettings, String> {
    storage::read_json(&app, SETTINGS_FILE)
}

#[tauri::command]
pub fn save_settings(app: AppHandle, settings: AppSettings) -> Result<AppSettings, String> {
    storage::write_json(&app, SETTINGS_FILE, &settings)?;
    Ok(settings)
}
