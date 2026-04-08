use serde::{Deserialize, Serialize};
use serde_json::Value;

use super::{RawTelegramResponse, TelegramClient};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EditMessageTextParams {
    pub chat_id: Value,
    pub message_id: i64,
    pub text: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub parse_mode: Option<String>,
}

pub async fn execute(
    client: &TelegramClient,
    params: Value,
) -> Result<RawTelegramResponse, String> {
    let request: EditMessageTextParams = serde_json::from_value(params)
        .map_err(|error| format!("invalid editMessageText payload: {error}"))?;

    client
        .post(
            "editMessageText",
            serde_json::to_value(request)
                .map_err(|error| format!("failed to serialize editMessageText payload: {error}"))?,
        )
        .await
}
