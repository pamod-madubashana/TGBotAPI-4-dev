import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setStickerSetThumbnail",
  href: "https://core.telegram.org/bots/api#setstickersetthumbnail",
  category: "Telegram Bot API",
  description:
    "Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.",
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
      name: "user_id",
      type: "Integer",
      required: true,
      description: "User identifier of the sticker set owner",
      inputType: "number",
    },
    {
      name: "thumbnail",
      type: "InputFile or String",
      required: false,
      description:
        "A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements), or a .WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.",
      inputType: "file",
    },
    {
      name: "format",
      type: "String",
      required: true,
      description:
        'Format of the thumbnail, must be one of "static" for a .WEBP or .PNG image, "animated" for a .TGS animation, or "video" for a .WEBM video',
      inputType: "text",
    },
  ],
  examplePayload: {
    name: "example",
    user_id: 1,
    format: "example",
  },
};

export default method;
