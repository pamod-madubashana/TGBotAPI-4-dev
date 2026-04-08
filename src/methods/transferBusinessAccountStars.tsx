import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "transferBusinessAccountStars",
  href: "https://core.telegram.org/bots/api#transferbusinessaccountstars",
  category: "Stars and gifts",
  description:
    "Transfers Telegram Stars from the business account balance to the bot's balance. Requires the can_transfer_stars business bot right. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: true,
      description: "Unique identifier of the business connection",
      inputType: "text",
    },
    {
      name: "star_count",
      type: "Integer",
      required: true,
      description: "Number of Telegram Stars to transfer; 1-10000",
      inputType: "number",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    star_count: 1,
  },
};

export default method;
