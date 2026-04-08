import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "verifyUser",
  href: "https://core.telegram.org/bots/api#verifyuser",
  category: "Stars and gifts",
  description:
    "Verifies a user on behalf of the organization which is represented by the bot. Returns True on success.",
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
      name: "custom_description",
      type: "String",
      required: false,
      description:
        "Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.",
      inputType: "text",
    },
  ],
  examplePayload: {
    user_id: 1,
  },
};

export default method;
