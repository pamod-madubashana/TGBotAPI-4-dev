import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setMyName",
  href: "https://core.telegram.org/bots/api#setmyname",
  category: "Bot settings",
  description:
    "Use this method to change the bot's name. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "name",
      type: "String",
      required: false,
      description:
        "New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.",
      inputType: "text",
    },
    {
      name: "language_code",
      type: "String",
      required: false,
      description:
        "A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.",
      inputType: "text",
    },
  ],
  examplePayload: {},
};

export default method;
