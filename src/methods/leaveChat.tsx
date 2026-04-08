import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "leaveChat",
  href: "https://core.telegram.org/bots/api#leavechat",
  category: "Chats",
  description:
    "Use this method for your bot to leave a group, supergroup or channel. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername). Channel direct messages chats aren't supported; leave the corresponding channel instead.",
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
