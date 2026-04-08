import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "savePreparedInlineMessage",
  href: "https://core.telegram.org/bots/api#savepreparedinlinemessage",
  category: "Stories and inline",
  description:
    "Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object.",
  returns: ["PreparedInlineMessage"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description:
        "Unique identifier of the target user that can use the prepared message",
      inputType: "number",
    },
    {
      name: "result",
      type: "InlineQueryResult",
      required: true,
      description: "A JSON-serialized object describing the message to be sent",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "allow_user_chats",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the message can be sent to private chats with users",
      inputType: "boolean",
    },
    {
      name: "allow_bot_chats",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the message can be sent to private chats with bots",
      inputType: "boolean",
    },
    {
      name: "allow_group_chats",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the message can be sent to group and supergroup chats",
      inputType: "boolean",
    },
    {
      name: "allow_channel_chats",
      type: "Boolean",
      required: false,
      description: "Pass True if the message can be sent to channel chats",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    user_id: 1,
    result: {},
  },
};

export default method;
