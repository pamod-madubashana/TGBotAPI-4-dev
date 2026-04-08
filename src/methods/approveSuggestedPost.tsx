import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "approveSuggestedPost",
  href: "https://core.telegram.org/bots/api#approvesuggestedpost",
  category: "Message updates",
  description:
    "Use this method to approve a suggested post in a direct messages chat. The bot must have the 'can_post_messages' administrator right in the corresponding channel chat. Returns True on success.",
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
      description: "Identifier of a suggested post message to approve",
      inputType: "number",
    },
    {
      name: "send_date",
      type: "Integer",
      required: false,
      description:
        "Point in time (Unix timestamp) when the post is expected to be published; omit if the date has already been specified when the suggested post was created. If specified, then the date must be not more than 2678400 seconds (30 days) in the future",
      inputType: "number",
    },
  ],
  examplePayload: {
    chat_id: 1,
    message_id: 1,
  },
};

export default method;
