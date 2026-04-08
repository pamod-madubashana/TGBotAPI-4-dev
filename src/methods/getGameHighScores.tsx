import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getGameHighScores",
  href: "https://core.telegram.org/bots/api#getgamehighscores",
  category: "Passport and games",
  description:
    "Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.",
  returns: ["Array of GameHighScore"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "Target user id",
      inputType: "number",
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
  },
};

export default method;
