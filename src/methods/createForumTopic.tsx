import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "createForumTopic",
  href: "https://core.telegram.org/bots/api#createforumtopic",
  category: "Chats",
  description:
    "Use this method to create a topic in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator right. Returns information about the created topic as a ForumTopic object.",
  returns: ["ForumTopic"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)",
      inputType: "union",
      unionTypes: [
        {
          label: "Integer",
          inputType: "number",
        },
        {
          label: "String",
          inputType: "text",
        },
      ],
    },
    {
      name: "name",
      type: "String",
      required: true,
      description: "Topic name, 1-128 characters",
      inputType: "text",
    },
    {
      name: "icon_color",
      type: "Integer",
      required: false,
      description:
        "Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)",
      inputType: "number",
    },
    {
      name: "icon_custom_emoji_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.",
      inputType: "text",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    name: "example",
  },
};

export default method;
