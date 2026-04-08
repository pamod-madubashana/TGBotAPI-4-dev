import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getBusinessConnection",
  href: "https://core.telegram.org/bots/api#getbusinessconnection",
  category: "Chats",
  description:
    "Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.",
  returns: ["BusinessConnection"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: true,
      description: "Unique identifier of the business connection",
      inputType: "text",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
  },
};

export default method;
