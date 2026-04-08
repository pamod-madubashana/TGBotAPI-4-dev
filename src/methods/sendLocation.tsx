import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "sendLocation",
  href: "https://core.telegram.org/bots/api#sendlocation",
  category: "Messages",
  description:
    "Use this method to send point on the map. On success, the sent Message is returned.",
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
      description: "Latitude of the location",
      inputType: "number",
    },
    {
      name: "longitude",
      type: "Float",
      required: true,
      description: "Longitude of the location",
      inputType: "number",
    },
    {
      name: "horizontal_accuracy",
      type: "Float",
      required: false,
      description:
        "The radius of uncertainty for the location, measured in meters; 0-1500",
      inputType: "number",
    },
    {
      name: "live_period",
      type: "Integer",
      required: false,
      description:
        "Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.",
      inputType: "number",
    },
    {
      name: "heading",
      type: "Integer",
      required: false,
      description:
        "For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.",
      inputType: "number",
    },
    {
      name: "proximity_alert_radius",
      type: "Integer",
      required: false,
      description:
        "For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.",
      inputType: "number",
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
  },
};

export default method;
