import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "removeMyProfilePhoto",
  href: "https://core.telegram.org/bots/api#removemyprofilephoto",
  category: "Bot settings",
  description:
    "Removes the profile photo of the bot. Requires no parameters. Returns True on success.",
  returns: ["Boolean"],
  parameters: [],
  examplePayload: {},
};

export default method;
