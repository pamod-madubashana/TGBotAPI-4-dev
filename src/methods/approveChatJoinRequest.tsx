import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "approveChatJoinRequest",
  href: "https://core.telegram.org/bots/api#approvechatjoinrequest",
  category: "Chats",
  description:
    "Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.",
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
