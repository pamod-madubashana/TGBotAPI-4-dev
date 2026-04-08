import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setStickerKeywords",
  href: "https://core.telegram.org/bots/api#setstickerkeywords",
  category: "Telegram Bot API",
  description:
    "Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "sticker",
      type: "String",
      required: true,
      description: "File identifier of the sticker",
      inputType: "text",
    },
    {
      name: "keywords",
      type: "Array of String",
      required: false,
      description:
        "A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    sticker: "C:/path/to/file",
  },
};

export default method;
