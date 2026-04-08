import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "editUserStarSubscription",
  href: "https://core.telegram.org/bots/api#edituserstarsubscription",
  category: "Stars and gifts",
  description:
    "Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "Identifier of the user whose subscription will be edited",
      inputType: "number",
    },
    {
      name: "telegram_payment_charge_id",
      type: "String",
      required: true,
      description: "Telegram payment identifier for the subscription",
      inputType: "text",
    },
    {
      name: "is_canceled",
      type: "Boolean",
      required: true,
      description:
        "Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot.",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    user_id: 1,
    telegram_payment_charge_id: "example",
    is_canceled: true,
  },
};

export default method;
