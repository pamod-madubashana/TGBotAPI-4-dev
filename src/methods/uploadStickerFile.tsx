import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "uploadStickerFile",
  href: "https://core.telegram.org/bots/api#uploadstickerfile",
  category: "Telegram Bot API",
  description:
    "Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded File on success.",
  returns: ["File"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "User identifier of sticker file owner",
      inputType: "number",
    },
    {
      name: "sticker",
      type: "InputFile",
      required: true,
      description:
        "A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files: https://core.telegram.org/bots/api#sending-files",
      inputType: "file",
    },
    {
      name: "sticker_format",
      type: "String",
      required: true,
      description:
        'Format of the sticker, must be one of "static", "animated", "video"',
      inputType: "text",
    },
  ],
  examplePayload: {
    user_id: 1,
    sticker: "C:/path/to/file",
    sticker_format: "C:/path/to/file",
  },
};

export default method;
