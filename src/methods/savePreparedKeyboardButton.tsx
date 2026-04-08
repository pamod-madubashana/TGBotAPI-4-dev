import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "savePreparedKeyboardButton",
  href: "https://core.telegram.org/bots/api#savepreparedkeyboardbutton",
  category: "Stories and inline",
  description:
    "Stores a keyboard button that can be used by a user within a Mini App. Returns a PreparedKeyboardButton object.",
  returns: ["PreparedKeyboardButton"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description:
        "Unique identifier of the target user that can use the button",
      inputType: "number",
    },
    {
      name: "button",
      type: "KeyboardButton",
      required: true,
      description:
        "A JSON-serialized object describing the button to be saved. The button must be of the type request_users, request_chat, or request_managed_bot",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    user_id: 1,
    button: {},
  },
};

export default method;
