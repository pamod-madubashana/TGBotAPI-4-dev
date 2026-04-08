import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "editMessageChecklist",
  href: "https://core.telegram.org/bots/api#editmessagechecklist",
  category: "Message updates",
  description:
    "Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned.",
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
      name: "message_id",
      type: "Integer",
      required: true,
      description: "Unique identifier for the target message",
      inputType: "number",
    },
    {
      name: "checklist",
      type: "InputChecklist",
      required: true,
      description: "A JSON-serialized object for the new checklist",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "reply_markup",
      type: "InlineKeyboardMarkup",
      required: false,
      description:
        "A JSON-serialized object for the new inline keyboard for the message",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    chat_id: 1,
    message_id: 1,
    checklist: {},
  },
};

export default method;
