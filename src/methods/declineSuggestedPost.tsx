import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "declineSuggestedPost",
  href: "https://core.telegram.org/bots/api#declinesuggestedpost",
  category: "Message updates",
  description:
    "Use this method to decline a suggested post in a direct messages chat. The bot must have the 'can_manage_direct_messages' administrator right in the corresponding channel chat. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer",
      required: true,
      description: "Unique identifier for the target direct messages chat",
      inputType: "number",
    },
    {
      name: "message_id",
      type: "Integer",
      required: true,
      description: "Identifier of a suggested post message to decline",
      inputType: "number",
    },
    {
      name: "comment",
      type: "String",
      required: false,
      description:
        "Comment for the creator of the suggested post; 0-128 characters",
      inputType: "text",
    },
  ],
  examplePayload: {
    chat_id: 1,
    message_id: 1,
  },
};

export default method;
