pub mod history;
pub mod presets;
pub mod settings;
pub mod tokens;

use serde_json::{Map, Value};
use tauri::AppHandle;

use crate::telegram::{self, MethodExecutionResult};

#[tauri::command]
pub async fn execute_telegram_method(
    app: AppHandle,
    method: String,
    params: Value,
    token: Option<String>,
) -> Result<MethodExecutionResult, String> {
    let active_token = match token {
        Some(token) if !token.trim().is_empty() => token,
        _ => tokens::load_saved_token(&app)?
            .ok_or_else(|| "No saved bot token found. Please log in again.".to_string())?,
    };

    let payload = match params {
        Value::Object(_) => params,
        _ => Value::Object(Map::new()),
    };

    let execution = telegram::execute_method(active_token, method, payload).await?;
    history::append_request_history(&app, &execution)?;

    Ok(execution)
}
