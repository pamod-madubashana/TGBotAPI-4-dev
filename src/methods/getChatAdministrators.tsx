import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getChatAdministrators",
  href: "https://core.telegram.org/bots/api#getchatadministrators",
  category: "Chats",
  description:
    "Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.",
  returns: ["Array of ChatMember"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)",
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
