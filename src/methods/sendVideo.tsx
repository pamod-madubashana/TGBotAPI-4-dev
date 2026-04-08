import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "sendVideo",
  href: "https://core.telegram.org/bots/api#sendvideo",
  category: "Messages",
  description:
    "Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.",
  returns: ["Message"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the business connection on behalf of which the message will be sent",
      inputType: "text",
    },
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
      inputType: "union",
      unionTypes: [
        {
          label: "Integer",
          inputType: "number",
        },
        {
          label: "String",
          inputType: "text",
        },
      ],
    },
    {
      name: "message_thread_id",
      type: "Integer",
      required: false,
      description:
        "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only",
      inputType: "number",
    },
    {
      name: "direct_messages_topic_id",
      type: "Integer",
      required: false,
      description:
        "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat",
      inputType: "number",
    },
    {
      name: "video",
      type: "InputFile or String",
      required: true,
      description:
        "Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files",
      inputType: "file",
    },
    {
      name: "duration",
      type: "Integer",
      required: false,
      description: "Duration of sent video in seconds",
      inputType: "number",
    },
    {
      name: "width",
      type: "Integer",
      required: false,
      description: "Video width",
      inputType: "number",
    },
    {
      name: "height",
      type: "Integer",
      required: false,
      description: "Video height",
      inputType: "number",
    },
    {
      name: "thumbnail",
      type: "InputFile or String",
      required: false,
      description:
        "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files",
      inputType: "file",
    },
    {
      name: "cover",
      type: "InputFile or String",
      required: false,
      description:
        'Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
      inputType: "file",
    },
    {
      name: "start_timestamp",
      type: "Integer",
      required: false,
      description: "Start timestamp for the video in the message",
      inputType: "number",
    },
    {
      name: "caption",
      type: "String",
      required: false,
      description:
        "Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "parse_mode",
      type: "String",
      required: false,
      description:
        "Mode for parsing entities in the video caption. See formatting options for more details.",
      inputType: "text",
    },
    {
      name: "caption_entities",
      type: "Array of MessageEntity",
      required: false,
      description:
        "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "show_caption_above_media",
      type: "Boolean",
      required: false,
      description:
        "Pass True, if the caption must be shown above the message media",
      inputType: "boolean",
    },
    {
      name: "has_spoiler",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the video needs to be covered with a spoiler animation",
      inputType: "boolean",
    },
    {
      name: "supports_streaming",
      type: "Boolean",
      required: false,
      description: "Pass True if the uploaded video is suitable for streaming",
      inputType: "boolean",
    },
    {
      name: "disable_notification",
      type: "Boolean",
      required: false,
      description:
        "Sends the message silently. Users will receive a notification with no sound.",
      inputType: "boolean",
    },
    {
      name: "protect_content",
      type: "Boolean",
      required: false,
      description:
        "Protects the contents of the sent message from forwarding and saving",
      inputType: "boolean",
    },
    {
      name: "allow_paid_broadcast",
      type: "Boolean",
      required: false,
      description:
        "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance",
      inputType: "boolean",
    },
    {
      name: "message_effect_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the message effect to be added to the message; for private chats only",
      inputType: "text",
    },
    {
      name: "suggested_post_parameters",
      type: "SuggestedPostParameters",
      required: false,
      description:
        "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "reply_parameters",
      type: "ReplyParameters",
      required: false,
      description: "Description of the message to reply to",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "reply_markup",
      type: "InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply",
      required: false,
      description:
        "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    video: "C:/path/to/file",
  },
};

export default method;
