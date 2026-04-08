import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "sendMessageDraft",
  href: "https://core.telegram.org/bots/api#sendmessagedraft",
  category: "Messages",
  description:
    "Use this method to stream a partial message to a user while the message is being generated. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer",
      required: true,
      description: "Unique identifier for the target private chat",
      inputType: "number",
    },
    {
      name: "message_thread_id",
      type: "Integer",
      required: false,
      description: "Unique identifier for the target message thread",
      inputType: "number",
    },
    {
      name: "draft_id",
      type: "Integer",
      required: true,
      description:
        "Unique identifier of the message draft; must be non-zero. Changes of drafts with the same identifier are animated",
      inputType: "number",
    },
    {
      name: "text",
      type: "String",
      required: true,
      description:
        "Text of the message to be sent, 1-4096 characters after entities parsing",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "parse_mode",
      type: "String",
      required: false,
      description:
        "Mode for parsing entities in the message text. See formatting options for more details.",
      inputType: "text",
    },
    {
      name: "entities",
      type: "Array of MessageEntity",
      required: false,
      description:
        "A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    chat_id: 1,
    draft_id: 1,
    text: "Hello from Telegram Bot API Tester",
  },
};

export default method;
