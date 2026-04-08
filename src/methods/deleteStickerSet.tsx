import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "deleteStickerSet",
  href: "https://core.telegram.org/bots/api#deletestickerset",
  category: "Telegram Bot API",
  description:
    "Use this method to delete a sticker set that was created by the bot. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "name",
      type: "String",
      required: true,
      description: "Sticker set name",
      inputType: "text",
    },
  ],
  examplePayload: {
    name: "example",
  },
};

export default method;
