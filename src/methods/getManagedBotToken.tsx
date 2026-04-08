import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getManagedBotToken",
  href: "https://core.telegram.org/bots/api#getmanagedbottoken",
  category: "Chats",
  description:
    "Use this method to get the token of a managed bot. Returns the token as String on success.",
  returns: ["String"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description:
        "User identifier of the managed bot whose token will be returned",
      inputType: "number",
    },
  ],
  examplePayload: {
    user_id: 1,
  },
};

export default method;
