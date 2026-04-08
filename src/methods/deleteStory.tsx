import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "deleteStory",
  href: "https://core.telegram.org/bots/api#deletestory",
  category: "Stories and inline",
  description:
    "Deletes a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns True on success.",
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
      name: "story_id",
      type: "Integer",
      required: true,
      description: "Unique identifier of the story to delete",
      inputType: "number",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    story_id: 1,
  },
};

export default method;
