import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setBusinessAccountProfilePhoto",
  href: "https://core.telegram.org/bots/api#setbusinessaccountprofilephoto",
  category: "Business",
  description:
    "Changes the profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success.",
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
      name: "photo",
      type: "InputProfilePhoto",
      required: true,
      description: "The new profile photo to set",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "is_public",
      type: "Boolean",
      required: false,
      description:
        "Pass True to set the public photo, which will be visible even if the main photo is hidden by the business account's privacy settings. An account can have only one public photo.",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    photo: {},
  },
};

export default method;
