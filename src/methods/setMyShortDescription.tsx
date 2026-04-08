import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setMyShortDescription",
  href: "https://core.telegram.org/bots/api#setmyshortdescription",
  category: "Bot settings",
  description:
    "Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "short_description",
      type: "String",
      required: false,
      description:
        "New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.",
      inputType: "text",
    },
    {
      name: "language_code",
      type: "String",
      required: false,
      description:
        "A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.",
      inputType: "text",
    },
  ],
  examplePayload: {},
};

export default method;
