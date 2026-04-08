pub mod answer_callback_query;
pub mod edit_message_text;
pub mod get_me;
pub mod get_updates;
pub mod send_message;
pub mod send_photo;

use reqwest::Client;
use serde::{Deserialize, Serialize};
use serde_json::{Map, Value};
use std::time::Instant;

#[derive(Debug, Clone)]
pub struct TelegramClient {
    http: Client,
    token: String,
}

#[derive(Debug, Clone)]
pub struct RawTelegramResponse {
    pub status_code: Option<u16>,
    pub request: Value,
    pub body: Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MethodExecutionResult {
    pub method: String,
    pub status_code: Option<u16>,
    pub duration_ms: u64,
    pub data: Value,
    pub request: Value,
}

impl TelegramClient {
    pub fn new(token: String) -> Self {
        Self {
            http: Client::new(),
            token,
        }
    }

    pub async fn post(&self, method: &str, payload: Value) -> Result<RawTelegramResponse, String> {
        let request = ensure_object(payload);
        let url = format!("https://api.telegram.org/bot{}/{}", self.token, method);

        let response = self
            .http
            .post(url)
            .json(&request)
            .send()
            .await
            .map_err(|error| format!("request to Telegram failed: {error}"))?;

        let status_code = Some(response.status().as_u16());
        let body = response
            .json::<Value>()
            .await
            .map_err(|error| format!("failed to decode Telegram response: {error}"))?;

        Ok(RawTelegramResponse {
            status_code,
            request,
            body,
        })
    }
}

fn ensure_object(value: Value) -> Value {
    match value {
        Value::Object(_) => value,
        _ => Value::Object(Map::new()),
    }
}

pub async fn execute_method(
    token: String,
    method: String,
    params: Value,
) -> Result<MethodExecutionResult, String> {
    let client = TelegramClient::new(token);
    let started_at = Instant::now();

    let result = match method.as_str() {
        "getMe" => get_me::execute(&client).await?,
        "getUpdates" => get_updates::execute(&client, params).await?,
        "sendMessage" => send_message::execute(&client, params).await?,
        "sendPhoto" => send_photo::execute(&client, params).await?,
        "editMessageText" => edit_message_text::execute(&client, params).await?,
        "answerCallbackQuery" => answer_callback_query::execute(&client, params).await?,
        _ => return Err(format!("unsupported Telegram method: {method}")),
    };

    Ok(MethodExecutionResult {
        method,
        status_code: result.status_code,
        duration_ms: started_at.elapsed().as_millis() as u64,
        data: result.body,
        request: ensure_object(result.request),
    })
}
