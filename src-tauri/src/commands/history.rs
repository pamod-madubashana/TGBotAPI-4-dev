use serde::{Deserialize, Serialize};
use std::time::{SystemTime, UNIX_EPOCH};
use tauri::AppHandle;

use crate::storage;
use crate::telegram::MethodExecutionResult;

const HISTORY_FILE: &str = "history.json";
const MAX_HISTORY_ENTRIES: usize = 100;

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct RequestHistoryEntry {
    pub id: String,
    pub method: String,
    pub request: serde_json::Value,
    pub response: serde_json::Value,
    pub status_code: Option<u16>,
    pub duration_ms: u64,
    pub created_at: u64,
}

fn now_ms() -> Result<u64, String> {
    Ok(SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map_err(|error| format!("clock error: {error}"))?
        .as_millis() as u64)
}

pub(crate) fn append_request_history(
    app: &AppHandle,
    execution: &MethodExecutionResult,
) -> Result<(), String> {
    let mut history: Vec<RequestHistoryEntry> = storage::read_json(app, HISTORY_FILE)?;
    let created_at = now_ms()?;

    history.insert(
        0,
        RequestHistoryEntry {
            id: format!("{}-{created_at}", execution.method),
            method: execution.method.clone(),
            request: execution.request.clone(),
            response: execution.data.clone(),
            status_code: execution.status_code,
            duration_ms: execution.duration_ms,
            created_at,
        },
    );

    history.truncate(MAX_HISTORY_ENTRIES);
    storage::write_json(app, HISTORY_FILE, &history)
}

#[tauri::command]
pub fn get_request_history(app: AppHandle) -> Result<Vec<RequestHistoryEntry>, String> {
    storage::read_json(&app, HISTORY_FILE)
}
