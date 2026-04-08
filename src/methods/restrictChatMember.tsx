import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "restrictChatMember",
  href: "https://core.telegram.org/bots/api#restrictchatmember",
  category: "Chats",
  description:
    "Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)",
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
      name: "user_id",
      type: "Integer",
      required: true,
      description: "Unique identifier of the target user",
      inputType: "number",
    },
    {
      name: "permissions",
      type: "ChatPermissions",
      required: true,
      description: "A JSON-serialized object for new user permissions",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "use_independent_chat_permissions",
      type: "Boolean",
      required: false,
      description:
        "Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.",
      inputType: "boolean",
    },
    {
      name: "until_date",
      type: "Integer",
      required: false,
      description:
        "Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever",
      inputType: "number",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    user_id: 1,
    permissions: {},
  },
};

export default method;
