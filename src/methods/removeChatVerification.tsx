import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "removeChatVerification",
  href: "https://core.telegram.org/bots/api#removechatverification",
  category: "Stars and gifts",
  description:
    "Removes verification from a chat that is currently verified on behalf of the organization represented by the bot. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
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
  ],
  examplePayload: {
    chat_id: "@your_channel",
  },
};

export default method;
