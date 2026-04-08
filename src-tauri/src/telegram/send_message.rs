use serde::{Deserialize, Serialize};
use serde_json::Value;

use super::{RawTelegramResponse, TelegramClient};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SendMessageParams {
    pub chat_id: Value,
    pub text: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub parse_mode: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub disable_notification: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub protect_content: Option<bool>,
}

pub async fn execute(
    client: &TelegramClient,
    params: Value,
) -> Result<RawTelegramResponse, String> {
    let request: SendMessageParams = serde_json::from_value(params)
        .map_err(|error| format!("invalid sendMessage payload: {error}"))?;

    client
        .post(
            "sendMessage",
            serde_json::to_value(request)
                .map_err(|error| format!("failed to serialize sendMessage payload: {error}"))?,
        )
        .await
}
