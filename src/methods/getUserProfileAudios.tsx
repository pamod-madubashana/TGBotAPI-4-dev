import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getUserProfileAudios",
  href: "https://core.telegram.org/bots/api#getuserprofileaudios",
  category: "Messages",
  description:
    "Use this method to get a list of profile audios for a user. Returns a UserProfileAudios object.",
  returns: ["UserProfileAudios"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "Unique identifier of the target user",
      inputType: "number",
    },
    {
      name: "offset",
      type: "Integer",
      required: false,
      description:
        "Sequential number of the first audio to be returned. By default, all audios are returned.",
      inputType: "number",
    },
    {
      name: "limit",
      type: "Integer",
      required: false,
      description:
        "Limits the number of audios to be retrieved. Values between 1-100 are accepted. Defaults to 100.",
      inputType: "number",
    },
  ],
  examplePayload: {
    user_id: 1,
  },
};

export default method;
