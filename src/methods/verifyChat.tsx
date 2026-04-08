import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "verifyChat",
  href: "https://core.telegram.org/bots/api#verifychat",
  category: "Stars and gifts",
  description:
    "Verifies a chat on behalf of the organization which is represented by the bot. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target channel (in the format @channelusername). Channel direct messages chats can't be verified.",
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
      name: "custom_description",
      type: "String",
      required: false,
      description:
        "Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.",
      inputType: "text",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
  },
};

export default method;
