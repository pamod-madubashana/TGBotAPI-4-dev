import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "editMessageLiveLocation",
  href: "https://core.telegram.org/bots/api#editmessagelivelocation",
  category: "Message updates",
  description:
    "Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.",
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
        "Required if inline_message_id is not specified. Identifier of the message to edit",
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
      name: "latitude",
      type: "Float",
      required: true,
      description: "Latitude of new location",
      inputType: "number",
    },
    {
      name: "longitude",
      type: "Float",
      required: true,
      description: "Longitude of new location",
      inputType: "number",
    },
    {
      name: "live_period",
      type: "Integer",
      required: false,
      description:
        "New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged",
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
      name: "heading",
      type: "Integer",
      required: false,
      description:
        "Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.",
      inputType: "number",
    },
    {
      name: "proximity_alert_radius",
      type: "Integer",
      required: false,
      description:
        "The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.",
      inputType: "number",
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
  examplePayload: {
    latitude: 37.7749,
    longitude: -122.4194,
  },
};

export default method;
