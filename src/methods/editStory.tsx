import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "editStory",
  href: "https://core.telegram.org/bots/api#editstory",
  category: "Stories and inline",
  description:
    "Edits a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success.",
  returns: ["Story"],
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
      description: "Unique identifier of the story to edit",
      inputType: "number",
    },
    {
      name: "content",
      type: "InputStoryContent",
      required: true,
      description: "Content of the story",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "caption",
      type: "String",
      required: false,
      description:
        "Caption of the story, 0-2048 characters after entities parsing",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "parse_mode",
      type: "String",
      required: false,
      description:
        "Mode for parsing entities in the story caption. See formatting options for more details.",
      inputType: "text",
    },
    {
      name: "caption_entities",
      type: "Array of MessageEntity",
      required: false,
      description:
        "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "areas",
      type: "Array of StoryArea",
      required: false,
      description:
        "A JSON-serialized list of clickable areas to be shown on the story",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    story_id: 1,
    content: {},
  },
};

export default method;
