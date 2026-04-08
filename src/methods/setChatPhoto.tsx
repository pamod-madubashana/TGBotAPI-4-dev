import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setChatPhoto",
  href: "https://core.telegram.org/bots/api#setchatphoto",
  category: "Chats",
  description:
    "Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
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
      name: "photo",
      type: "InputFile",
      required: true,
      description: "New chat photo, uploaded using multipart/form-data",
      inputType: "file",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    photo: "C:/path/to/file",
  },
};

export default method;
