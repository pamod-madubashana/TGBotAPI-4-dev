import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "addStickerToSet",
  href: "https://core.telegram.org/bots/api#addstickertoset",
  category: "Telegram Bot API",
  description:
    "Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "User identifier of sticker set owner",
      inputType: "number",
    },
    {
      name: "name",
      type: "String",
      required: true,
      description: "Sticker set name",
      inputType: "text",
    },
    {
      name: "sticker",
      type: "InputSticker",
      required: true,
      description:
        "A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    user_id: 1,
    name: "example",
    sticker: {},
  },
};

export default method;
