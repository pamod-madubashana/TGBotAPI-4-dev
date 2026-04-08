import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getMe",
  href: "https://core.telegram.org/bots/api#getme",
  category: "Getting updates",
  description:
    "A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.",
  returns: ["User"],
  parameters: [],
  examplePayload: {},
};

export default method;
