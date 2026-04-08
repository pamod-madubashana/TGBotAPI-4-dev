import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "createNewStickerSet",
  href: "https://core.telegram.org/bots/api#createnewstickerset",
  category: "Telegram Bot API",
  description:
    "Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "User identifier of created sticker set owner",
      inputType: "number",
    },
    {
      name: "name",
      type: "String",
      required: true,
      description:
        'Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can\'t contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.',
      inputType: "text",
    },
    {
      name: "title",
      type: "String",
      required: true,
      description: "Sticker set title, 1-64 characters",
      inputType: "text",
    },
    {
      name: "stickers",
      type: "Array of InputSticker",
      required: true,
      description:
        "A JSON-serialized list of 1-50 initial stickers to be added to the sticker set",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "sticker_type",
      type: "String",
      required: false,
      description:
        'Type of stickers in the set, pass "regular", "mask", or "custom_emoji". By default, a regular sticker set is created.',
      inputType: "text",
    },
    {
      name: "needs_repainting",
      type: "Boolean",
      required: false,
      description:
        "Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    user_id: 1,
    name: "example",
    title: "Example title",
    stickers: [],
  },
};

export default method;
