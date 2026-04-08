import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getMyName",
  href: "https://core.telegram.org/bots/api#getmyname",
  category: "Bot settings",
  description:
    "Use this method to get the current bot name for the given user language. Returns BotName on success.",
  returns: ["BotName"],
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
