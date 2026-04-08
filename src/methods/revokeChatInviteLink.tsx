import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "revokeChatInviteLink",
  href: "https://core.telegram.org/bots/api#revokechatinvitelink",
  category: "Chats",
  description:
    "Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.",
  returns: ["ChatInviteLink"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier of the target chat or username of the target channel (in the format @channelusername)",
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
      description: "The invite link to revoke",
      inputType: "text",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    invite_link: "example",
  },
};

export default method;
