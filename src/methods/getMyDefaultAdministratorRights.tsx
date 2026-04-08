import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getMyDefaultAdministratorRights",
  href: "https://core.telegram.org/bots/api#getmydefaultadministratorrights",
  category: "Bot settings",
  description:
    "Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.",
  returns: ["ChatAdministratorRights"],
  parameters: [
    {
      name: "for_channels",
      type: "Boolean",
      required: false,
      description:
        "Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.",
      inputType: "boolean",
    },
  ],
  examplePayload: {},
};

export default method;
