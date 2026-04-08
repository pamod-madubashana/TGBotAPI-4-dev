import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "editChatInviteLink",
  href: "https://core.telegram.org/bots/api#editchatinvitelink",
  category: "Chats",
  description:
    "Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.",
  returns: ["ChatInviteLink"],
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
      name: "invite_link",
      type: "String",
      required: true,
      description: "The invite link to edit",
      inputType: "text",
    },
    {
      name: "name",
      type: "String",
      required: false,
      description: "Invite link name; 0-32 characters",
      inputType: "text",
    },
    {
      name: "expire_date",
      type: "Integer",
      required: false,
      description: "Point in time (Unix timestamp) when the link will expire",
      inputType: "number",
    },
    {
      name: "member_limit",
      type: "Integer",
      required: false,
      description:
        "The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999",
      inputType: "number",
    },
    {
      name: "creates_join_request",
      type: "Boolean",
      required: false,
      description:
        "True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    invite_link: "example",
  },
};

export default method;
