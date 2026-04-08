import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "stopMessageLiveLocation",
  href: "https://core.telegram.org/bots/api#stopmessagelivelocation",
  category: "Message updates",
  description:
    "Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.",
  returns: ["Message", "Boolean"],
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
      required: false,
      description:
        "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
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
      required: false,
      description:
        "Required if inline_message_id is not specified. Identifier of the message with live location to stop",
      inputType: "number",
    },
    {
      name: "inline_message_id",
      type: "String",
      required: false,
      description:
        "Required if chat_id and message_id are not specified. Identifier of the inline message",
      inputType: "text",
    },
    {
      name: "reply_markup",
      type: "InlineKeyboardMarkup",
      required: false,
      description: "A JSON-serialized object for a new inline keyboard.",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {},
};

export default method;
