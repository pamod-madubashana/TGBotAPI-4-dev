import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setChatDescription",
  href: "https://core.telegram.org/bots/api#setchatdescription",
  category: "Chats",
  description:
    "Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.",
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
      name: "description",
      type: "String",
      required: false,
      description: "New chat description, 0-255 characters",
      inputType: "textarea",
      valueMode: "text",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
  },
};

export default method;
