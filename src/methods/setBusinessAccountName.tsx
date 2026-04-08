import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setBusinessAccountName",
  href: "https://core.telegram.org/bots/api#setbusinessaccountname",
  category: "Business",
  description:
    "Changes the first and last name of a managed business account. Requires the can_change_name business bot right. Returns True on success.",
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
      name: "first_name",
      type: "String",
      required: true,
      description:
        "The new value of the first name for the business account; 1-64 characters",
      inputType: "text",
    },
    {
      name: "last_name",
      type: "String",
      required: false,
      description:
        "The new value of the last name for the business account; 0-64 characters",
      inputType: "text",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    first_name: "example",
  },
};

export default method;
