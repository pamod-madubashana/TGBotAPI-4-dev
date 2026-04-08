import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setChatStickerSet",
  href: "https://core.telegram.org/bots/api#setchatstickerset",
  category: "Chats",
  description:
    "Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)",
      inputType: "union",
      unionTypes: [
        {
          label: "Integer",
          inputType: "number",
        },
        {
          label: "String",
          inputType: "text",
        },
      ],
    },
    {
      name: "sticker_set_name",
      type: "String",
      required: true,
      description: "Name of the sticker set to be set as the group sticker set",
      inputType: "text",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    sticker_set_name: "C:/path/to/file",
  },
};

export default method;
