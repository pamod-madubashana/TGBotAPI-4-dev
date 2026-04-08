import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getMyStarBalance",
  href: "https://core.telegram.org/bots/api#getmystarbalance",
  category: "Stars and gifts",
  description:
    "A method to get the current Telegram Stars balance of the bot. Requires no parameters. On success, returns a StarAmount object.",
  returns: ["StarAmount"],
  parameters: [],
  examplePayload: {},
};

export default method;
