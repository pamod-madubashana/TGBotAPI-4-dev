import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "deleteMessage",
  href: "https://core.telegram.org/bots/api#deletemessage",
  category: "Message updates",
  description:
    "Use this method to delete a message, including service messages, with the following limitations:\n\n- A message can only be deleted if it was sent less than 48 hours ago.\n\n- Service messages about a supergroup, channel, or forum topic creation can't be deleted.\n\n- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.\n\n- Bots can delete outgoing messages in private chats, groups, and supergroups.\n\n- Bots can delete incoming messages in private chats.\n\n- Bots granted can_post_messages permissions can delete outgoing messages in channels.\n\n- If the bot is an administrator of a group, it can delete any message there.\n\n- If the bot has can_delete_messages administrator right in a supergroup or a channel, it can delete any message there.\n\n- If the bot has can_manage_direct_messages administrator right in a channel, it can delete any message in the corresponding direct messages chat.\n\nReturns True on success.",
  returns: ["Boolean"],
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
      name: "message_id",
      type: "Integer",
      required: true,
      description: "Identifier of the message to delete",
      inputType: "number",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    message_id: 1,
  },
};

export default method;
