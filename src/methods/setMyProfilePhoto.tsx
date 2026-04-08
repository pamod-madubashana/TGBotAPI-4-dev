import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setMyProfilePhoto",
  href: "https://core.telegram.org/bots/api#setmyprofilephoto",
  category: "Bot settings",
  description: "Changes the profile photo of the bot. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "photo",
      type: "InputProfilePhoto",
      required: true,
      description: "The new profile photo to set",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    photo: {},
  },
};

export default method;
