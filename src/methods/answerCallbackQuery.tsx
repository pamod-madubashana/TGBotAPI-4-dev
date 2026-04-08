import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "answerCallbackQuery",
  href: "https://core.telegram.org/bots/api#answercallbackquery",
  category: "Chats",
  description:
    "Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "callback_query_id",
      type: "String",
      required: true,
      description: "Unique identifier for the query to be answered",
      inputType: "text",
    },
    {
      name: "text",
      type: "String",
      required: false,
      description:
        "Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "show_alert",
      type: "Boolean",
      required: false,
      description:
        "If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.",
      inputType: "boolean",
    },
    {
      name: "url",
      type: "String",
      required: false,
      description:
        "URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "cache_time",
      type: "Integer",
      required: false,
      description:
        "The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.",
      inputType: "number",
    },
  ],
  examplePayload: {
    callback_query_id: "example",
  },
};

export default method;
