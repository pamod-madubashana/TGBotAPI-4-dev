import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "createInvoiceLink",
  href: "https://core.telegram.org/bots/api#createinvoicelink",
  category: "Payments",
  description:
    "Use this method to create a link for an invoice. Returns the created invoice link as String on success.",
  returns: ["String"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the business connection on behalf of which the link will be created. For payments in Telegram Stars only.",
      inputType: "text",
    },
    {
      name: "title",
      type: "String",
      required: true,
      description: "Product name, 1-32 characters",
      inputType: "text",
    },
    {
      name: "description",
      type: "String",
      required: true,
      description: "Product description, 1-255 characters",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "payload",
      type: "String",
      required: true,
      description:
        "Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "provider_token",
      type: "String",
      required: false,
      description:
        "Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.",
      inputType: "text",
    },
    {
      name: "currency",
      type: "String",
      required: true,
      description:
        'Three-letter ISO 4217 currency code, see more on currencies. Pass "XTR" for payments in Telegram Stars.',
      inputType: "text",
    },
    {
      name: "prices",
      type: "Array of LabeledPrice",
      required: true,
      description:
        "Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "subscription_period",
      type: "Integer",
      required: false,
      description:
        'The number of seconds the subscription will be active for before the next payment. The currency must be set to "XTR" (Telegram Stars) if the parameter is used. Currently, it must always be 2592000 (30 days) if specified. Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions from the same user. Subscription price must no exceed 10000 Telegram Stars.',
      inputType: "number",
    },
    {
      name: "max_tip_amount",
      type: "Integer",
      required: false,
      description:
        "The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.",
      inputType: "number",
    },
    {
      name: "suggested_tip_amounts",
      type: "Array of Integer",
      required: false,
      description:
        "A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "provider_data",
      type: "String",
      required: false,
      description:
        "JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.",
      inputType: "text",
    },
    {
      name: "photo_url",
      type: "String",
      required: false,
      description:
        "URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.",
      inputType: "text",
    },
    {
      name: "photo_size",
      type: "Integer",
      required: false,
      description: "Photo size in bytes",
      inputType: "number",
    },
    {
      name: "photo_width",
      type: "Integer",
      required: false,
      description: "Photo width",
      inputType: "number",
    },
    {
      name: "photo_height",
      type: "Integer",
      required: false,
      description: "Photo height",
      inputType: "number",
    },
    {
      name: "need_name",
      type: "Boolean",
      required: false,
      description:
        "Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.",
      inputType: "boolean",
    },
    {
      name: "need_phone_number",
      type: "Boolean",
      required: false,
      description:
        "Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.",
      inputType: "boolean",
    },
    {
      name: "need_email",
      type: "Boolean",
      required: false,
      description:
        "Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.",
      inputType: "boolean",
    },
    {
      name: "need_shipping_address",
      type: "Boolean",
      required: false,
      description:
        "Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.",
      inputType: "boolean",
    },
    {
      name: "send_phone_number_to_provider",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.",
      inputType: "boolean",
    },
    {
      name: "send_email_to_provider",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.",
      inputType: "boolean",
    },
    {
      name: "is_flexible",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    title: "Example title",
    description: "Example description",
    payload: "example",
    currency: "example",
    prices: [],
  },
};

export default method;
