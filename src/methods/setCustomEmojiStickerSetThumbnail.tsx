import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setCustomEmojiStickerSetThumbnail",
  href: "https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail",
  category: "Telegram Bot API",
  description:
    "Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.",
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
      name: "custom_emoji_id",
      type: "String",
      required: false,
      description:
        "Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.",
      inputType: "text",
    },
  ],
  examplePayload: {
    name: "example",
  },
};

export default method;
