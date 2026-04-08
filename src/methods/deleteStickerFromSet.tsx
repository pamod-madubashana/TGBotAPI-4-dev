import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "deleteStickerFromSet",
  href: "https://core.telegram.org/bots/api#deletestickerfromset",
  category: "Telegram Bot API",
  description:
    "Use this method to delete a sticker from a set created by the bot. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "sticker",
      type: "String",
      required: true,
      description: "File identifier of the sticker",
      inputType: "text",
    },
  ],
  examplePayload: {
    sticker: "C:/path/to/file",
  },
};

export default method;
