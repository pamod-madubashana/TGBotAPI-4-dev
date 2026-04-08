import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getForumTopicIconStickers",
  href: "https://core.telegram.org/bots/api#getforumtopiciconstickers",
  category: "Chats",
  description:
    "Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.",
  returns: ["Array of Sticker"],
  parameters: [],
  examplePayload: {},
};

export default method;
