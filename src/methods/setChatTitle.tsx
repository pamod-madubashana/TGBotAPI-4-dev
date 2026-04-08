import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setChatTitle",
  href: "https://core.telegram.org/bots/api#setchattitle",
  category: "Chats",
  description:
    "Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.",
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
      name: "title",
      type: "String",
      required: true,
      description: "New chat title, 1-128 characters",
      inputType: "text",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    title: "Example title",
  },
};

export default method;
