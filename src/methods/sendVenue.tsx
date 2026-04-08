import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "sendVenue",
  href: "https://core.telegram.org/bots/api#sendvenue",
  category: "Messages",
  description:
    "Use this method to send information about a venue. On success, the sent Message is returned.",
  returns: ["Message"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the business connection on behalf of which the message will be sent",
      inputType: "text",
    },
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
      name: "latitude",
      type: "Float",
      required: true,
      description: "Latitude of the venue",
      inputType: "number",
    },
    {
      name: "longitude",
      type: "Float",
      required: true,
      description: "Longitude of the venue",
      inputType: "number",
    },
    {
      name: "title",
      type: "String",
      required: true,
      description: "Name of the venue",
      inputType: "text",
    },
    {
      name: "address",
      type: "String",
      required: true,
      description: "Address of the venue",
      inputType: "text",
    },
    {
      name: "foursquare_id",
      type: "String",
      required: false,
      description: "Foursquare identifier of the venue",
      inputType: "text",
    },
    {
      name: "foursquare_type",
      type: "String",
      required: false,
      description:
        'Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)',
      inputType: "text",
    },
    {
      name: "google_place_id",
      type: "String",
      required: false,
      description: "Google Places identifier of the venue",
      inputType: "text",
    },
    {
      name: "google_place_type",
      type: "String",
      required: false,
      description: "Google Places type of the venue. (See supported types.)",
      inputType: "text",
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
      type: "InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply",
      required: false,
      description:
        "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    latitude: 37.7749,
    longitude: -122.4194,
    title: "Example title",
    address: "example",
  },
};

export default method;
