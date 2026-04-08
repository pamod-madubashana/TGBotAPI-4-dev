import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "sendInvoice",
  href: "https://core.telegram.org/bots/api#sendinvoice",
  category: "Payments",
  description:
    "Use this method to send invoices. On success, the sent Message is returned.",
  returns: ["Message"],
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
      name: "message_thread_id",
      type: "Integer",
      required: false,
      description:
        "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only",
      inputType: "number",
    },
    {
      name: "direct_messages_topic_id",
      type: "Integer",
      required: false,
      description:
        "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat",
      inputType: "number",
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
      name: "start_parameter",
      type: "String",
      required: false,
      description:
        "Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter",
      inputType: "text",
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
        "URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.",
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
    {
      name: "disable_notification",
      type: "Boolean",
      required: false,
      description:
        "Sends the message silently. Users will receive a notification with no sound.",
      inputType: "boolean",
    },
    {
      name: "protect_content",
      type: "Boolean",
      required: false,
      description:
        "Protects the contents of the sent message from forwarding and saving",
      inputType: "boolean",
    },
    {
      name: "allow_paid_broadcast",
      type: "Boolean",
      required: false,
      description:
        "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance",
      inputType: "boolean",
    },
    {
      name: "message_effect_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the message effect to be added to the message; for private chats only",
      inputType: "text",
    },
    {
      name: "suggested_post_parameters",
      type: "SuggestedPostParameters",
      required: false,
      description:
        "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "reply_parameters",
      type: "ReplyParameters",
      required: false,
      description: "Description of the message to reply to",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "reply_markup",
      type: "InlineKeyboardMarkup",
      required: false,
      description:
        "A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    title: "Example title",
    description: "Example description",
    payload: "example",
    currency: "example",
    prices: [],
  },
};

export default method;
