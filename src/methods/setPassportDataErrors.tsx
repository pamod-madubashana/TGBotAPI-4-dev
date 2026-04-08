import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setPassportDataErrors",
  href: "https://core.telegram.org/bots/api#setpassportdataerrors",
  category: "Passport and games",
  description:
    "Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.\n\nUse this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "User identifier",
      inputType: "number",
    },
    {
      name: "errors",
      type: "Array of PassportElementError",
      required: true,
      description: "A JSON-serialized array describing the errors",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    user_id: 1,
    errors: [],
  },
};

export default method;
