import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getBusinessAccountStarBalance",
  href: "https://core.telegram.org/bots/api#getbusinessaccountstarbalance",
  category: "Stars and gifts",
  description:
    "Returns the amount of Telegram Stars owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns StarAmount on success.",
  returns: ["StarAmount"],
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
