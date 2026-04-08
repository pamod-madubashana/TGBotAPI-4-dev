import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "deleteBusinessMessages",
  href: "https://core.telegram.org/bots/api#deletebusinessmessages",
  category: "Business",
  description:
    "Delete messages on behalf of a business account. Requires the can_delete_sent_messages business bot right to delete messages sent by the bot itself, or the can_delete_all_messages business bot right to delete any message. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: true,
      description:
        "Unique identifier of the business connection on behalf of which to delete the messages",
      inputType: "text",
    },
    {
      name: "message_ids",
      type: "Array of Integer",
      required: true,
      description:
        "A JSON-serialized list of 1-100 identifiers of messages to delete. All messages must be from the same chat. See deleteMessage for limitations on which messages can be deleted",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    message_ids: [],
  },
};

export default method;
