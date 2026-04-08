import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "sendGift",
  href: "https://core.telegram.org/bots/api#sendgift",
  category: "Stars and gifts",
  description:
    "Sends a gift to the given user or channel chat. The gift can't be converted to Telegram Stars by the receiver. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: false,
      description:
        "Required if chat_id is not specified. Unique identifier of the target user who will receive the gift.",
      inputType: "number",
    },
    {
      name: "chat_id",
      type: "Integer or String",
      required: false,
      description:
        "Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift.",
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
      name: "gift_id",
      type: "String",
      required: true,
      description:
        "Identifier of the gift; limited gifts can't be sent to channel chats",
      inputType: "text",
    },
    {
      name: "pay_for_upgrade",
      type: "Boolean",
      required: false,
      description:
        "Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver",
      inputType: "boolean",
    },
    {
      name: "text",
      type: "String",
      required: false,
      description:
        "Text that will be shown along with the gift; 0-128 characters",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "text_parse_mode",
      type: "String",
      required: false,
      description:
        'Mode for parsing entities in the text. See formatting options for more details. Entities other than "bold", "italic", "underline", "strikethrough", "spoiler", "custom_emoji", and "date_time" are ignored.',
      inputType: "text",
    },
    {
      name: "text_entities",
      type: "Array of MessageEntity",
      required: false,
      description:
        'A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than "bold", "italic", "underline", "strikethrough", "spoiler", "custom_emoji", and "date_time" are ignored.',
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    gift_id: "example",
  },
};

export default method;
