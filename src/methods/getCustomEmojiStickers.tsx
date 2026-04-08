import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getCustomEmojiStickers",
  href: "https://core.telegram.org/bots/api#getcustomemojistickers",
  category: "Telegram Bot API",
  description:
    "Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.",
  returns: ["Array of Sticker"],
  parameters: [
    {
      name: "custom_emoji_ids",
      type: "Array of String",
      required: true,
      description:
        "A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    custom_emoji_ids: [],
  },
};

export default method;
