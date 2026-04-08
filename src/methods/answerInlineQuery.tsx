import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "answerInlineQuery",
  href: "https://core.telegram.org/bots/api#answerinlinequery",
  category: "Stories and inline",
  description:
    "Use this method to send answers to an inline query. On success, True is returned.\n\nNo more than 50 results per query are allowed.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "inline_query_id",
      type: "String",
      required: true,
      description: "Unique identifier for the answered query",
      inputType: "text",
    },
    {
      name: "results",
      type: "Array of InlineQueryResult",
      required: true,
      description: "A JSON-serialized array of results for the inline query",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "cache_time",
      type: "Integer",
      required: false,
      description:
        "The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.",
      inputType: "number",
    },
    {
      name: "is_personal",
      type: "Boolean",
      required: false,
      description:
        "Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.",
      inputType: "boolean",
    },
    {
      name: "next_offset",
      type: "String",
      required: false,
      description:
        "Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.",
      inputType: "text",
    },
    {
      name: "button",
      type: "InlineQueryResultsButton",
      required: false,
      description:
        "A JSON-serialized object describing a button to be shown above inline query results",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    inline_query_id: "example",
    results: [],
  },
};

export default method;
