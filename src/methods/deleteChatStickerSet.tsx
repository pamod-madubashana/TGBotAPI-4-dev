import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "deleteChatStickerSet",
  href: "https://core.telegram.org/bots/api#deletechatstickerset",
  category: "Chats",
  description:
    "Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.",
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
  ],
  examplePayload: {
    chat_id: "@your_channel",
  },
};

export default method;
