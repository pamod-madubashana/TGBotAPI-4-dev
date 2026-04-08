import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "convertGiftToStars",
  href: "https://core.telegram.org/bots/api#convertgifttostars",
  category: "Stars and gifts",
  description:
    "Converts a given regular gift to Telegram Stars. Requires the can_convert_gifts_to_stars business bot right. Returns True on success.",
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
      name: "owned_gift_id",
      type: "String",
      required: true,
      description:
        "Unique identifier of the regular gift that should be converted to Telegram Stars",
      inputType: "text",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    owned_gift_id: "example",
  },
};

export default method;
