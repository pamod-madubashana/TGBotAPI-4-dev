import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getMyDescription",
  href: "https://core.telegram.org/bots/api#getmydescription",
  category: "Bot settings",
  description:
    "Use this method to get the current bot description for the given user language. Returns BotDescription on success.",
  returns: ["BotDescription"],
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
