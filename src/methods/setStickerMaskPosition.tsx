import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setStickerMaskPosition",
  href: "https://core.telegram.org/bots/api#setstickermaskposition",
  category: "Telegram Bot API",
  description:
    "Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.",
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
      name: "mask_position",
      type: "MaskPosition",
      required: false,
      description:
        "A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    sticker: "C:/path/to/file",
  },
};

export default method;
