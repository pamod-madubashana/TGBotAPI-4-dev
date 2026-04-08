import { TelegramMethod } from "@/types/telegram";

export const answerCallbackQueryMethod: TelegramMethod = {
  name: "answerCallbackQuery",
  category: "Available methods",
  description:
    "Use this method to send answers to callback queries sent from inline keyboards.",
  parameters: [
    {
      name: "callback_query_id",
      type: "String",
      required: true,
      description: "Unique identifier for the query to be answered.",
      inputType: "text",
    },
    {
      name: "text",
      type: "String",
      required: false,
      description: "Notification text shown to the user.",
      inputType: "textarea",
    },
    {
      name: "show_alert",
      type: "Boolean",
      required: false,
      description: "Shows an alert instead of a toast notification.",
      inputType: "boolean",
    },
    {
      name: "url",
      type: "String",
      required: false,
      description: "URL opened by the client, only for callback game buttons.",
      inputType: "text",
    },
    {
      name: "cache_time",
      type: "Integer",
      required: false,
      description:
        "Maximum time in seconds that the result may be cached client-side.",
      inputType: "number",
    },
  ],
  examplePayload: {
    callback_query_id: "1234567890",
    text: "Action confirmed",
  },
};
