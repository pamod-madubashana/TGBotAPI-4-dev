import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setGameScore",
  href: "https://core.telegram.org/bots/api#setgamescore",
  category: "Passport and games",
  description:
    "Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.",
  returns: ["Message", "Boolean"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "User identifier",
      inputType: "number",
    },
    {
      name: "score",
      type: "Integer",
      required: true,
      description: "New score, must be non-negative",
      inputType: "number",
    },
    {
      name: "force",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters",
      inputType: "boolean",
    },
    {
      name: "disable_edit_message",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the game message should not be automatically edited to include the current scoreboard",
      inputType: "boolean",
    },
    {
      name: "chat_id",
      type: "Integer",
      required: false,
      description:
        "Required if inline_message_id is not specified. Unique identifier for the target chat",
      inputType: "number",
    },
    {
      name: "message_id",
      type: "Integer",
      required: false,
      description:
        "Required if inline_message_id is not specified. Identifier of the sent message",
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
  ],
  examplePayload: {
    user_id: 1,
    score: 1,
  },
};

export default method;
