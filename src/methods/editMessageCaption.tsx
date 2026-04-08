import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "editMessageCaption",
  href: "https://core.telegram.org/bots/api#editmessagecaption",
  category: "Message updates",
  description:
    "Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.",
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
      name: "caption",
      type: "String",
      required: false,
      description:
        "New caption of the message, 0-1024 characters after entities parsing",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "parse_mode",
      type: "String",
      required: false,
      description:
        "Mode for parsing entities in the message caption. See formatting options for more details.",
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
        "Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages.",
      inputType: "boolean",
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
  examplePayload: {},
};

export default method;
