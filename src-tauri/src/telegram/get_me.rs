use serde_json::{Map, Value};

use super::{RawTelegramResponse, TelegramClient};

pub async fn execute(client: &TelegramClient) -> Result<RawTelegramResponse, String> {
    client.post("getMe", Value::Object(Map::new())).await
}
