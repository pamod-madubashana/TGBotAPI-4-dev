import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "upgradeGift",
  href: "https://core.telegram.org/bots/api#upgradegift",
  category: "Stars and gifts",
  description:
    "Upgrades a given regular gift to a unique gift. Requires the can_transfer_and_upgrade_gifts business bot right. Additionally requires the can_transfer_stars business bot right if the upgrade is paid. Returns True on success.",
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
        "Unique identifier of the regular gift that should be upgraded to a unique one",
      inputType: "text",
    },
    {
      name: "keep_original_details",
      type: "Boolean",
      required: false,
      description:
        "Pass True to keep the original gift text, sender and receiver in the upgraded gift",
      inputType: "boolean",
    },
    {
      name: "star_count",
      type: "Integer",
      required: false,
      description:
        "The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If gift.prepaid_upgrade_star_count > 0, then pass 0, otherwise, the can_transfer_stars business bot right is required and gift.upgrade_star_count must be passed.",
      inputType: "number",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    owned_gift_id: "example",
  },
};

export default method;
