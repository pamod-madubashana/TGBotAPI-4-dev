import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getStarTransactions",
  href: "https://core.telegram.org/bots/api#getstartransactions",
  category: "Stars and gifts",
  description:
    "Returns the bot's Telegram Star transactions in chronological order. On success, returns a StarTransactions object.",
  returns: ["StarTransactions"],
  parameters: [
    {
      name: "offset",
      type: "Integer",
      required: false,
      description: "Number of transactions to skip in the response",
      inputType: "number",
    },
    {
      name: "limit",
      type: "Integer",
      required: false,
      description:
        "The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.",
      inputType: "number",
    },
  ],
  examplePayload: {},
};

export default method;
