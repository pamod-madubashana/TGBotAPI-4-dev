import { TelegramMethod } from "@/types/telegram";

export const getUpdatesMethod: TelegramMethod = {
  name: "getUpdates",
  category: "Getting updates",
  description:
    "Use this method to receive incoming updates using long polling. Returns an array of Update objects.",
  parameters: [
    {
      name: "offset",
      type: "Integer",
      required: false,
      description: "Identifier of the first update to return.",
      inputType: "number",
    },
    {
      name: "limit",
      type: "Integer",
      required: false,
      description:
        "Limits the number of updates to retrieve. Accepted values are 1-100.",
      inputType: "number",
    },
    {
      name: "timeout",
      type: "Integer",
      required: false,
      description: "Timeout in seconds for long polling.",
      inputType: "number",
    },
    {
      name: "allowed_updates",
      type: "Array of String",
      required: false,
      description: "JSON array of update types to receive.",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    limit: 10,
    timeout: 5,
    allowed_updates: ["message", "callback_query"],
  },
};
