import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setBusinessAccountUsername",
  href: "https://core.telegram.org/bots/api#setbusinessaccountusername",
  category: "Business",
  description:
    "Changes the username of a managed business account. Requires the can_change_username business bot right. Returns True on success.",
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
      name: "username",
      type: "String",
      required: false,
      description:
        "The new value of the username for the business account; 0-32 characters",
      inputType: "text",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
  },
};

export default method;
