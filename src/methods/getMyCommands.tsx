import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getMyCommands",
  href: "https://core.telegram.org/bots/api#getmycommands",
  category: "Bot settings",
  description:
    "Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.",
  returns: ["Array of BotCommand"],
  parameters: [
    {
      name: "scope",
      type: "BotCommandScope",
      required: false,
      description:
        "A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault.",
      inputType: "textarea",
      valueMode: "json",
    },
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
