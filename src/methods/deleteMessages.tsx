import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "deleteMessages",
  href: "https://core.telegram.org/bots/api#deletemessages",
  category: "Message updates",
  description:
    "Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
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
      name: "message_ids",
      type: "Array of Integer",
      required: true,
      description:
        "A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    message_ids: [],
  },
};

export default method;
