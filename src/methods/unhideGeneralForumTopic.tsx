import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "unhideGeneralForumTopic",
  href: "https://core.telegram.org/bots/api#unhidegeneralforumtopic",
  category: "Chats",
  description:
    "Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.",
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
  ],
  examplePayload: {
    chat_id: "@your_channel",
  },
};

export default method;
