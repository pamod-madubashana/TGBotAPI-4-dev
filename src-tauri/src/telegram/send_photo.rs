use serde::{Deserialize, Serialize};
use serde_json::Value;

use super::{RawTelegramResponse, TelegramClient};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SendPhotoParams {
    pub chat_id: Value,
    pub photo: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub caption: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub parse_mode: Option<String>,
}

pub async fn execute(
    client: &TelegramClient,
    params: Value,
) -> Result<RawTelegramResponse, String> {
    let request: SendPhotoParams = serde_json::from_value(params)
        .map_err(|error| format!("invalid sendPhoto payload: {error}"))?;

    client
        .post(
            "sendPhoto",
            serde_json::to_value(request)
                .map_err(|error| format!("failed to serialize sendPhoto payload: {error}"))?,
        )
        .await
}
