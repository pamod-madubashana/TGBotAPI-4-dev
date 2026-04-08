use serde::{Deserialize, Serialize};

use super::{RawTelegramResponse, TelegramClient};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AnswerCallbackQueryParams {
    pub callback_query_id: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub text: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub show_alert: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub url: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub cache_time: Option<i64>,
}

pub async fn execute(
    client: &TelegramClient,
    params: serde_json::Value,
) -> Result<RawTelegramResponse, String> {
    let request: AnswerCallbackQueryParams = serde_json::from_value(params)
        .map_err(|error| format!("invalid answerCallbackQuery payload: {error}"))?;

    client
        .post(
            "answerCallbackQuery",
            serde_json::to_value(request).map_err(|error| {
                format!("failed to serialize answerCallbackQuery payload: {error}")
            })?,
        )
        .await
}
