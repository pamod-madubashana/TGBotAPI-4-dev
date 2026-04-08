import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setMyDescription",
  href: "https://core.telegram.org/bots/api#setmydescription",
  category: "Bot settings",
  description:
    "Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "description",
      type: "String",
      required: false,
      description:
        "New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "language_code",
      type: "String",
      required: false,
      description:
        "A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.",
      inputType: "text",
    },
  ],
  examplePayload: {},
};

export default method;
