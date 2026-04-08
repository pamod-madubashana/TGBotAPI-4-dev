import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "deleteMyCommands",
  href: "https://core.telegram.org/bots/api#deletemycommands",
  category: "Bot settings",
  description:
    "Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
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
  examplePayload: {},
};

export default method;
