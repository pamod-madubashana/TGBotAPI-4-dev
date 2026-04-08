import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setChatPermissions",
  href: "https://core.telegram.org/bots/api#setchatpermissions",
  category: "Chats",
  description:
    "Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.",
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
      name: "permissions",
      type: "ChatPermissions",
      required: true,
      description: "A JSON-serialized object for new default chat permissions",
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
  ],
  examplePayload: {
    chat_id: "@your_channel",
    permissions: {},
  },
};

export default method;
