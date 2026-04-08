import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "answerWebAppQuery",
  href: "https://core.telegram.org/bots/api#answerwebappquery",
  category: "Telegram Bot API",
  description:
    "Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.",
  returns: ["SentWebAppMessage"],
  parameters: [
    {
      name: "web_app_query_id",
      type: "String",
      required: true,
      description: "Unique identifier for the query to be answered",
      inputType: "text",
    },
    {
      name: "result",
      type: "InlineQueryResult",
      required: true,
      description: "A JSON-serialized object describing the message to be sent",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    web_app_query_id: "example",
    result: {},
  },
};

export default method;
