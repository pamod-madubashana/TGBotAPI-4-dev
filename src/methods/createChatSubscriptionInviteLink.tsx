import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "createChatSubscriptionInviteLink",
  href: "https://core.telegram.org/bots/api#createchatsubscriptioninvitelink",
  category: "Chats",
  description:
    "Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.",
  returns: ["ChatInviteLink"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target channel chat or username of the target channel (in the format @channelusername)",
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
      name: "name",
      type: "String",
      required: false,
      description: "Invite link name; 0-32 characters",
      inputType: "text",
    },
    {
      name: "subscription_period",
      type: "Integer",
      required: true,
      description:
        "The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days).",
      inputType: "number",
    },
    {
      name: "subscription_price",
      type: "Integer",
      required: true,
      description:
        "The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000",
      inputType: "number",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    subscription_period: 1,
    subscription_price: 1,
  },
};

export default method;
