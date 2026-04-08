import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setStickerEmojiList",
  href: "https://core.telegram.org/bots/api#setstickeremojilist",
  category: "Telegram Bot API",
  description:
    "Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.",
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
      name: "emoji_list",
      type: "Array of String",
      required: true,
      description:
        "A JSON-serialized list of 1-20 emoji associated with the sticker",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    sticker: "C:/path/to/file",
    emoji_list: [],
  },
};

export default method;
