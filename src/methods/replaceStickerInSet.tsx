import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "replaceStickerInSet",
  href: "https://core.telegram.org/bots/api#replacestickerinset",
  category: "Telegram Bot API",
  description:
    "Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "User identifier of the sticker set owner",
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
      name: "old_sticker",
      type: "String",
      required: true,
      description: "File identifier of the replaced sticker",
      inputType: "text",
    },
    {
      name: "sticker",
      type: "InputSticker",
      required: true,
      description:
        "A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    user_id: 1,
    name: "example",
    old_sticker: "C:/path/to/file",
    sticker: {},
  },
};

export default method;
