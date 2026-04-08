pub mod add_sticker_to_set;
pub mod answer_callback_query;
pub mod answer_inline_query;
pub mod answer_pre_checkout_query;
pub mod answer_shipping_query;
pub mod answer_web_app_query;
pub mod approve_chat_join_request;
pub mod approve_suggested_post;
pub mod ban_chat_member;
pub mod ban_chat_sender_chat;
pub mod close;
pub mod close_forum_topic;
pub mod close_general_forum_topic;
pub mod convert_gift_to_stars;
pub mod copy_message;
pub mod copy_messages;
pub mod create_chat_invite_link;
pub mod create_chat_subscription_invite_link;
pub mod create_forum_topic;
pub mod create_invoice_link;
pub mod create_new_sticker_set;
pub mod decline_chat_join_request;
pub mod decline_suggested_post;
pub mod delete_business_messages;
pub mod delete_chat_photo;
pub mod delete_chat_sticker_set;
pub mod delete_forum_topic;
pub mod delete_message;
pub mod delete_messages;
pub mod delete_my_commands;
pub mod delete_sticker_from_set;
pub mod delete_sticker_set;
pub mod delete_story;
pub mod delete_webhook;
pub mod edit_chat_invite_link;
pub mod edit_chat_subscription_invite_link;
pub mod edit_forum_topic;
pub mod edit_general_forum_topic;
pub mod edit_message_caption;
pub mod edit_message_checklist;
pub mod edit_message_live_location;
pub mod edit_message_media;
pub mod edit_message_reply_markup;
pub mod edit_message_text;
pub mod edit_story;
pub mod edit_user_star_subscription;
pub mod export_chat_invite_link;
pub mod forward_message;
pub mod forward_messages;
pub mod get_available_gifts;
pub mod get_business_account_gifts;
pub mod get_business_account_star_balance;
pub mod get_business_connection;
pub mod get_chat;
pub mod get_chat_administrators;
pub mod get_chat_gifts;
pub mod get_chat_member;
pub mod get_chat_member_count;
pub mod get_chat_menu_button;
pub mod get_custom_emoji_stickers;
pub mod get_file;
pub mod get_forum_topic_icon_stickers;
pub mod get_game_high_scores;
pub mod get_managed_bot_token;
pub mod get_me;
pub mod get_my_commands;
pub mod get_my_default_administrator_rights;
pub mod get_my_description;
pub mod get_my_name;
pub mod get_my_short_description;
pub mod get_my_star_balance;
pub mod get_star_transactions;
pub mod get_sticker_set;
pub mod get_updates;
pub mod get_user_chat_boosts;
pub mod get_user_gifts;
pub mod get_user_profile_audios;
pub mod get_user_profile_photos;
pub mod get_webhook_info;
pub mod gift_premium_subscription;
pub mod hide_general_forum_topic;
pub mod leave_chat;
pub mod log_out;
pub mod pin_chat_message;
pub mod post_story;
pub mod promote_chat_member;
pub mod read_business_message;
pub mod refund_star_payment;
pub mod remove_business_account_profile_photo;
pub mod remove_chat_verification;
pub mod remove_my_profile_photo;
pub mod remove_user_verification;
pub mod reopen_forum_topic;
pub mod reopen_general_forum_topic;
pub mod replace_managed_bot_token;
pub mod replace_sticker_in_set;
pub mod repost_story;
pub mod restrict_chat_member;
pub mod revoke_chat_invite_link;
pub mod save_prepared_inline_message;
pub mod save_prepared_keyboard_button;
pub mod send_animation;
pub mod send_audio;
pub mod send_chat_action;
pub mod send_checklist;
pub mod send_contact;
pub mod send_dice;
pub mod send_document;
pub mod send_game;
pub mod send_gift;
pub mod send_invoice;
pub mod send_location;
pub mod send_media_group;
pub mod send_message;
pub mod send_message_draft;
pub mod send_paid_media;
pub mod send_photo;
pub mod send_poll;
pub mod send_sticker;
pub mod send_venue;
pub mod send_video;
pub mod send_video_note;
pub mod send_voice;
pub mod set_business_account_bio;
pub mod set_business_account_gift_settings;
pub mod set_business_account_name;
pub mod set_business_account_profile_photo;
pub mod set_business_account_username;
pub mod set_chat_administrator_custom_title;
pub mod set_chat_description;
pub mod set_chat_member_tag;
pub mod set_chat_menu_button;
pub mod set_chat_permissions;
pub mod set_chat_photo;
pub mod set_chat_sticker_set;
pub mod set_chat_title;
pub mod set_custom_emoji_sticker_set_thumbnail;
pub mod set_game_score;
pub mod set_message_reaction;
pub mod set_my_commands;
pub mod set_my_default_administrator_rights;
pub mod set_my_description;
pub mod set_my_name;
pub mod set_my_profile_photo;
pub mod set_my_short_description;
pub mod set_passport_data_errors;
pub mod set_sticker_emoji_list;
pub mod set_sticker_keywords;
pub mod set_sticker_mask_position;
pub mod set_sticker_position_in_set;
pub mod set_sticker_set_thumbnail;
pub mod set_sticker_set_title;
pub mod set_user_emoji_status;
pub mod set_webhook;
pub mod stop_message_live_location;
pub mod stop_poll;
pub mod transfer_business_account_stars;
pub mod transfer_gift;
pub mod unban_chat_member;
pub mod unban_chat_sender_chat;
pub mod unhide_general_forum_topic;
pub mod unpin_all_chat_messages;
pub mod unpin_all_forum_topic_messages;
pub mod unpin_all_general_forum_topic_messages;
pub mod unpin_chat_message;
pub mod upgrade_gift;
pub mod upload_sticker_file;
pub mod verify_chat;
pub mod verify_user;

