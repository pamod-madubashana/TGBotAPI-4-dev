import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "removeBusinessAccountProfilePhoto",
  href: "https://core.telegram.org/bots/api#removebusinessaccountprofilephoto",
  category: "Business",
  description:
    "Removes the current profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success.",
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
      name: "is_public",
      type: "Boolean",
      required: false,
      description:
        "Pass True to remove the public photo, which is visible even if the main photo is hidden by the business account's privacy settings. After the main photo is removed, the previous profile photo (if present) becomes the main photo.",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
  },
};

export default method;
