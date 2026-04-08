import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setStickerPositionInSet",
  href: "https://core.telegram.org/bots/api#setstickerpositioninset",
  category: "Telegram Bot API",
  description:
    "Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.",
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
      name: "position",
      type: "Integer",
      required: true,
      description: "New sticker position in the set, zero-based",
      inputType: "number",
    },
  ],
  examplePayload: {
    sticker: "C:/path/to/file",
    position: 1,
  },
};

export default method;
