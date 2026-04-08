import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "banChatMember",
  href: "https://core.telegram.org/bots/api#banchatmember",
  category: "Chats",
  description:
    "Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.",
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
      name: "until_date",
      type: "Integer",
      required: false,
      description:
        "Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.",
      inputType: "number",
    },
    {
      name: "revoke_messages",
      type: "Boolean",
      required: false,
      description:
        "Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    user_id: 1,
  },
};

export default method;
