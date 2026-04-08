import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "unbanChatMember",
  href: "https://core.telegram.org/bots/api#unbanchatmember",
  category: "Chats",
  description:
    "Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)",
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
    {
      name: "only_if_banned",
      type: "Boolean",
      required: false,
      description: "Do nothing if the user is not banned",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    user_id: 1,
  },
};

export default method;
