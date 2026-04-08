import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "giftPremiumSubscription",
  href: "https://core.telegram.org/bots/api#giftpremiumsubscription",
  category: "Stars and gifts",
  description:
    "Gifts a Telegram Premium subscription to the given user. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description:
        "Unique identifier of the target user who will receive a Telegram Premium subscription",
      inputType: "number",
    },
    {
      name: "month_count",
      type: "Integer",
      required: true,
      description:
        "Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12",
      inputType: "number",
    },
    {
      name: "star_count",
      type: "Integer",
      required: true,
      description:
        "Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months",
      inputType: "number",
    },
    {
      name: "text",
      type: "String",
      required: false,
      description:
        "Text that will be shown along with the service message about the subscription; 0-128 characters",
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
    user_id: 1,
    month_count: 1,
    star_count: 1,
  },
};

export default method;
