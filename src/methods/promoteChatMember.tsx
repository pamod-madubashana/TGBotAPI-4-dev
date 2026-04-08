import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "promoteChatMember",
  href: "https://core.telegram.org/bots/api#promotechatmember",
  category: "Chats",
  description:
    "Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.",
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
      name: "user_id",
      type: "Integer",
      required: true,
      description: "Unique identifier of the target user",
      inputType: "number",
    },
    {
      name: "is_anonymous",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator's presence in the chat is hidden",
      inputType: "boolean",
    },
    {
      name: "can_manage_chat",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.",
      inputType: "boolean",
    },
    {
      name: "can_delete_messages",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can delete messages of other users",
      inputType: "boolean",
    },
    {
      name: "can_manage_video_chats",
      type: "Boolean",
      required: false,
      description: "Pass True if the administrator can manage video chats",
      inputType: "boolean",
    },
    {
      name: "can_restrict_members",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics. For backward compatibility, defaults to True for promotions of channel administrators",
      inputType: "boolean",
    },
    {
      name: "can_promote_members",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)",
      inputType: "boolean",
    },
    {
      name: "can_change_info",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can change chat title, photo and other settings",
      inputType: "boolean",
    },
    {
      name: "can_invite_users",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can invite new users to the chat",
      inputType: "boolean",
    },
    {
      name: "can_post_stories",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can post stories to the chat",
      inputType: "boolean",
    },
    {
      name: "can_edit_stories",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive",
      inputType: "boolean",
    },
    {
      name: "can_delete_stories",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can delete stories posted by other users",
      inputType: "boolean",
    },
    {
      name: "can_post_messages",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only",
      inputType: "boolean",
    },
    {
      name: "can_edit_messages",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can edit messages of other users and can pin messages; for channels only",
      inputType: "boolean",
    },
    {
      name: "can_pin_messages",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can pin messages; for supergroups only",
      inputType: "boolean",
    },
    {
      name: "can_manage_topics",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only",
      inputType: "boolean",
    },
    {
      name: "can_manage_direct_messages",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can manage direct messages within the channel and decline suggested posts; for channels only",
      inputType: "boolean",
    },
    {
      name: "can_manage_tags",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the administrator can edit the tags of regular members; for groups and supergroups only",
      inputType: "boolean",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    user_id: 1,
  },
};

export default method;
