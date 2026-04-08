import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "refundStarPayment",
  href: "https://core.telegram.org/bots/api#refundstarpayment",
  category: "Stars and gifts",
  description:
    "Refunds a successful payment in Telegram Stars. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "Identifier of the user whose payment will be refunded",
      inputType: "number",
    },
    {
      name: "telegram_payment_charge_id",
      type: "String",
      required: true,
      description: "Telegram payment identifier",
      inputType: "text",
    },
  ],
  examplePayload: {
    user_id: 1,
    telegram_payment_charge_id: "example",
  },
};

export default method;
