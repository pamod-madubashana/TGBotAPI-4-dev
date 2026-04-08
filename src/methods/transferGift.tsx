import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "transferGift",
  href: "https://core.telegram.org/bots/api#transfergift",
  category: "Stars and gifts",
  description:
    "Transfers an owned unique gift to another user. Requires the can_transfer_and_upgrade_gifts business bot right. Requires can_transfer_stars business bot right if the transfer is paid. Returns True on success.",
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
        "Unique identifier of the regular gift that should be transferred",
      inputType: "text",
    },
    {
      name: "new_owner_chat_id",
      type: "Integer",
      required: true,
      description:
        "Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours.",
      inputType: "number",
    },
    {
      name: "star_count",
      type: "Integer",
      required: false,
      description:
        "The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the can_transfer_stars business bot right is required.",
      inputType: "number",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    owned_gift_id: "example",
    new_owner_chat_id: 1,
  },
};

export default method;
