import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "editChatSubscriptionInviteLink",
  href: "https://core.telegram.org/bots/api#editchatsubscriptioninvitelink",
  category: "Chats",
  description:
    "Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object.",
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
  ],
  examplePayload: {
    chat_id: "@your_channel",
    invite_link: "example",
  },
};

export default method;
