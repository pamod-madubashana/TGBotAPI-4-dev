import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "readBusinessMessage",
  href: "https://core.telegram.org/bots/api#readbusinessmessage",
  category: "Business",
  description:
    "Marks incoming message as read on behalf of a business account. Requires the can_read_messages business bot right. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: true,
      description:
        "Unique identifier of the business connection on behalf of which to read the message",
      inputType: "text",
    },
    {
      name: "chat_id",
      type: "Integer",
      required: true,
      description:
        "Unique identifier of the chat in which the message was received. The chat must have been active in the last 24 hours.",
      inputType: "number",
    },
    {
      name: "message_id",
      type: "Integer",
      required: true,
      description: "Unique identifier of the message to mark as read",
      inputType: "number",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    chat_id: 1,
    message_id: 1,
  },
};

export default method;
