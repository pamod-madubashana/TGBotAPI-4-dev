import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getMyShortDescription",
  href: "https://core.telegram.org/bots/api#getmyshortdescription",
  category: "Bot settings",
  description:
    "Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.",
  returns: ["BotShortDescription"],
  parameters: [
    {
      name: "language_code",
      type: "String",
      required: false,
      description: "A two-letter ISO 639-1 language code or an empty string",
      inputType: "text",
    },
  ],
  examplePayload: {},
};

export default method;
