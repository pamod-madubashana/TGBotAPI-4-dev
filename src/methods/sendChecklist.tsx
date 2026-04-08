import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "sendChecklist",
  href: "https://core.telegram.org/bots/api#sendchecklist",
  category: "Messages",
  description:
    "Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned.",
  returns: ["Message"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: true,
      description:
        "Unique identifier of the business connection on behalf of which the message will be sent",
      inputType: "text",
    },
    {
      name: "chat_id",
      type: "Integer",
      required: true,
      description: "Unique identifier for the target chat",
      inputType: "number",
    },
    {
      name: "checklist",
      type: "InputChecklist",
      required: true,
      description: "A JSON-serialized object for the checklist to send",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "disable_notification",
      type: "Boolean",
      required: false,
      description:
        "Sends the message silently. Users will receive a notification with no sound.",
      inputType: "boolean",
    },
    {
      name: "protect_content",
      type: "Boolean",
      required: false,
      description:
        "Protects the contents of the sent message from forwarding and saving",
      inputType: "boolean",
    },
    {
      name: "message_effect_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the message effect to be added to the message",
      inputType: "text",
    },
    {
      name: "reply_parameters",
      type: "ReplyParameters",
      required: false,
      description:
        "A JSON-serialized object for description of the message to reply to",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "reply_markup",
      type: "InlineKeyboardMarkup",
      required: false,
      description: "A JSON-serialized object for an inline keyboard",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    chat_id: 1,
    checklist: {},
  },
};

export default method;
