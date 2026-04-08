import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setBusinessAccountGiftSettings",
  href: "https://core.telegram.org/bots/api#setbusinessaccountgiftsettings",
  category: "Business",
  description:
    "Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the can_change_gift_settings business bot right. Returns True on success.",
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
      name: "show_gift_button",
      type: "Boolean",
      required: true,
      description:
        "Pass True, if a button for sending a gift to the user or by the business account must always be shown in the input field",
      inputType: "boolean",
    },
    {
      name: "accepted_gift_types",
      type: "AcceptedGiftTypes",
      required: true,
      description: "Types of gifts accepted by the business account",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    show_gift_button: true,
    accepted_gift_types: {},
  },
};

export default method;
