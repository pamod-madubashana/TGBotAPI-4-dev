import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "unpinChatMessage",
  href: "https://core.telegram.org/bots/api#unpinchatmessage",
  category: "Chats",
  description:
    "Use this method to remove a message from the list of pinned messages in a chat. In private chats and channel direct messages chats, all messages can be unpinned. Conversely, the bot must be an administrator with the 'can_pin_messages' right or the 'can_edit_messages' right to unpin messages in groups and channels respectively. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the business connection on behalf of which the message will be unpinned",
      inputType: "text",
    },
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
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
      name: "message_id",
      type: "Integer",
      required: false,
      description:
        "Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned.",
      inputType: "number",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
  },
};

export default method;
