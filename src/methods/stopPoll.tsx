import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "stopPoll",
  href: "https://core.telegram.org/bots/api#stoppoll",
  category: "Message updates",
  description:
    "Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.",
  returns: ["Poll"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the business connection on behalf of which the message to be edited was sent",
      inputType: "text",
    },
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
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
      name: "message_id",
      type: "Integer",
      required: true,
      description: "Identifier of the original message with the poll",
      inputType: "number",
    },
    {
      name: "reply_markup",
      type: "InlineKeyboardMarkup",
      required: false,
      description:
        "A JSON-serialized object for a new message inline keyboard.",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    message_id: 1,
  },
};

export default method;
