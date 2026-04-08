import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "answerShippingQuery",
  href: "https://core.telegram.org/bots/api#answershippingquery",
  category: "Payments",
  description:
    "If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "shipping_query_id",
      type: "String",
      required: true,
      description: "Unique identifier for the query to be answered",
      inputType: "text",
    },
    {
      name: "ok",
      type: "Boolean",
      required: true,
      description:
        "Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)",
      inputType: "boolean",
    },
    {
      name: "shipping_options",
      type: "Array of ShippingOption",
      required: false,
      description:
        "Required if ok is True. A JSON-serialized array of available shipping options.",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "error_message",
      type: "String",
      required: false,
      description:
        'Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable"). Telegram will display this message to the user.',
      inputType: "text",
    },
  ],
  examplePayload: {
    shipping_query_id: "example",
    ok: true,
  },
};

export default method;
