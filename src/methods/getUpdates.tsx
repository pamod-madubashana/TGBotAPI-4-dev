import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getUpdates",
  href: "https://core.telegram.org/bots/api#getupdates",
  category: "Getting updates",
  description:
    "Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.",
  returns: ["Array of Update"],
  parameters: [
    {
      name: "offset",
      type: "Integer",
      required: false,
      description:
        "Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten.",
      inputType: "number",
    },
    {
      name: "limit",
      type: "Integer",
      required: false,
      description:
        "Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.",
      inputType: "number",
    },
    {
      name: "timeout",
      type: "Integer",
      required: false,
      description:
        "Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.",
      inputType: "number",
    },
    {
      name: "allowed_updates",
      type: "Array of String",
      required: false,
      description:
        'A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used. Please note that this parameter doesn\'t affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time.',
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {},
};

export default method;
