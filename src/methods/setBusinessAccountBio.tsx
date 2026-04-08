import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setBusinessAccountBio",
  href: "https://core.telegram.org/bots/api#setbusinessaccountbio",
  category: "Business",
  description:
    "Changes the bio of a managed business account. Requires the can_change_bio business bot right. Returns True on success.",
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
      name: "bio",
      type: "String",
      required: false,
      description:
        "The new value of the bio for the business account; 0-140 characters",
      inputType: "textarea",
      valueMode: "text",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
  },
};

export default method;
