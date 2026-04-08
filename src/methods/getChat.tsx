import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getChat",
  href: "https://core.telegram.org/bots/api#getchat",
  category: "Chats",
  description:
    "Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.",
  returns: ["ChatFullInfo"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)",
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
