import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getUserChatBoosts",
  href: "https://core.telegram.org/bots/api#getuserchatboosts",
  category: "Chats",
  description:
    "Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.",
  returns: ["UserChatBoosts"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the chat or username of the channel (in the format @channelusername)",
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
      name: "user_id",
      type: "Integer",
      required: true,
      description: "Unique identifier of the target user",
      inputType: "number",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    user_id: 1,
  },
};

export default method;
