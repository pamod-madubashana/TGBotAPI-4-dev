import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "editForumTopic",
  href: "https://core.telegram.org/bots/api#editforumtopic",
  category: "Chats",
  description:
    "Use this method to edit name and icon of a topic in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.",
  returns: ["Boolean"],
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
      name: "message_thread_id",
      type: "Integer",
      required: true,
      description:
        "Unique identifier for the target message thread of the forum topic",
      inputType: "number",
    },
    {
      name: "name",
      type: "String",
      required: false,
      description:
        "New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept",
      inputType: "text",
    },
    {
      name: "icon_custom_emoji_id",
      type: "String",
      required: false,
      description:
        "New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept",
      inputType: "text",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    message_thread_id: 1,
  },
};

export default method;
