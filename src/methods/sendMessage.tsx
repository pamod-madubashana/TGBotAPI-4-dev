import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "sendMessage",
  href: "https://core.telegram.org/bots/api#sendmessage",
  category: "Messages",
  description:
    "Use this method to send text messages. On success, the sent Message is returned.",
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
      name: "text",
      type: "String",
      required: true,
      description:
        "Text of the message to be sent, 1-4096 characters after entities parsing",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "parse_mode",
      type: "String",
      required: false,
      description:
        "Mode for parsing entities in the message text. See formatting options for more details.",
      inputType: "text",
    },
    {
      name: "entities",
      type: "Array of MessageEntity",
      required: false,
      description:
        "A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "link_preview_options",
      type: "LinkPreviewOptions",
      required: false,
      description: "Link preview generation options for the message",
      inputType: "textarea",
      valueMode: "json",
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
    text: "Hello from Telegram Bot API Tester",
  },
};

export default method;
