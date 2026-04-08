use serde_json::Value;

use super::{RawTelegramResponse, TelegramClient};

pub async fn execute(
    client: &TelegramClient,
    params: Value,
) -> Result<RawTelegramResponse, String> {
    client.post("getCustomEmojiStickers", params, &[]).await
}
