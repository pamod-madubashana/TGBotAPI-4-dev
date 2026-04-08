import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "getUserGifts",
  href: "https://core.telegram.org/bots/api#getusergifts",
  category: "Stars and gifts",
  description:
    "Returns the gifts owned and hosted by a user. Returns OwnedGifts on success.",
  returns: ["OwnedGifts"],
  parameters: [
    {
      name: "user_id",
      type: "Integer",
      required: true,
      description: "Unique identifier of the user",
      inputType: "number",
    },
    {
      name: "exclude_unlimited",
      type: "Boolean",
      required: false,
      description:
        "Pass True to exclude gifts that can be purchased an unlimited number of times",
      inputType: "boolean",
    },
    {
      name: "exclude_limited_upgradable",
      type: "Boolean",
      required: false,
      description:
        "Pass True to exclude gifts that can be purchased a limited number of times and can be upgraded to unique",
      inputType: "boolean",
    },
    {
      name: "exclude_limited_non_upgradable",
      type: "Boolean",
      required: false,
      description:
        "Pass True to exclude gifts that can be purchased a limited number of times and can't be upgraded to unique",
      inputType: "boolean",
    },
    {
      name: "exclude_from_blockchain",
      type: "Boolean",
      required: false,
      description:
        "Pass True to exclude gifts that were assigned from the TON blockchain and can't be resold or transferred in Telegram",
      inputType: "boolean",
    },
    {
      name: "exclude_unique",
      type: "Boolean",
      required: false,
      description: "Pass True to exclude unique gifts",
      inputType: "boolean",
    },
    {
      name: "sort_by_price",
      type: "Boolean",
      required: false,
      description:
        "Pass True to sort results by gift price instead of send date. Sorting is applied before pagination.",
      inputType: "boolean",
    },
    {
      name: "offset",
      type: "String",
      required: false,
      description:
        "Offset of the first entry to return as received from the previous request; use an empty string to get the first chunk of results",
      inputType: "text",
    },
    {
      name: "limit",
      type: "Integer",
      required: false,
      description:
        "The maximum number of gifts to be returned; 1-100. Defaults to 100",
      inputType: "number",
    },
  ],
  examplePayload: {
    user_id: 1,
  },
};

export default method;
