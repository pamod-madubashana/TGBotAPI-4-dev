import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getStickerSet",
  href: "https://core.telegram.org/bots/api#getstickerset",
  category: "Telegram Bot API",
  description:
    "Use this method to get a sticker set. On success, a StickerSet object is returned.",
  returns: ["StickerSet"],
  parameters: [
    {
      name: "name",
      type: "String",
      required: true,
      description: "Name of the sticker set",
      inputType: "text",
    },
  ],
  examplePayload: {
    name: "example",
  },
};

export default method;
