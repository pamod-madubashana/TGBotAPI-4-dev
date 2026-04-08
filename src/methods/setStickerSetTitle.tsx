import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setStickerSetTitle",
  href: "https://core.telegram.org/bots/api#setstickersettitle",
  category: "Telegram Bot API",
  description:
    "Use this method to set the title of a created sticker set. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "name",
      type: "String",
      required: true,
      description: "Sticker set name",
      inputType: "text",
    },
    {
      name: "title",
      type: "String",
      required: true,
      description: "Sticker set title, 1-64 characters",
      inputType: "text",
    },
  ],
  examplePayload: {
    name: "example",
    title: "Example title",
  },
};

export default method;
