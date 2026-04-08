import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setMessageReaction",
  href: "https://core.telegram.org/bots/api#setmessagereaction",
  category: "Messages",
  description:
    "Use this method to change the chosen reactions on a message. Service messages of some types can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success.",
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
      description:
        "Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.",
      inputType: "number",
    },
    {
      name: "reaction",
      type: "Array of ReactionType",
      required: false,
      description:
        "A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots.",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "is_big",
      type: "Boolean",
      required: false,
      description: "Pass True to set the reaction with a big animation",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    message_id: 1,
  },
};

export default method;
