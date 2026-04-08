import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "banChatSenderChat",
  href: "https://core.telegram.org/bots/api#banchatsenderchat",
  category: "Chats",
  description:
    "Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.",
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
      name: "sender_chat_id",
      type: "Integer",
      required: true,
      description: "Unique identifier of the target sender chat",
      inputType: "number",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    sender_chat_id: 1,
  },
};

export default method;
