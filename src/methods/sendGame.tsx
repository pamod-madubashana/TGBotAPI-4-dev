import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "sendGame",
  href: "https://core.telegram.org/bots/api#sendgame",
  category: "Passport and games",
  description:
    "Use this method to send a game. On success, the sent Message is returned.",
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
      type: "Integer",
      required: true,
      description:
        "Unique identifier for the target chat. Games can't be sent to channel direct messages chats and channel chats.",
      inputType: "number",
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
      name: "game_short_name",
      type: "String",
      required: true,
      description:
        "Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather.",
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
        "A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    chat_id: 1,
    game_short_name: "example",
  },
};

export default method;
