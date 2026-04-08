import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getChatMenuButton",
  href: "https://core.telegram.org/bots/api#getchatmenubutton",
  category: "Bot settings",
  description:
    "Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.",
  returns: ["MenuButton"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer",
      required: false,
      description:
        "Unique identifier for the target private chat. If not specified, default bot's menu button will be returned",
      inputType: "number",
    },
  ],
  examplePayload: {},
};

export default method;
