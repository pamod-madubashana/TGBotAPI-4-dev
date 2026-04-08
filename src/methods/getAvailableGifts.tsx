import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getAvailableGifts",
  href: "https://core.telegram.org/bots/api#getavailablegifts",
  category: "Stars and gifts",
  description:
    "Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.",
  returns: ["Gifts"],
  parameters: [],
  examplePayload: {},
};

export default method;
