import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setChatAdministratorCustomTitle",
  href: "https://core.telegram.org/bots/api#setchatadministratorcustomtitle",
  category: "Chats",
  description:
    "Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)",
      inputType: "union",
      unionTypes: [
        {
          label: "Integer",
          inputType: "number",
        },
        {
          label: "String",
          inputType: "text",
        },
      ],
    },
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "Unique identifier of the target user",
      inputType: "number",
    },
    {
      name: "custom_title",
      type: "String",
      required: true,
      description:
        "New custom title for the administrator; 0-16 characters, emoji are not allowed",
      inputType: "text",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    user_id: 1,
    custom_title: "Example title",
  },
};

export default method;
