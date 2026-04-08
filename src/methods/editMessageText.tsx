import { TelegramMethod } from "@/types/telegram";

export const editMessageTextMethod: TelegramMethod = {
  name: "editMessageText",
  category: "Updating messages",
  description:
    "Use this method to edit text and game messages sent by the bot or via the bot.",
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
      name: "message_id",
      type: "Integer",
      required: true,
      description: "Identifier of the message to edit.",
      inputType: "number",
    },
    {
      name: "text",
      type: "String",
      required: true,
      description:
        "New text of the message, 1-4096 characters after entities parsing.",
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
  ],
  examplePayload: {
    chat_id: "@my_channel",
    message_id: 1,
    text: "Edited from Telegram Bot API Tester",
  },
};
