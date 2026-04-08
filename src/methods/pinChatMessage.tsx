import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "pinChatMessage",
  href: "https://core.telegram.org/bots/api#pinchatmessage",
  category: "Chats",
  description:
    "Use this method to add a message to the list of pinned messages in a chat. In private chats and channel direct messages chats, all non-service messages can be pinned. Conversely, the bot must be an administrator with the 'can_pin_messages' right or the 'can_edit_messages' right to pin messages in groups and channels respectively. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the business connection on behalf of which the message will be pinned",
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
      required: true,
      description: "Identifier of a message to pin",
      inputType: "number",
    },
    {
      name: "disable_notification",
      type: "Boolean",
      required: false,
      description:
        "Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    message_id: 1,
  },
};

export default method;
