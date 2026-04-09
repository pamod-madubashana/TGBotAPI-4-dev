use serde::{Deserialize, Serialize};
use serde_json::{Map, Value};
use tauri::AppHandle;

use crate::storage;
use crate::telegram::{self, MethodExecutionResult};

const TOKENS_FILE: &str = "tokens.json";

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
struct TokenStore {
    #[serde(default)]
    active_token: Option<String>,
    #[serde(default)]
    bots: Vec<SavedBotAccount>,
    #[serde(default)]
    token: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SavedBotAccount {
    pub token: String,
    pub profile: Value,
}

impl Default for SavedBotAccount {
    fn default() -> Self {
        Self {
            token: String::new(),
            profile: Value::Object(Map::new()),
        }
    }
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct TokenValidationResult {
    pub token: String,
    pub profile: Value,
    pub response: MethodExecutionResult,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RemoveSavedBotResult {
    pub active_token: Option<String>,
    pub bots: Vec<SavedBotAccount>,
}

fn load_token_store(app: &AppHandle) -> Result<TokenStore, String> {
    let mut store: TokenStore = storage::read_json(app, TOKENS_FILE)?;

    if store.active_token.is_none() {
        store.active_token = store.token.clone();
    }

    store.bots.retain(|bot| !bot.token.trim().is_empty());

    Ok(store)
}

fn persist_token_store(app: &AppHandle, mut store: TokenStore) -> Result<(), String> {
    store.token = None;
    storage::write_json(app, TOKENS_FILE, &store)
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
    let store = load_token_store(app)?;

    Ok(store.active_token.filter(|token| !token.trim().is_empty()))
}

#[tauri::command]
pub fn get_saved_token(app: AppHandle) -> Result<Option<String>, String> {
    load_saved_token(&app)
}

#[tauri::command]
pub fn get_saved_bots(app: AppHandle) -> Result<Vec<SavedBotAccount>, String> {
    let store = load_token_store(&app)?;

    Ok(store.bots)
}

#[tauri::command]
pub fn save_bot_token(app: AppHandle, token: String, profile: Value) -> Result<(), String> {
    let token = token.trim().to_string();

    if token.is_empty() {
        return Err("Bot token cannot be empty.".to_string());
    }

    let mut store = load_token_store(&app)?;

    if let Some(existing_bot) = store.bots.iter_mut().find(|bot| bot.token == token) {
        existing_bot.profile = profile;
    } else {
        store.bots.push(SavedBotAccount {
            token: token.clone(),
            profile,
        });
    }

    store.active_token = Some(token);

    persist_token_store(&app, store)
}

#[tauri::command]
pub fn clear_saved_token(app: AppHandle) -> Result<(), String> {
    persist_token_store(&app, TokenStore::default())
}

#[tauri::command]
pub fn remove_saved_bot(app: AppHandle, token: String) -> Result<RemoveSavedBotResult, String> {
    let token = token.trim().to_string();

    if token.is_empty() {
        return Err("Bot token cannot be empty.".to_string());
    }

    let mut store = load_token_store(&app)?;
    let initial_len = store.bots.len();
    store.bots.retain(|bot| bot.token != token);

    if store.bots.len() == initial_len {
        return Err("Saved bot was not found.".to_string());
    }

    let next_active_token = match store.active_token.as_deref() {
        Some(active_token) if active_token != token => Some(active_token.to_string()),
        _ => store.bots.first().map(|bot| bot.token.clone()),
    };

    store.active_token = next_active_token.clone();
    let bots = store.bots.clone();

    persist_token_store(&app, store)?;

    Ok(RemoveSavedBotResult {
        active_token: next_active_token,
        bots,
    })
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
