import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "sendChatAction",
  href: "https://core.telegram.org/bots/api#sendchataction",
  category: "Messages",
  description:
    "Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.\n\nWe only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the business connection on behalf of which the action will be sent",
      inputType: "text",
    },
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel chats and channel direct messages chats aren't supported.",
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
        "Unique identifier for the target message thread or topic of a forum; for supergroups and private chats of bots with forum topic mode enabled only",
      inputType: "number",
    },
    {
      name: "action",
      type: "String",
      required: true,
      description:
        "Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.",
      inputType: "text",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    action: "example",
  },
};

export default method;
