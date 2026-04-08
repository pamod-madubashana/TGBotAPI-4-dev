import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "close",
  href: "https://core.telegram.org/bots/api#close",
  category: "Getting updates",
  description:
    "Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.",
  returns: ["Boolean"],
  parameters: [],
  examplePayload: {},
};

export default method;
