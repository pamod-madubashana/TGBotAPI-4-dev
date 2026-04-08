import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "unpinAllForumTopicMessages",
  href: "https://core.telegram.org/bots/api#unpinallforumtopicmessages",
  category: "Chats",
  description:
    "Use this method to clear the list of pinned messages in a forum topic in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.",
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
  ],
  examplePayload: {
    chat_id: "@your_channel",
    message_thread_id: 1,
  },
};

export default method;
