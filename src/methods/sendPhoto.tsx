import { TelegramMethod } from "@/types/telegram";

export const sendPhotoMethod: TelegramMethod = {
  name: "sendPhoto",
  category: "Available methods",
  description:
    "Use this method to send photos. Returns the sent Message object on success.",
  parameters: [
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description: "Unique identifier for the target chat or @channelusername.",
      inputType: "union",
      unionTypes: [
        { label: "Numeric ID", inputType: "number" },
        { label: "Username", inputType: "text" },
      ],
    },
    {
      name: "photo",
      type: "String",
      required: true,
      description: "File id, HTTP URL, or Telegram file URL for the photo.",
      inputType: "text",
    },
    {
      name: "caption",
      type: "String",
      required: false,
      description: "Photo caption, 0-1024 characters after entities parsing.",
      inputType: "textarea",
    },
    {
      name: "parse_mode",
      type: "String",
      required: false,
      description: "Mode for parsing entities in the caption.",
      inputType: "select",
      options: ["", "MarkdownV2", "HTML"],
    },
  ],
  examplePayload: {
    chat_id: "@my_channel",
    photo: "https://placehold.co/1200x800/png",
    caption: "A test image from the desktop app.",
  },
};
