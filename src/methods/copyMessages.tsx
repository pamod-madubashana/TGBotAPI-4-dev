import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "copyMessages",
  href: "https://core.telegram.org/bots/api#copymessages",
  category: "Messages",
  description:
    "Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.",
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
        "Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat",
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
        "A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.",
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
        "Protects the contents of the sent messages from forwarding and saving",
      inputType: "boolean",
    },
    {
      name: "remove_caption",
      type: "Boolean",
      required: false,
      description: "Pass True to copy the messages without their captions",
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
