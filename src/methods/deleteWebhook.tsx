import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "deleteWebhook",
  href: "https://core.telegram.org/bots/api#deletewebhook",
  category: "Getting updates",
  description:
    "Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "drop_pending_updates",
      type: "Boolean",
      required: false,
      description: "Pass True to drop all pending updates",
      inputType: "boolean",
    },
  ],
  examplePayload: {},
};

export default method;
