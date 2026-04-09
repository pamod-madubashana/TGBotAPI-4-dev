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

async fn fetch_bot_profile_photo_url(
    token: &str,
    profile: &Value,
) -> Result<Option<String>, String> {
    let user_id = profile.get("id").and_then(Value::as_i64);

    let Some(user_id) = user_id else {
        return Ok(None);
    };

    let mut photo_params = Map::new();
    photo_params.insert("user_id".to_string(), Value::from(user_id));
    photo_params.insert("limit".to_string(), Value::from(1));

    let photos_response = telegram::execute_method(
        token.to_string(),
        "getUserProfilePhotos".to_string(),
        Value::Object(photo_params),
    )
    .await?;

    let Some(file_id) = photos_response
        .data
        .get("result")
        .and_then(|result| result.get("photos"))
        .and_then(Value::as_array)
        .and_then(|photos| photos.first())
        .and_then(Value::as_array)
        .and_then(|sizes| sizes.last())
        .and_then(|photo| photo.get("file_id"))
        .and_then(Value::as_str)
    else {
        return Ok(None);
    };

    let mut file_params = Map::new();
    file_params.insert("file_id".to_string(), Value::from(file_id));

    let file_response = telegram::execute_method(
        token.to_string(),
        "getFile".to_string(),
        Value::Object(file_params),
    )
    .await?;

    let file_path = file_response
        .data
        .get("result")
        .and_then(|result| result.get("file_path"))
        .and_then(Value::as_str);

    Ok(file_path.map(|path| format!("https://api.telegram.org/file/bot{token}/{path}")))
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
            let mut profile = body
                .get("result")
                .cloned()
                .unwrap_or_else(|| Value::Object(Map::new()));

            if let Some(photo_url) = fetch_bot_profile_photo_url(&token, &profile).await? {
                if let Some(profile_object) = profile.as_object_mut() {
                    profile_object.insert("photoUrl".to_string(), Value::String(photo_url));
                }
            }

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
