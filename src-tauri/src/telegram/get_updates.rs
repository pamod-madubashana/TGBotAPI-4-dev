use serde::{Deserialize, Serialize};
use serde_json::Value;

use super::{RawTelegramResponse, TelegramClient};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetUpdatesParams {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub offset: Option<i64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub limit: Option<i64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub timeout: Option<i64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub allowed_updates: Option<Vec<String>>,
}

pub async fn execute(
    client: &TelegramClient,
    params: Value,
) -> Result<RawTelegramResponse, String> {
    let request: GetUpdatesParams = serde_json::from_value(params)
        .map_err(|error| format!("invalid getUpdates payload: {error}"))?;

    client
        .post(
            "getUpdates",
            serde_json::to_value(request)
                .map_err(|error| format!("failed to serialize getUpdates payload: {error}"))?,
        )
        .await
}
