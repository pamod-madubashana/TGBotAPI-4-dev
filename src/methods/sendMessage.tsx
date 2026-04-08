import { TelegramMethod } from "@/types/telegram";

export const sendMessageMethod: TelegramMethod = {
  name: "sendMessage",
  category: "Available methods",
  description:
    "Use this method to send text messages. On success, the sent Message object is returned.",
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description: "Unique identifier for the target chat or @channelusername.",
      inputType: "union",
      unionTypes: [
        { label: "Numeric ID", inputType: "number" },
        { label: "Username", inputType: "text" },
      ],
    },
    {
      name: "text",
      type: "String",
      required: true,
      description:
        "Text of the message to be sent, 1-4096 characters after entities parsing.",
      inputType: "textarea",
    },
    {
      name: "parse_mode",
      type: "String",
      required: false,
      description: "Mode for parsing entities in the message text.",
      inputType: "select",
      options: ["", "MarkdownV2", "HTML"],
    },
    {
      name: "disable_notification",
      type: "Boolean",
      required: false,
      description: "Sends the message silently.",
      inputType: "boolean",
    },
    {
      name: "protect_content",
      type: "Boolean",
      required: false,
      description:
        "Protects the contents of the message from forwarding and saving.",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    chat_id: "@my_channel",
    text: "Hello from Telegram Bot API Tester",
    parse_mode: "HTML",
  },
};
