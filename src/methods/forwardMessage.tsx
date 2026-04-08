import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "forwardMessage",
  href: "https://core.telegram.org/bots/api#forwardmessage",
  category: "Messages",
  description:
    "Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent Message is returned.",
  returns: ["Message"],
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
        "Identifier of the direct messages topic to which the message will be forwarded; required if the message is forwarded to a direct messages chat",
      inputType: "number",
    },
    {
      name: "from_chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)",
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
      name: "video_start_timestamp",
      type: "Integer",
      required: false,
      description: "New start timestamp for the forwarded video in the message",
      inputType: "number",
    },
    {
      name: "disable_notification",
      type: "Boolean",
      required: false,
      description:
        "Sends the message silently. Users will receive a notification with no sound.",
      inputType: "boolean",
    },
    {
      name: "protect_content",
      type: "Boolean",
      required: false,
      description:
        "Protects the contents of the forwarded message from forwarding and saving",
      inputType: "boolean",
    },
    {
      name: "message_effect_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the message effect to be added to the message; only available when forwarding to private chats",
      inputType: "text",
    },
    {
      name: "suggested_post_parameters",
      type: "SuggestedPostParameters",
      required: false,
      description:
        "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "message_id",
      type: "Integer",
      required: true,
      description: "Message identifier in the chat specified in from_chat_id",
      inputType: "number",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    from_chat_id: 1,
    message_id: 1,
  },
};

export default method;
