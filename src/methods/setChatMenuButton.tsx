import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setChatMenuButton",
  href: "https://core.telegram.org/bots/api#setchatmenubutton",
  category: "Bot settings",
  description:
    "Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer",
      required: false,
      description:
        "Unique identifier for the target private chat. If not specified, default bot's menu button will be changed",
      inputType: "number",
    },
    {
      name: "menu_button",
      type: "MenuButton",
      required: false,
      description:
        "A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {},
};

export default method;
