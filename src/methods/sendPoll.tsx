import type { TelegramMethod } from "@/types/telegram";

const method: TelegramMethod = {
  name: "sendPoll",
  href: "https://core.telegram.org/bots/api#sendpoll",
  category: "Messages",
  description:
    "Use this method to send a native poll. On success, the sent Message is returned.",
  returns: ["Message"],
  parameters: [
    {
      name: "business_connection_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the business connection on behalf of which the message will be sent",
      inputType: "text",
    },
    {
      name: "chat_id",
      type: "Integer or String",
      required: true,
      description:
        "Unique identifier for the target chat or username of the target channel (in the format @channelusername). Polls can't be sent to channel direct messages chats.",
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
        "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only",
      inputType: "number",
    },
    {
      name: "question",
      type: "String",
      required: true,
      description: "Poll question, 1-300 characters",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "question_parse_mode",
      type: "String",
      required: false,
      description:
        "Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed",
      inputType: "text",
    },
    {
      name: "question_entities",
      type: "Array of MessageEntity",
      required: false,
      description:
        "A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "options",
      type: "Array of InputPollOption",
      required: true,
      description: "A JSON-serialized list of 2-12 answer options",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "is_anonymous",
      type: "Boolean",
      required: false,
      description: "True, if the poll needs to be anonymous, defaults to True",
      inputType: "boolean",
    },
    {
      name: "type",
      type: "String",
      required: false,
      description: 'Poll type, "quiz" or "regular", defaults to "regular"',
      inputType: "text",
    },
    {
      name: "allows_multiple_answers",
      type: "Boolean",
      required: false,
      description:
        "Pass True, if the poll allows multiple answers, defaults to False",
      inputType: "boolean",
    },
    {
      name: "allows_revoting",
      type: "Boolean",
      required: false,
      description:
        "Pass True, if the poll allows to change chosen answer options, defaults to False for quizzes and to True for regular polls",
      inputType: "boolean",
    },
    {
      name: "shuffle_options",
      type: "Boolean",
      required: false,
      description:
        "Pass True, if the poll options must be shown in random order",
      inputType: "boolean",
    },
    {
      name: "allow_adding_options",
      type: "Boolean",
      required: false,
      description:
        "Pass True, if answer options can be added to the poll after creation; not supported for anonymous polls and quizzes",
      inputType: "boolean",
    },
    {
      name: "hide_results_until_closes",
      type: "Boolean",
      required: false,
      description:
        "Pass True, if poll results must be shown only after the poll closes",
      inputType: "boolean",
    },
    {
      name: "correct_option_ids",
      type: "Array of Integer",
      required: false,
      description:
        "A JSON-serialized list of monotonically increasing 0-based identifiers of the correct answer options, required for polls in quiz mode",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "explanation",
      type: "String",
      required: false,
      description:
        "Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "explanation_parse_mode",
      type: "String",
      required: false,
      description:
        "Mode for parsing entities in the explanation. See formatting options for more details.",
      inputType: "text",
    },
    {
      name: "explanation_entities",
      type: "Array of MessageEntity",
      required: false,
      description:
        "A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "open_period",
      type: "Integer",
      required: false,
      description:
        "Amount of time in seconds the poll will be active after creation, 5-2628000. Can't be used together with close_date.",
      inputType: "number",
    },
    {
      name: "close_date",
      type: "Integer",
      required: false,
      description:
        "Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 2628000 seconds in the future. Can't be used together with open_period.",
      inputType: "number",
    },
    {
      name: "is_closed",
      type: "Boolean",
      required: false,
      description:
        "Pass True if the poll needs to be immediately closed. This can be useful for poll preview.",
      inputType: "boolean",
    },
    {
      name: "description",
      type: "String",
      required: false,
      description:
        "Description of the poll to be sent, 0-1024 characters after entities parsing",
      inputType: "textarea",
      valueMode: "text",
    },
    {
      name: "description_parse_mode",
      type: "String",
      required: false,
      description:
        "Mode for parsing entities in the poll description. See formatting options for more details.",
      inputType: "text",
    },
    {
      name: "description_entities",
      type: "Array of MessageEntity",
      required: false,
      description:
        "A JSON-serialized list of special entities that appear in the poll description, which can be specified instead of description_parse_mode",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "disable_notification",
      type: "Boolean",
      required: false,
      description:
        "Sends the message silently. Users will receive a notification with no sound.",
      inputType: "boolean",
    },
    {
      name: "protect_content",
      type: "Boolean",
      required: false,
      description:
        "Protects the contents of the sent message from forwarding and saving",
      inputType: "boolean",
    },
    {
      name: "allow_paid_broadcast",
      type: "Boolean",
      required: false,
      description:
        "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance",
      inputType: "boolean",
    },
    {
      name: "message_effect_id",
      type: "String",
      required: false,
      description:
        "Unique identifier of the message effect to be added to the message; for private chats only",
      inputType: "text",
    },
    {
      name: "reply_parameters",
      type: "ReplyParameters",
      required: false,
      description: "Description of the message to reply to",
      inputType: "textarea",
      valueMode: "json",
    },
    {
      name: "reply_markup",
      type: "InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply",
      required: false,
      description:
        "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user",
      inputType: "textarea",
      valueMode: "json",
    },
  ],
  examplePayload: {
    chat_id: "@your_channel",
    question: "Example question",
    options: [],
  },
};

export default method;
