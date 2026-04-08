import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "forwardMessages",
  href: "https://core.telegram.org/bots/api#forwardmessages",
  category: "Messages",
  description:
    "Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.",
  returns: ["Array of MessageId"],
  parameters: [
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
      name: "message_thread_id",
      type: "Integer",
      required: false,
      description:
        "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only",
      inputType: "number",
    },
    {
      name: "direct_messages_topic_id",
      type: "Integer",
      required: false,
      description:
        "Identifier of the direct messages topic to which the messages will be forwarded; required if the messages are forwarded to a direct messages chat",
      inputType: "number",
    },
    {
      name: "from_chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)",
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
      name: "message_ids",
      type: "Array of Integer",
      required: true,
      description:
        "A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order.",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "disable_notification",
      type: "Boolean",
      required: false,
      description:
        "Sends the messages silently. Users will receive a notification with no sound.",
      inputType: "boolean",
    },
    {
      name: "protect_content",
      type: "Boolean",
      required: false,
      description:
        "Protects the contents of the forwarded messages from forwarding and saving",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    from_chat_id: 1,
    message_ids: [],
  },
};

export default method;
