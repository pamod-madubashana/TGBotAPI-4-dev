import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setUserEmojiStatus",
  href: "https://core.telegram.org/bots/api#setuseremojistatus",
  category: "Messages",
  description:
    "Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method requestEmojiStatusAccess. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "Unique identifier of the target user",
      inputType: "number",
    },
    {
      name: "emoji_status_custom_emoji_id",
      type: "String",
      required: false,
      description:
        "Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.",
      inputType: "text",
    },
    {
      name: "emoji_status_expiration_date",
      type: "Integer",
      required: false,
      description: "Expiration date of the emoji status, if any",
      inputType: "number",
    },
  ],
  examplePayload: {
    user_id: 1,
  },
};

export default method;
