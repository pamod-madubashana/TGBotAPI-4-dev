import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "setMyDefaultAdministratorRights",
  href: "https://core.telegram.org/bots/api#setmydefaultadministratorrights",
  category: "Bot settings",
  description:
    "Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.",
  returns: ["Boolean"],
  parameters: [
    {
      name: "rights",
      type: "ChatAdministratorRights",
      required: false,
      description:
        "A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "for_channels",
      type: "Boolean",
      required: false,
      description:
        "Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.",
      inputType: "boolean",
    },
  ],
  examplePayload: {},
};

export default method;
