import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "postStory",
  href: "https://core.telegram.org/bots/api#poststory",
  category: "Stories and inline",
  description:
    "Posts a story on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success.",
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
      name: "content",
      type: "InputStoryContent",
      required: true,
      description: "Content of the story",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "active_period",
      type: "Integer",
      required: true,
      description:
        "Period after which the story is moved to the archive, in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400",
      inputType: "number",
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
    {
      name: "post_to_chat_page",
      type: "Boolean",
      required: false,
      description: "Pass True to keep the story accessible after it expires",
      inputType: "boolean",
    },
    {
      name: "protect_content",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the content of the story must be protected from forwarding and screenshotting",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    business_connection_id: "example",
    content: {},
    active_period: 1,
  },
};

export default method;
