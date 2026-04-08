import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "removeUserVerification",
  href: "https://core.telegram.org/bots/api#removeuserverification",
  category: "Stars and gifts",
  description:
    "Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "Unique identifier of the target user",
      inputType: "number",
    },
  ],
  examplePayload: {
    user_id: 1,
  },
};

export default method;
