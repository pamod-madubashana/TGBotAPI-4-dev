import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "replaceManagedBotToken",
  href: "https://core.telegram.org/bots/api#replacemanagedbottoken",
  category: "Chats",
  description:
    "Use this method to revoke the current token of a managed bot and generate a new one. Returns the new token as String on success.",
  returns: ["String"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description:
        "User identifier of the managed bot whose token will be replaced",
      inputType: "number",
    },
  ],
  examplePayload: {
    user_id: 1,
  },
};

export default method;
