import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "editMessageText",
  href: "https://core.telegram.org/bots/api#editmessagetext",
  category: "Message updates",
  description:
    "Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.",
  returns: ["Message", "Boolean"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the business connection on behalf of which the message to be edited was sent",
      inputType: "text",
    },
    {
      name: "chat_id",
      type: "Integer or String",
      required: false,
      description:
        "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
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
      name: "message_id",
      type: "Integer",
      required: false,
      description:
        "Required if inline_message_id is not specified. Identifier of the message to edit",
      inputType: "number",
    },
    {
      name: "inline_message_id",
      type: "String",
      required: false,
      description:
        "Required if chat_id and message_id are not specified. Identifier of the inline message",
      inputType: "text",
    },
    {
      name: "text",
      type: "String",
      required: true,
      description:
        "New text of the message, 1-4096 characters after entities parsing",
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
      name: "reply_markup",
      type: "InlineKeyboardMarkup",
      required: false,
      description: "A JSON-serialized object for an inline keyboard.",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    text: "Hello from Telegram Bot API Tester",
  },
};

export default method;