use reqwest::{multipart, Client};
use serde::{Deserialize, Serialize};
use serde_json::{Map, Value};
use std::path::PathBuf;
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

    pub async fn post(
        &self,
        method: &str,
        payload: Value,
        file_fields: &[&str],
    ) -> Result<RawTelegramResponse, String> {
        let request = ensure_object(payload);
        let url = format!("https://api.telegram.org/bot{}/{}", self.token, method);
        let request_builder = self.http.post(url);
        let response = if let Some(form) = maybe_build_multipart_form(&request, file_fields)? {
            request_builder
                .multipart(form)
                .send()
                .await
                .map_err(|error| format!("request to Telegram failed: {error}"))?
        } else {
            request_builder
                .json(&request)
                .send()
                .await
                .map_err(|error| format!("request to Telegram failed: {error}"))?
        };

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

fn resolve_upload_path(raw: &str) -> Option<PathBuf> {
    let trimmed = raw.trim();

    if trimmed.is_empty() {
        return None;
    }

    let normalized = if let Some(stripped) = trimmed.strip_prefix("file:///") {
        if cfg!(windows) {
            stripped.replace('/', "\\")
        } else {
            format!("/{}", stripped)
        }
    } else if let Some(stripped) = trimmed.strip_prefix("file://") {
        stripped.to_string()
    } else {
        trimmed.to_string()
    };

    let path = PathBuf::from(normalized);
    if path.is_file() {
        Some(path)
    } else {
        None
    }
}

fn value_to_form_text(value: &Value) -> Result<String, String> {
    match value {
        Value::Null => Ok(String::new()),
        Value::String(value) => Ok(value.clone()),
        Value::Bool(value) => Ok(value.to_string()),
        Value::Number(value) => Ok(value.to_string()),
        _ => serde_json::to_string(value)
            .map_err(|error| format!("failed to serialize multipart field: {error}")),
    }
}

fn maybe_build_multipart_form(
    request: &Value,
    file_fields: &[&str],
) -> Result<Option<multipart::Form>, String> {
    let object = match request {
        Value::Object(object) => object,
        _ => return Ok(None),
    };

    let mut has_upload = false;
    let mut form = multipart::Form::new();

    for (key, value) in object {
        if value.is_null() {
            continue;
        }

        if file_fields.contains(&key.as_str()) {
            if let Some(raw_path) = value.as_str() {
                if let Some(path) = resolve_upload_path(raw_path) {
                    let file_name = path
                        .file_name()
                        .and_then(|name| name.to_str())
                        .unwrap_or("upload.bin")
                        .to_string();
                    let bytes = std::fs::read(&path)
                        .map_err(|error| format!("failed to read {}: {error}", path.display()))?;
                    let part = multipart::Part::bytes(bytes).file_name(file_name);
                    form = form.part(key.to_string(), part);
                    has_upload = true;
                    continue;
                }
            }
        }

        form = form.text(key.to_string(), value_to_form_text(value)?);
    }

    if has_upload {
        Ok(Some(form))
    } else {
        Ok(None)
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
        "addStickerToSet" => add_sticker_to_set::execute(&client, params).await?,
        "answerCallbackQuery" => answer_callback_query::execute(&client, params).await?,
        "answerInlineQuery" => answer_inline_query::execute(&client, params).await?,
        "answerPreCheckoutQuery" => answer_pre_checkout_query::execute(&client, params).await?,
        "answerShippingQuery" => answer_shipping_query::execute(&client, params).await?,
        "answerWebAppQuery" => answer_web_app_query::execute(&client, params).await?,
        "approveChatJoinRequest" => approve_chat_join_request::execute(&client, params).await?,
        "approveSuggestedPost" => approve_suggested_post::execute(&client, params).await?,
        "banChatMember" => ban_chat_member::execute(&client, params).await?,
        "banChatSenderChat" => ban_chat_sender_chat::execute(&client, params).await?,
        "close" => close::execute(&client, params).await?,
        "closeForumTopic" => close_forum_topic::execute(&client, params).await?,
        "closeGeneralForumTopic" => close_general_forum_topic::execute(&client, params).await?,
        "convertGiftToStars" => convert_gift_to_stars::execute(&client, params).await?,
        "copyMessage" => copy_message::execute(&client, params).await?,
        "copyMessages" => copy_messages::execute(&client, params).await?,
        "createChatInviteLink" => create_chat_invite_link::execute(&client, params).await?,
        "createChatSubscriptionInviteLink" => {
            create_chat_subscription_invite_link::execute(&client, params).await?
        }
        "createForumTopic" => create_forum_topic::execute(&client, params).await?,
        "createInvoiceLink" => create_invoice_link::execute(&client, params).await?,
        "createNewStickerSet" => create_new_sticker_set::execute(&client, params).await?,
        "declineChatJoinRequest" => decline_chat_join_request::execute(&client, params).await?,
        "declineSuggestedPost" => decline_suggested_post::execute(&client, params).await?,
        "deleteBusinessMessages" => delete_business_messages::execute(&client, params).await?,
        "deleteChatPhoto" => delete_chat_photo::execute(&client, params).await?,
        "deleteChatStickerSet" => delete_chat_sticker_set::execute(&client, params).await?,
        "deleteForumTopic" => delete_forum_topic::execute(&client, params).await?,
        "deleteMessage" => delete_message::execute(&client, params).await?,
        "deleteMessages" => delete_messages::execute(&client, params).await?,
        "deleteMyCommands" => delete_my_commands::execute(&client, params).await?,
        "deleteStickerFromSet" => delete_sticker_from_set::execute(&client, params).await?,
        "deleteStickerSet" => delete_sticker_set::execute(&client, params).await?,
        "deleteStory" => delete_story::execute(&client, params).await?,
        "deleteWebhook" => delete_webhook::execute(&client, params).await?,
        "editChatInviteLink" => edit_chat_invite_link::execute(&client, params).await?,
        "editChatSubscriptionInviteLink" => {
            edit_chat_subscription_invite_link::execute(&client, params).await?
        }
        "editForumTopic" => edit_forum_topic::execute(&client, params).await?,
        "editGeneralForumTopic" => edit_general_forum_topic::execute(&client, params).await?,
        "editMessageCaption" => edit_message_caption::execute(&client, params).await?,
        "editMessageChecklist" => edit_message_checklist::execute(&client, params).await?,
        "editMessageLiveLocation" => edit_message_live_location::execute(&client, params).await?,
        "editMessageMedia" => edit_message_media::execute(&client, params).await?,
        "editMessageReplyMarkup" => edit_message_reply_markup::execute(&client, params).await?,
        "editMessageText" => edit_message_text::execute(&client, params).await?,
        "editStory" => edit_story::execute(&client, params).await?,
        "editUserStarSubscription" => edit_user_star_subscription::execute(&client, params).await?,
        "exportChatInviteLink" => export_chat_invite_link::execute(&client, params).await?,
        "forwardMessage" => forward_message::execute(&client, params).await?,
        "forwardMessages" => forward_messages::execute(&client, params).await?,
        "getAvailableGifts" => get_available_gifts::execute(&client, params).await?,
        "getBusinessAccountGifts" => get_business_account_gifts::execute(&client, params).await?,
        "getBusinessAccountStarBalance" => {
            get_business_account_star_balance::execute(&client, params).await?
        }
        "getBusinessConnection" => get_business_connection::execute(&client, params).await?,
        "getChat" => get_chat::execute(&client, params).await?,
        "getChatAdministrators" => get_chat_administrators::execute(&client, params).await?,
        "getChatGifts" => get_chat_gifts::execute(&client, params).await?,
        "getChatMember" => get_chat_member::execute(&client, params).await?,
        "getChatMemberCount" => get_chat_member_count::execute(&client, params).await?,
        "getChatMenuButton" => get_chat_menu_button::execute(&client, params).await?,
        "getCustomEmojiStickers" => get_custom_emoji_stickers::execute(&client, params).await?,
        "getFile" => get_file::execute(&client, params).await?,
        "getForumTopicIconStickers" => {
            get_forum_topic_icon_stickers::execute(&client, params).await?
        }
        "getGameHighScores" => get_game_high_scores::execute(&client, params).await?,
        "getManagedBotToken" => get_managed_bot_token::execute(&client, params).await?,
        "getMe" => get_me::execute(&client, params).await?,
        "getMyCommands" => get_my_commands::execute(&client, params).await?,
        "getMyDefaultAdministratorRights" => {
            get_my_default_administrator_rights::execute(&client, params).await?
        }
        "getMyDescription" => get_my_description::execute(&client, params).await?,
        "getMyName" => get_my_name::execute(&client, params).await?,
        "getMyShortDescription" => get_my_short_description::execute(&client, params).await?,
        "getMyStarBalance" => get_my_star_balance::execute(&client, params).await?,
        "getStarTransactions" => get_star_transactions::execute(&client, params).await?,
        "getStickerSet" => get_sticker_set::execute(&client, params).await?,
        "getUpdates" => get_updates::execute(&client, params).await?,
        "getUserChatBoosts" => get_user_chat_boosts::execute(&client, params).await?,
        "getUserGifts" => get_user_gifts::execute(&client, params).await?,
        "getUserProfileAudios" => get_user_profile_audios::execute(&client, params).await?,
        "getUserProfilePhotos" => get_user_profile_photos::execute(&client, params).await?,
        "getWebhookInfo" => get_webhook_info::execute(&client, params).await?,
        "giftPremiumSubscription" => gift_premium_subscription::execute(&client, params).await?,
        "hideGeneralForumTopic" => hide_general_forum_topic::execute(&client, params).await?,
        "leaveChat" => leave_chat::execute(&client, params).await?,
        "logOut" => log_out::execute(&client, params).await?,
        "pinChatMessage" => pin_chat_message::execute(&client, params).await?,
        "postStory" => post_story::execute(&client, params).await?,
        "promoteChatMember" => promote_chat_member::execute(&client, params).await?,
        "readBusinessMessage" => read_business_message::execute(&client, params).await?,
        "refundStarPayment" => refund_star_payment::execute(&client, params).await?,
        "removeBusinessAccountProfilePhoto" => {
            remove_business_account_profile_photo::execute(&client, params).await?
        }
        "removeChatVerification" => remove_chat_verification::execute(&client, params).await?,
        "removeMyProfilePhoto" => remove_my_profile_photo::execute(&client, params).await?,
        "removeUserVerification" => remove_user_verification::execute(&client, params).await?,
        "reopenForumTopic" => reopen_forum_topic::execute(&client, params).await?,
        "reopenGeneralForumTopic" => reopen_general_forum_topic::execute(&client, params).await?,
        "replaceManagedBotToken" => replace_managed_bot_token::execute(&client, params).await?,
        "replaceStickerInSet" => replace_sticker_in_set::execute(&client, params).await?,
        "repostStory" => repost_story::execute(&client, params).await?,
        "restrictChatMember" => restrict_chat_member::execute(&client, params).await?,
        "revokeChatInviteLink" => revoke_chat_invite_link::execute(&client, params).await?,
        "savePreparedInlineMessage" => {
            save_prepared_inline_message::execute(&client, params).await?
        }
        "savePreparedKeyboardButton" => {
            save_prepared_keyboard_button::execute(&client, params).await?
        }
        "sendAnimation" => send_animation::execute(&client, params).await?,
        "sendAudio" => send_audio::execute(&client, params).await?,
        "sendChatAction" => send_chat_action::execute(&client, params).await?,
        "sendChecklist" => send_checklist::execute(&client, params).await?,
        "sendContact" => send_contact::execute(&client, params).await?,
        "sendDice" => send_dice::execute(&client, params).await?,
        "sendDocument" => send_document::execute(&client, params).await?,
        "sendGame" => send_game::execute(&client, params).await?,
        "sendGift" => send_gift::execute(&client, params).await?,
        "sendInvoice" => send_invoice::execute(&client, params).await?,
        "sendLocation" => send_location::execute(&client, params).await?,
        "sendMediaGroup" => send_media_group::execute(&client, params).await?,
        "sendMessage" => send_message::execute(&client, params).await?,
        "sendMessageDraft" => send_message_draft::execute(&client, params).await?,
        "sendPaidMedia" => send_paid_media::execute(&client, params).await?,
        "sendPhoto" => send_photo::execute(&client, params).await?,
        "sendPoll" => send_poll::execute(&client, params).await?,
        "sendSticker" => send_sticker::execute(&client, params).await?,
        "sendVenue" => send_venue::execute(&client, params).await?,
        "sendVideo" => send_video::execute(&client, params).await?,
        "sendVideoNote" => send_video_note::execute(&client, params).await?,
        "sendVoice" => send_voice::execute(&client, params).await?,
        "setBusinessAccountBio" => set_business_account_bio::execute(&client, params).await?,
        "setBusinessAccountGiftSettings" => {
            set_business_account_gift_settings::execute(&client, params).await?
        }
        "setBusinessAccountName" => set_business_account_name::execute(&client, params).await?,
        "setBusinessAccountProfilePhoto" => {
            set_business_account_profile_photo::execute(&client, params).await?
        }
        "setBusinessAccountUsername" => {
            set_business_account_username::execute(&client, params).await?
        }
        "setChatAdministratorCustomTitle" => {
            set_chat_administrator_custom_title::execute(&client, params).await?
        }
        "setChatDescription" => set_chat_description::execute(&client, params).await?,
        "setChatMemberTag" => set_chat_member_tag::execute(&client, params).await?,
        "setChatMenuButton" => set_chat_menu_button::execute(&client, params).await?,
        "setChatPermissions" => set_chat_permissions::execute(&client, params).await?,
        "setChatPhoto" => set_chat_photo::execute(&client, params).await?,
        "setChatStickerSet" => set_chat_sticker_set::execute(&client, params).await?,
        "setChatTitle" => set_chat_title::execute(&client, params).await?,
        "setCustomEmojiStickerSetThumbnail" => {
            set_custom_emoji_sticker_set_thumbnail::execute(&client, params).await?
        }
        "setGameScore" => set_game_score::execute(&client, params).await?,
        "setMessageReaction" => set_message_reaction::execute(&client, params).await?,
        "setMyCommands" => set_my_commands::execute(&client, params).await?,
        "setMyDefaultAdministratorRights" => {
            set_my_default_administrator_rights::execute(&client, params).await?
        }
        "setMyDescription" => set_my_description::execute(&client, params).await?,
        "setMyName" => set_my_name::execute(&client, params).await?,
        "setMyProfilePhoto" => set_my_profile_photo::execute(&client, params).await?,
        "setMyShortDescription" => set_my_short_description::execute(&client, params).await?,
        "setPassportDataErrors" => set_passport_data_errors::execute(&client, params).await?,
        "setStickerEmojiList" => set_sticker_emoji_list::execute(&client, params).await?,
        "setStickerKeywords" => set_sticker_keywords::execute(&client, params).await?,
        "setStickerMaskPosition" => set_sticker_mask_position::execute(&client, params).await?,
        "setStickerPositionInSet" => set_sticker_position_in_set::execute(&client, params).await?,
        "setStickerSetThumbnail" => set_sticker_set_thumbnail::execute(&client, params).await?,
        "setStickerSetTitle" => set_sticker_set_title::execute(&client, params).await?,
        "setUserEmojiStatus" => set_user_emoji_status::execute(&client, params).await?,
        "setWebhook" => set_webhook::execute(&client, params).await?,
        "stopMessageLiveLocation" => stop_message_live_location::execute(&client, params).await?,
        "stopPoll" => stop_poll::execute(&client, params).await?,
        "transferBusinessAccountStars" => {
            transfer_business_account_stars::execute(&client, params).await?
        }
        "transferGift" => transfer_gift::execute(&client, params).await?,
        "unbanChatMember" => unban_chat_member::execute(&client, params).await?,
        "unbanChatSenderChat" => unban_chat_sender_chat::execute(&client, params).await?,
        "unhideGeneralForumTopic" => unhide_general_forum_topic::execute(&client, params).await?,
        "unpinAllChatMessages" => unpin_all_chat_messages::execute(&client, params).await?,
        "unpinAllForumTopicMessages" => {
            unpin_all_forum_topic_messages::execute(&client, params).await?
        }
        "unpinAllGeneralForumTopicMessages" => {
            unpin_all_general_forum_topic_messages::execute(&client, params).await?
        }
        "unpinChatMessage" => unpin_chat_message::execute(&client, params).await?,
        "upgradeGift" => upgrade_gift::execute(&client, params).await?,
        "uploadStickerFile" => upload_sticker_file::execute(&client, params).await?,
        "verifyChat" => verify_chat::execute(&client, params).await?,
        "verifyUser" => verify_user::execute(&client, params).await?,
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
