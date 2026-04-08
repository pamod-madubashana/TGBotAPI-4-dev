import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setMyCommands",
  href: "https://core.telegram.org/bots/api#setmycommands",
  category: "Bot settings",
  description:
    "Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "commands",
      type: "Array of BotCommand",
      required: true,
      description:
        "A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "scope",
      type: "BotCommandScope",
      required: false,
      description:
        "A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "language_code",
      type: "String",
      required: false,
      description:
        "A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands",
      inputType: "text",
    },
  ],
  examplePayload: {
    commands: [],
  },
};

export default method;
