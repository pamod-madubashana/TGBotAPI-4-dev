use serde::{Deserialize, Serialize};
use serde_json::{Map, Value};
use tauri::AppHandle;

use crate::storage;
use crate::telegram::{self, MethodExecutionResult};

const TOKENS_FILE: &str = "tokens.json";

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
struct TokenStore {
    token: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct TokenValidationResult {
    pub token: String,
    pub profile: Value,
    pub response: MethodExecutionResult,
}

pub(crate) fn load_saved_token(app: &AppHandle) -> Result<Option<String>, String> {
    let store: TokenStore = storage::read_json(app, TOKENS_FILE)?;

    Ok(store.token.filter(|token| !token.trim().is_empty()))
}

fn persist_token(app: &AppHandle, token: Option<String>) -> Result<(), String> {
    storage::write_json(app, TOKENS_FILE, &TokenStore { token })
}

#[tauri::command]
pub fn get_saved_token(app: AppHandle) -> Result<Option<String>, String> {
    load_saved_token(&app)
}

#[tauri::command]
pub fn save_bot_token(app: AppHandle, token: String) -> Result<(), String> {
    persist_token(&app, Some(token))
}

#[tauri::command]
pub fn clear_saved_token(app: AppHandle) -> Result<(), String> {
    persist_token(&app, None)
}

#[tauri::command]
pub async fn validate_bot_token(token: String) -> Result<TokenValidationResult, String> {
    let response = telegram::execute_method(
        token.clone(),
        "getMe".to_string(),
        Value::Object(Map::new()),
    )
    .await?;

    match &response.data {
        Value::Object(body) if body.get("ok") == Some(&Value::Bool(true)) => {
            let profile = body
                .get("result")
                .cloned()
                .unwrap_or_else(|| Value::Object(Map::new()));

            Ok(TokenValidationResult {
                token,
                profile,
                response,
            })
        }
        Value::Object(body) => {
            let description = body
                .get("description")
                .and_then(Value::as_str)
                .unwrap_or("Telegram rejected this bot token.");

            Err(description.to_string())
        }
        _ => {
            Err("Telegram returned an unexpected response while validating the token.".to_string())
        }
    }
}
