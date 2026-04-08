import type { TelegramType } from "@/types/telegram";

export const telegramTypes: Record<string, TelegramType> = Object.fromEntries(
  [
    {
      name: "AcceptedGiftTypes",
      href: "https://core.telegram.org/bots/api#acceptedgifttypes",
      description:
        "This object describes the types of gifts that can be gifted to a user or a chat.",
      fields: [
        {
          name: "unlimited_gifts",
          type: "Boolean",
          required: true,
          description: "True, if unlimited regular gifts are accepted",
        },
        {
          name: "limited_gifts",
          type: "Boolean",
          required: true,
          description: "True, if limited regular gifts are accepted",
        },
        {
          name: "unique_gifts",
          type: "Boolean",
          required: true,
          description:
            "True, if unique gifts or gifts that can be upgraded to unique for free are accepted",
        },
        {
          name: "premium_subscription",
          type: "Boolean",
          required: true,
          description: "True, if a Telegram Premium subscription is accepted",
        },
        {
          name: "gifts_from_channels",
          type: "Boolean",
          required: true,
          description:
            "True, if transfers of unique gifts from channels are accepted",
        },
      ],
      example: {
        unlimited_gifts: true,
        limited_gifts: true,
        unique_gifts: true,
        premium_subscription: true,
        gifts_from_channels: true,
      },
      relatedTypes: [],
      usedByMethods: ["setBusinessAccountGiftSettings"],
    },
    {
      name: "AffiliateInfo",
      href: "https://core.telegram.org/bots/api#affiliateinfo",
      description:
        "Contains information about the affiliate that received a commission via this transaction.",
      fields: [
        {
          name: "affiliate_user",
          type: "User",
          required: false,
          description:
            "Optional. The bot or the user that received an affiliate commission if it was received by a bot or a user",
        },
        {
          name: "affiliate_chat",
          type: "Chat",
          required: false,
          description:
            "Optional. The chat that received an affiliate commission if it was received by a chat",
        },
        {
          name: "commission_per_mille",
          type: "Integer",
          required: true,
          description:
            "The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the bot from referred users",
        },
        {
          name: "amount",
          type: "Integer",
          required: true,
          description:
            "Integer amount of Telegram Stars received by the affiliate from the transaction, rounded to 0; can be negative for refunds",
        },
        {
          name: "nanostar_amount",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of 1/1000000000 shares of Telegram Stars received by the affiliate; from -999999999 to 999999999; can be negative for refunds",
        },
      ],
      example: {
        commission_per_mille: 1,
        amount: 1,
      },
      relatedTypes: ["Chat", "User"],
      usedByMethods: [],
    },
    {
      name: "Animation",
      href: "https://core.telegram.org/bots/api#animation",
      description:
        "This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).",
      fields: [
        {
          name: "file_id",
          type: "String",
          required: true,
          description:
            "Identifier for this file, which can be used to download or reuse the file",
        },
        {
          name: "file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "width",
          type: "Integer",
          required: true,
          description: "Video width as defined by the sender",
        },
        {
          name: "height",
          type: "Integer",
          required: true,
          description: "Video height as defined by the sender",
        },
        {
          name: "duration",
          type: "Integer",
          required: true,
          description:
            "Duration of the video in seconds as defined by the sender",
        },
        {
          name: "thumbnail",
          type: "PhotoSize",
          required: false,
          description: "Optional. Animation thumbnail as defined by the sender",
        },
        {
          name: "file_name",
          type: "String",
          required: false,
          description:
            "Optional. Original animation filename as defined by the sender",
        },
        {
          name: "mime_type",
          type: "String",
          required: false,
          description:
            "Optional. MIME type of the file as defined by the sender",
        },
        {
          name: "file_size",
          type: "Integer",
          required: false,
          description:
            "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.",
        },
      ],
      example: {
        file_id: "example",
        file_unique_id: "example",
        width: 1,
        height: 1,
        duration: 1,
      },
      relatedTypes: ["PhotoSize"],
      usedByMethods: [],
    },
    {
      name: "Audio",
      href: "https://core.telegram.org/bots/api#audio",
      description:
        "This object represents an audio file to be treated as music by the Telegram clients.",
      fields: [
        {
          name: "file_id",
          type: "String",
          required: true,
          description:
            "Identifier for this file, which can be used to download or reuse the file",
        },
        {
          name: "file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "duration",
          type: "Integer",
          required: true,
          description:
            "Duration of the audio in seconds as defined by the sender",
        },
        {
          name: "performer",
          type: "String",
          required: false,
          description:
            "Optional. Performer of the audio as defined by the sender or by audio tags",
        },
        {
          name: "title",
          type: "String",
          required: false,
          description:
            "Optional. Title of the audio as defined by the sender or by audio tags",
        },
        {
          name: "file_name",
          type: "String",
          required: false,
          description: "Optional. Original filename as defined by the sender",
        },
        {
          name: "mime_type",
          type: "String",
          required: false,
          description:
            "Optional. MIME type of the file as defined by the sender",
        },
        {
          name: "file_size",
          type: "Integer",
          required: false,
          description:
            "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.",
        },
        {
          name: "thumbnail",
          type: "PhotoSize",
          required: false,
          description:
            "Optional. Thumbnail of the album cover to which the music file belongs",
        },
      ],
      example: {
        file_id: "example",
        file_unique_id: "example",
        duration: 1,
      },
      relatedTypes: ["PhotoSize"],
      usedByMethods: [],
    },
    {
      name: "BackgroundFill",
      href: "https://core.telegram.org/bots/api#backgroundfill",
      description:
        "This object describes the way a background is filled based on the selected colors. Currently, it can be one of\n\n- BackgroundFillSolid\n\n- BackgroundFillGradient\n\n- BackgroundFillFreeformGradient",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BackgroundFillFreeformGradient",
      href: "https://core.telegram.org/bots/api#backgroundfillfreeformgradient",
      description:
        "The background is a freeform gradient that rotates after every message in the chat.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'Type of the background fill, always "freeform_gradient"',
        },
        {
          name: "colors",
          type: "Array of Integer",
          required: true,
          description:
            "A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format",
        },
      ],
      example: {
        type: "example",
        colors: [],
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BackgroundFillGradient",
      href: "https://core.telegram.org/bots/api#backgroundfillgradient",
      description: "The background is a gradient fill.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the background fill, always "gradient"',
        },
        {
          name: "top_color",
          type: "Integer",
          required: true,
          description: "Top color of the gradient in the RGB24 format",
        },
        {
          name: "bottom_color",
          type: "Integer",
          required: true,
          description: "Bottom color of the gradient in the RGB24 format",
        },
        {
          name: "rotation_angle",
          type: "Integer",
          required: true,
          description:
            "Clockwise rotation angle of the background fill in degrees; 0-359",
        },
      ],
      example: {
        type: "example",
        top_color: 1,
        bottom_color: 1,
        rotation_angle: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BackgroundFillSolid",
      href: "https://core.telegram.org/bots/api#backgroundfillsolid",
      description: "The background is filled using the selected color.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the background fill, always "solid"',
        },
        {
          name: "color",
          type: "Integer",
          required: true,
          description: "The color of the background fill in the RGB24 format",
        },
      ],
      example: {
        type: "example",
        color: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BackgroundType",
      href: "https://core.telegram.org/bots/api#backgroundtype",
      description:
        "This object describes the type of a background. Currently, it can be one of\n\n- BackgroundTypeFill\n\n- BackgroundTypeWallpaper\n\n- BackgroundTypePattern\n\n- BackgroundTypeChatTheme",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BackgroundTypeChatTheme",
      href: "https://core.telegram.org/bots/api#backgroundtypechattheme",
      description:
        "The background is taken directly from a built-in chat theme.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the background, always "chat_theme"',
        },
        {
          name: "theme_name",
          type: "String",
          required: true,
          description: "Name of the chat theme, which is usually an emoji",
        },
      ],
      example: {
        type: "example",
        theme_name: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BackgroundTypeFill",
      href: "https://core.telegram.org/bots/api#backgroundtypefill",
      description:
        "The background is automatically filled based on the selected colors.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the background, always "fill"',
        },
        {
          name: "fill",
          type: "BackgroundFill",
          required: true,
          description: "The background fill",
        },
        {
          name: "dark_theme_dimming",
          type: "Integer",
          required: true,
          description:
            "Dimming of the background in dark themes, as a percentage; 0-100",
        },
      ],
      example: {
        type: "example",
        fill: {},
        dark_theme_dimming: 1,
      },
      relatedTypes: ["BackgroundFill"],
      usedByMethods: [],
    },
    {
      name: "BackgroundTypePattern",
      href: "https://core.telegram.org/bots/api#backgroundtypepattern",
      description:
        'The background is a .PNG or .TGV (gzipped subset of SVG with MIME type "application/x-tgwallpattern") pattern to be combined with the background fill chosen by the user.',
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the background, always "pattern"',
        },
        {
          name: "document",
          type: "Document",
          required: true,
          description: "Document with the pattern",
        },
        {
          name: "fill",
          type: "BackgroundFill",
          required: true,
          description: "The background fill that is combined with the pattern",
        },
        {
          name: "intensity",
          type: "Integer",
          required: true,
          description:
            "Intensity of the pattern when it is shown above the filled background; 0-100",
        },
        {
          name: "is_inverted",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only",
        },
        {
          name: "is_moving",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the background moves slightly when the device is tilted",
        },
      ],
      example: {
        type: "example",
        document: {},
        fill: {},
        intensity: 1,
      },
      relatedTypes: ["BackgroundFill", "Document"],
      usedByMethods: [],
    },
    {
      name: "BackgroundTypeWallpaper",
      href: "https://core.telegram.org/bots/api#backgroundtypewallpaper",
      description: "The background is a wallpaper in the JPEG format.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the background, always "wallpaper"',
        },
        {
          name: "document",
          type: "Document",
          required: true,
          description: "Document with the wallpaper",
        },
        {
          name: "dark_theme_dimming",
          type: "Integer",
          required: true,
          description:
            "Dimming of the background in dark themes, as a percentage; 0-100",
        },
        {
          name: "is_blurred",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12",
        },
        {
          name: "is_moving",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the background moves slightly when the device is tilted",
        },
      ],
      example: {
        type: "example",
        document: {},
        dark_theme_dimming: 1,
      },
      relatedTypes: ["Document"],
      usedByMethods: [],
    },
    {
      name: "Birthdate",
      href: "https://core.telegram.org/bots/api#birthdate",
      description: "Describes the birthdate of a user.",
      fields: [
        {
          name: "day",
          type: "Integer",
          required: true,
          description: "Day of the user's birth; 1-31",
        },
        {
          name: "month",
          type: "Integer",
          required: true,
          description: "Month of the user's birth; 1-12",
        },
        {
          name: "year",
          type: "Integer",
          required: false,
          description: "Optional. Year of the user's birth",
        },
      ],
      example: {
        day: 1,
        month: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BotCommand",
      href: "https://core.telegram.org/bots/api#botcommand",
      description: "This object represents a bot command.",
      fields: [
        {
          name: "command",
          type: "String",
          required: true,
          description:
            "Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.",
        },
        {
          name: "description",
          type: "String",
          required: true,
          description: "Description of the command; 1-256 characters.",
        },
      ],
      example: {
        command: "example",
        description: "Example description",
      },
      relatedTypes: [],
      usedByMethods: ["getMyCommands", "setMyCommands"],
    },
    {
      name: "BotCommandScope",
      href: "https://core.telegram.org/bots/api#botcommandscope",
      description:
        "This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:\n\n- BotCommandScopeDefault\n\n- BotCommandScopeAllPrivateChats\n\n- BotCommandScopeAllGroupChats\n\n- BotCommandScopeAllChatAdministrators\n\n- BotCommandScopeChat\n\n- BotCommandScopeChatAdministrators\n\n- BotCommandScopeChatMember",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: ["deleteMyCommands", "getMyCommands", "setMyCommands"],
    },
    {
      name: "BotCommandScopeAllChatAdministrators",
      href: "https://core.telegram.org/bots/api#botcommandscopeallchatadministrators",
      description:
        "Represents the scope of bot commands, covering all group and supergroup chat administrators.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Scope type, must be all_chat_administrators",
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BotCommandScopeAllGroupChats",
      href: "https://core.telegram.org/bots/api#botcommandscopeallgroupchats",
      description:
        "Represents the scope of bot commands, covering all group and supergroup chats.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Scope type, must be all_group_chats",
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BotCommandScopeAllPrivateChats",
      href: "https://core.telegram.org/bots/api#botcommandscopeallprivatechats",
      description:
        "Represents the scope of bot commands, covering all private chats.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Scope type, must be all_private_chats",
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BotCommandScopeChat",
      href: "https://core.telegram.org/bots/api#botcommandscopechat",
      description:
        "Represents the scope of bot commands, covering a specific chat.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Scope type, must be chat",
        },
        {
          name: "chat_id",
          type: "Integer or String",
          required: true,
          description:
            "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel direct messages chats and channel chats aren't supported.",
        },
      ],
      example: {
        type: "example",
        chat_id: "@your_channel",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BotCommandScopeChatAdministrators",
      href: "https://core.telegram.org/bots/api#botcommandscopechatadministrators",
      description:
        "Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Scope type, must be chat_administrators",
        },
        {
          name: "chat_id",
          type: "Integer or String",
          required: true,
          description:
            "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel direct messages chats and channel chats aren't supported.",
        },
      ],
      example: {
        type: "example",
        chat_id: "@your_channel",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BotCommandScopeChatMember",
      href: "https://core.telegram.org/bots/api#botcommandscopechatmember",
      description:
        "Represents the scope of bot commands, covering a specific member of a group or supergroup chat.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Scope type, must be chat_member",
        },
        {
          name: "chat_id",
          type: "Integer or String",
          required: true,
          description:
            "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel direct messages chats and channel chats aren't supported.",
        },
        {
          name: "user_id",
          type: "Integer",
          required: true,
          description: "Unique identifier of the target user",
        },
      ],
      example: {
        type: "example",
        chat_id: "@your_channel",
        user_id: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BotCommandScopeDefault",
      href: "https://core.telegram.org/bots/api#botcommandscopedefault",
      description:
        "Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Scope type, must be default",
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BotDescription",
      href: "https://core.telegram.org/bots/api#botdescription",
      description: "This object represents the bot's description.",
      fields: [
        {
          name: "description",
          type: "String",
          required: true,
          description: "The bot's description",
        },
      ],
      example: {
        description: "Example description",
      },
      relatedTypes: [],
      usedByMethods: ["getMyDescription"],
    },
    {
      name: "BotName",
      href: "https://core.telegram.org/bots/api#botname",
      description: "This object represents the bot's name.",
      fields: [
        {
          name: "name",
          type: "String",
          required: true,
          description: "The bot's name",
        },
      ],
      example: {
        name: "example",
      },
      relatedTypes: [],
      usedByMethods: ["getMyName"],
    },
    {
      name: "BotShortDescription",
      href: "https://core.telegram.org/bots/api#botshortdescription",
      description: "This object represents the bot's short description.",
      fields: [
        {
          name: "short_description",
          type: "String",
          required: true,
          description: "The bot's short description",
        },
      ],
      example: {
        short_description: "Example description",
      },
      relatedTypes: [],
      usedByMethods: ["getMyShortDescription"],
    },
    {
      name: "BusinessBotRights",
      href: "https://core.telegram.org/bots/api#businessbotrights",
      description: "Represents the rights of a business bot.",
      fields: [
        {
          name: "can_reply",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours",
        },
        {
          name: "can_read_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can mark incoming private messages as read",
        },
        {
          name: "can_delete_sent_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can delete messages sent by the bot",
        },
        {
          name: "can_delete_all_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can delete all private messages in managed chats",
        },
        {
          name: "can_edit_name",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can edit the first and last name of the business account",
        },
        {
          name: "can_edit_bio",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can edit the bio of the business account",
        },
        {
          name: "can_edit_profile_photo",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can edit the profile photo of the business account",
        },
        {
          name: "can_edit_username",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can edit the username of the business account",
        },
        {
          name: "can_change_gift_settings",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can change the privacy settings pertaining to gifts for the business account",
        },
        {
          name: "can_view_gifts_and_stars",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can view gifts and the amount of Telegram Stars owned by the business account",
        },
        {
          name: "can_convert_gifts_to_stars",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can convert regular gifts owned by the business account to Telegram Stars",
        },
        {
          name: "can_transfer_and_upgrade_gifts",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can transfer and upgrade gifts owned by the business account",
        },
        {
          name: "can_transfer_stars",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts",
        },
        {
          name: "can_manage_stories",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can post, edit and delete stories on behalf of the business account",
        },
      ],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "BusinessConnection",
      href: "https://core.telegram.org/bots/api#businessconnection",
      description:
        "Describes the connection of the bot with a business account.",
      fields: [
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier of the business connection",
        },
        {
          name: "user",
          type: "User",
          required: true,
          description:
            "Business account user that created the business connection",
        },
        {
          name: "user_chat_id",
          type: "Integer",
          required: true,
          description:
            "Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.",
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description: "Date the connection was established in Unix time",
        },
        {
          name: "rights",
          type: "BusinessBotRights",
          required: false,
          description: "Optional. Rights of the business bot",
        },
        {
          name: "is_enabled",
          type: "Boolean",
          required: true,
          description: "True, if the connection is active",
        },
      ],
      example: {
        id: "example",
        user: {},
        user_chat_id: 1,
        date: 1,
        is_enabled: true,
      },
      relatedTypes: ["BusinessBotRights", "User"],
      usedByMethods: ["getBusinessConnection"],
    },
    {
      name: "BusinessIntro",
      href: "https://core.telegram.org/bots/api#businessintro",
      description:
        "Contains information about the start page settings of a Telegram Business account.",
      fields: [
        {
          name: "title",
          type: "String",
          required: false,
          description: "Optional. Title text of the business intro",
        },
        {
          name: "message",
          type: "String",
          required: false,
          description: "Optional. Message text of the business intro",
        },
        {
          name: "sticker",
          type: "Sticker",
          required: false,
          description: "Optional. Sticker of the business intro",
        },
      ],
      example: {},
      relatedTypes: ["Sticker"],
      usedByMethods: [],
    },
    {
      name: "BusinessLocation",
      href: "https://core.telegram.org/bots/api#businesslocation",
      description:
        "Contains information about the location of a Telegram Business account.",
      fields: [
        {
          name: "address",
          type: "String",
          required: true,
          description: "Address of the business",
        },
        {
          name: "location",
          type: "Location",
          required: false,
          description: "Optional. Location of the business",
        },
      ],
      example: {
        address: "example",
      },
      relatedTypes: ["Location"],
      usedByMethods: [],
    },
    {
      name: "BusinessMessagesDeleted",
      href: "https://core.telegram.org/bots/api#businessmessagesdeleted",
      description:
        "This object is received when messages are deleted from a connected business account.",
      fields: [
        {
          name: "business_connection_id",
          type: "String",
          required: true,
          description: "Unique identifier of the business connection",
        },
        {
          name: "chat",
          type: "Chat",
          required: true,
          description:
            "Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.",
        },
        {
          name: "message_ids",
          type: "Array of Integer",
          required: true,
          description:
            "The list of identifiers of deleted messages in the chat of the business account",
        },
      ],
      example: {
        business_connection_id: "example",
        chat: {},
        message_ids: [],
      },
      relatedTypes: ["Chat"],
      usedByMethods: [],
    },
    {
      name: "BusinessOpeningHours",
      href: "https://core.telegram.org/bots/api#businessopeninghours",
      description: "Describes the opening hours of a business.",
      fields: [
        {
          name: "time_zone_name",
          type: "String",
          required: true,
          description:
            "Unique name of the time zone for which the opening hours are defined",
        },
        {
          name: "opening_hours",
          type: "Array of BusinessOpeningHoursInterval",
          required: true,
          description:
            "List of time intervals describing business opening hours",
        },
      ],
      example: {
        time_zone_name: "example",
        opening_hours: [],
      },
      relatedTypes: ["BusinessOpeningHoursInterval"],
      usedByMethods: [],
    },
    {
      name: "BusinessOpeningHoursInterval",
      href: "https://core.telegram.org/bots/api#businessopeninghoursinterval",
      description:
        "Describes an interval of time during which a business is open.",
      fields: [
        {
          name: "opening_minute",
          type: "Integer",
          required: true,
          description:
            "The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60",
        },
        {
          name: "closing_minute",
          type: "Integer",
          required: true,
          description:
            "The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60",
        },
      ],
      example: {
        opening_minute: 1,
        closing_minute: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "CallbackGame",
      href: "https://core.telegram.org/bots/api#callbackgame",
      description:
        "A placeholder, currently holds no information. Use BotFather to set up your game.",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "CallbackQuery",
      href: "https://core.telegram.org/bots/api#callbackquery",
      description:
        "This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.",
      fields: [
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this query",
        },
        {
          name: "from",
          type: "User",
          required: true,
          description: "Sender",
        },
        {
          name: "message",
          type: "MaybeInaccessibleMessage",
          required: false,
          description:
            "Optional. Message sent by the bot with the callback button that originated the query",
        },
        {
          name: "inline_message_id",
          type: "String",
          required: false,
          description:
            "Optional. Identifier of the message sent via the bot in inline mode, that originated the query.",
        },
        {
          name: "chat_instance",
          type: "String",
          required: true,
          description:
            "Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.",
        },
        {
          name: "data",
          type: "String",
          required: false,
          description:
            "Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data.",
        },
        {
          name: "game_short_name",
          type: "String",
          required: false,
          description:
            "Optional. Short name of a Game to be returned, serves as the unique identifier for the game",
        },
      ],
      example: {
        id: "example",
        from: {},
        chat_instance: "example",
      },
      relatedTypes: ["MaybeInaccessibleMessage", "User"],
      usedByMethods: [],
    },
    {
      name: "Chat",
      href: "https://core.telegram.org/bots/api#chat",
      description: "This object represents a chat.",
      fields: [
        {
          name: "id",
          type: "Integer",
          required: true,
          description:
            "Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'Type of the chat, can be either "private", "group", "supergroup" or "channel"',
        },
        {
          name: "title",
          type: "String",
          required: false,
          description:
            "Optional. Title, for supergroups, channels and group chats",
        },
        {
          name: "username",
          type: "String",
          required: false,
          description:
            "Optional. Username, for private chats, supergroups and channels if available",
        },
        {
          name: "first_name",
          type: "String",
          required: false,
          description:
            "Optional. First name of the other party in a private chat",
        },
        {
          name: "last_name",
          type: "String",
          required: false,
          description:
            "Optional. Last name of the other party in a private chat",
        },
        {
          name: "is_forum",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the supergroup chat is a forum (has topics enabled)",
        },
        {
          name: "is_direct_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the chat is the direct messages chat of a channel",
        },
      ],
      example: {
        id: 1,
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ChatAdministratorRights",
      href: "https://core.telegram.org/bots/api#chatadministratorrights",
      description: "Represents the rights of an administrator in a chat.",
      fields: [
        {
          name: "is_anonymous",
          type: "Boolean",
          required: true,
          description: "True, if the user's presence in the chat is hidden",
        },
        {
          name: "can_manage_chat",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.",
        },
        {
          name: "can_delete_messages",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can delete messages of other users",
        },
        {
          name: "can_manage_video_chats",
          type: "Boolean",
          required: true,
          description: "True, if the administrator can manage video chats",
        },
        {
          name: "can_restrict_members",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics",
        },
        {
          name: "can_promote_members",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)",
        },
        {
          name: "can_change_info",
          type: "Boolean",
          required: true,
          description:
            "True, if the user is allowed to change the chat title, photo and other settings",
        },
        {
          name: "can_invite_users",
          type: "Boolean",
          required: true,
          description:
            "True, if the user is allowed to invite new users to the chat",
        },
        {
          name: "can_post_stories",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can post stories to the chat",
        },
        {
          name: "can_edit_stories",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive",
        },
        {
          name: "can_delete_stories",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can delete stories posted by other users",
        },
        {
          name: "can_post_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only",
        },
        {
          name: "can_edit_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only",
        },
        {
          name: "can_pin_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to pin messages; for groups and supergroups only",
        },
        {
          name: "can_manage_topics",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only",
        },
        {
          name: "can_manage_direct_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the administrator can manage direct messages of the channel and decline suggested posts; for channels only",
        },
        {
          name: "can_manage_tags",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the administrator can edit the tags of regular members; for groups and supergroups only. If omitted defaults to the value of can_pin_messages.",
        },
      ],
      example: {
        is_anonymous: true,
        can_manage_chat: true,
        can_delete_messages: true,
        can_manage_video_chats: true,
        can_restrict_members: true,
        can_promote_members: true,
        can_change_info: true,
        can_invite_users: true,
        can_post_stories: true,
        can_edit_stories: true,
        can_delete_stories: true,
      },
      relatedTypes: [],
      usedByMethods: [
        "getMyDefaultAdministratorRights",
        "setMyDefaultAdministratorRights",
      ],
    },
    {
      name: "ChatBackground",
      href: "https://core.telegram.org/bots/api#chatbackground",
      description: "This object represents a chat background.",
      fields: [
        {
          name: "type",
          type: "BackgroundType",
          required: true,
          description: "Type of the background",
        },
      ],
      example: {
        type: {},
      },
      relatedTypes: ["BackgroundType"],
      usedByMethods: [],
    },
    {
      name: "ChatBoost",
      href: "https://core.telegram.org/bots/api#chatboost",
      description: "This object contains information about a chat boost.",
      fields: [
        {
          name: "boost_id",
          type: "String",
          required: true,
          description: "Unique identifier of the boost",
        },
        {
          name: "add_date",
          type: "Integer",
          required: true,
          description:
            "Point in time (Unix timestamp) when the chat was boosted",
        },
        {
          name: "expiration_date",
          type: "Integer",
          required: true,
          description:
            "Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged",
        },
        {
          name: "source",
          type: "ChatBoostSource",
          required: true,
          description: "Source of the added boost",
        },
      ],
      example: {
        boost_id: "example",
        add_date: 1,
        expiration_date: 1,
        source: {},
      },
      relatedTypes: ["ChatBoostSource"],
      usedByMethods: [],
    },
    {
      name: "ChatBoostAdded",
      href: "https://core.telegram.org/bots/api#chatboostadded",
      description:
        "This object represents a service message about a user boosting a chat.",
      fields: [
        {
          name: "boost_count",
          type: "Integer",
          required: true,
          description: "Number of boosts added by the user",
        },
      ],
      example: {
        boost_count: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ChatBoostRemoved",
      href: "https://core.telegram.org/bots/api#chatboostremoved",
      description: "This object represents a boost removed from a chat.",
      fields: [
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "Chat which was boosted",
        },
        {
          name: "boost_id",
          type: "String",
          required: true,
          description: "Unique identifier of the boost",
        },
        {
          name: "remove_date",
          type: "Integer",
          required: true,
          description:
            "Point in time (Unix timestamp) when the boost was removed",
        },
        {
          name: "source",
          type: "ChatBoostSource",
          required: true,
          description: "Source of the removed boost",
        },
      ],
      example: {
        chat: {},
        boost_id: "example",
        remove_date: 1,
        source: {},
      },
      relatedTypes: ["Chat", "ChatBoostSource"],
      usedByMethods: [],
    },
    {
      name: "ChatBoostSource",
      href: "https://core.telegram.org/bots/api#chatboostsource",
      description:
        "This object describes the source of a chat boost. It can be one of\n\n- ChatBoostSourcePremium\n\n- ChatBoostSourceGiftCode\n\n- ChatBoostSourceGiveaway",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ChatBoostSourceGiftCode",
      href: "https://core.telegram.org/bots/api#chatboostsourcegiftcode",
      description:
        "The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: 'Source of the boost, always "gift_code"',
        },
        {
          name: "user",
          type: "User",
          required: true,
          description: "User for which the gift code was created",
        },
      ],
      example: {
        source: "example",
        user: {},
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ChatBoostSourceGiveaway",
      href: "https://core.telegram.org/bots/api#chatboostsourcegiveaway",
      description:
        "The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and prize_star_count / 500 times for one year for Telegram Star giveaways.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: 'Source of the boost, always "giveaway"',
        },
        {
          name: "giveaway_message_id",
          type: "Integer",
          required: true,
          description:
            "Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet.",
        },
        {
          name: "user",
          type: "User",
          required: false,
          description:
            "Optional. User that won the prize in the giveaway if any; for Telegram Premium giveaways only",
        },
        {
          name: "prize_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only",
        },
        {
          name: "is_unclaimed",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the giveaway was completed, but there was no user to win the prize",
        },
      ],
      example: {
        source: "example",
        giveaway_message_id: 1,
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ChatBoostSourcePremium",
      href: "https://core.telegram.org/bots/api#chatboostsourcepremium",
      description:
        "The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: 'Source of the boost, always "premium"',
        },
        {
          name: "user",
          type: "User",
          required: true,
          description: "User that boosted the chat",
        },
      ],
      example: {
        source: "example",
        user: {},
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ChatBoostUpdated",
      href: "https://core.telegram.org/bots/api#chatboostupdated",
      description: "This object represents a boost added to a chat or changed.",
      fields: [
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "Chat which was boosted",
        },
        {
          name: "boost",
          type: "ChatBoost",
          required: true,
          description: "Information about the chat boost",
        },
      ],
      example: {
        chat: {},
        boost: {},
      },
      relatedTypes: ["Chat", "ChatBoost"],
      usedByMethods: [],
    },
    {
      name: "ChatFullInfo",
      href: "https://core.telegram.org/bots/api#chatfullinfo",
      description: "This object contains full information about a chat.",
      fields: [
        {
          name: "id",
          type: "Integer",
          required: true,
          description:
            "Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'Type of the chat, can be either "private", "group", "supergroup" or "channel"',
        },
        {
          name: "title",
          type: "String",
          required: false,
          description:
            "Optional. Title, for supergroups, channels and group chats",
        },
        {
          name: "username",
          type: "String",
          required: false,
          description:
            "Optional. Username, for private chats, supergroups and channels if available",
        },
        {
          name: "first_name",
          type: "String",
          required: false,
          description:
            "Optional. First name of the other party in a private chat",
        },
        {
          name: "last_name",
          type: "String",
          required: false,
          description:
            "Optional. Last name of the other party in a private chat",
        },
        {
          name: "is_forum",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the supergroup chat is a forum (has topics enabled)",
        },
        {
          name: "is_direct_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the chat is the direct messages chat of a channel",
        },
        {
          name: "accent_color_id",
          type: "Integer",
          required: true,
          description:
            "Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details.",
        },
        {
          name: "max_reaction_count",
          type: "Integer",
          required: true,
          description:
            "The maximum number of reactions that can be set on a message in the chat",
        },
        {
          name: "photo",
          type: "ChatPhoto",
          required: false,
          description: "Optional. Chat photo",
        },
        {
          name: "active_usernames",
          type: "Array of String",
          required: false,
          description:
            "Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels",
        },
        {
          name: "birthdate",
          type: "Birthdate",
          required: false,
          description:
            "Optional. For private chats, the date of birth of the user",
        },
        {
          name: "business_intro",
          type: "BusinessIntro",
          required: false,
          description:
            "Optional. For private chats with business accounts, the intro of the business",
        },
        {
          name: "business_location",
          type: "BusinessLocation",
          required: false,
          description:
            "Optional. For private chats with business accounts, the location of the business",
        },
        {
          name: "business_opening_hours",
          type: "BusinessOpeningHours",
          required: false,
          description:
            "Optional. For private chats with business accounts, the opening hours of the business",
        },
        {
          name: "personal_chat",
          type: "Chat",
          required: false,
          description:
            "Optional. For private chats, the personal channel of the user",
        },
        {
          name: "parent_chat",
          type: "Chat",
          required: false,
          description:
            "Optional. Information about the corresponding channel chat; for direct messages chats only",
        },
        {
          name: "available_reactions",
          type: "Array of ReactionType",
          required: false,
          description:
            "Optional. List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed.",
        },
        {
          name: "background_custom_emoji_id",
          type: "String",
          required: false,
          description:
            "Optional. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background",
        },
        {
          name: "profile_accent_color_id",
          type: "Integer",
          required: false,
          description:
            "Optional. Identifier of the accent color for the chat's profile background. See profile accent colors for more details.",
        },
        {
          name: "profile_background_custom_emoji_id",
          type: "String",
          required: false,
          description:
            "Optional. Custom emoji identifier of the emoji chosen by the chat for its profile background",
        },
        {
          name: "emoji_status_custom_emoji_id",
          type: "String",
          required: false,
          description:
            "Optional. Custom emoji identifier of the emoji status of the chat or the other party in a private chat",
        },
        {
          name: "emoji_status_expiration_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any",
        },
        {
          name: "bio",
          type: "String",
          required: false,
          description: "Optional. Bio of the other party in a private chat",
        },
        {
          name: "has_private_forwards",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user",
        },
        {
          name: "has_restricted_voice_and_video_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat",
        },
        {
          name: "join_to_send_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if users need to join the supergroup before they can send messages",
        },
        {
          name: "join_by_request",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators",
        },
        {
          name: "description",
          type: "String",
          required: false,
          description:
            "Optional. Description, for groups, supergroups and channel chats",
        },
        {
          name: "invite_link",
          type: "String",
          required: false,
          description:
            "Optional. Primary invite link, for groups, supergroups and channel chats",
        },
        {
          name: "pinned_message",
          type: "Message",
          required: false,
          description:
            "Optional. The most recent pinned message (by sending date)",
        },
        {
          name: "permissions",
          type: "ChatPermissions",
          required: false,
          description:
            "Optional. Default chat member permissions, for groups and supergroups",
        },
        {
          name: "accepted_gift_types",
          type: "AcceptedGiftTypes",
          required: true,
          description:
            "Information about types of gifts that are accepted by the chat or by the corresponding user for private chats",
        },
        {
          name: "can_send_paid_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats.",
        },
        {
          name: "slow_mode_delay",
          type: "Integer",
          required: false,
          description:
            "Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds",
        },
        {
          name: "unrestrict_boost_count",
          type: "Integer",
          required: false,
          description:
            "Optional. For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions",
        },
        {
          name: "message_auto_delete_time",
          type: "Integer",
          required: false,
          description:
            "Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds",
        },
        {
          name: "has_aggressive_anti_spam_enabled",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators.",
        },
        {
          name: "has_hidden_members",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if non-administrators can only get the list of bots and administrators in the chat",
        },
        {
          name: "has_protected_content",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if messages from the chat can't be forwarded to other chats",
        },
        {
          name: "has_visible_history",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if new chat members will have access to old messages; available only to chat administrators",
        },
        {
          name: "sticker_set_name",
          type: "String",
          required: false,
          description:
            "Optional. For supergroups, name of the group sticker set",
        },
        {
          name: "can_set_sticker_set",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can change the group sticker set",
        },
        {
          name: "custom_emoji_sticker_set_name",
          type: "String",
          required: false,
          description:
            "Optional. For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group.",
        },
        {
          name: "linked_chat_id",
          type: "Integer",
          required: false,
          description:
            "Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.",
        },
        {
          name: "location",
          type: "ChatLocation",
          required: false,
          description:
            "Optional. For supergroups, the location to which the supergroup is connected",
        },
        {
          name: "rating",
          type: "UserRating",
          required: false,
          description:
            "Optional. For private chats, the rating of the user if any",
        },
        {
          name: "first_profile_audio",
          type: "Audio",
          required: false,
          description:
            "Optional. For private chats, the first audio added to the profile of the user",
        },
        {
          name: "unique_gift_colors",
          type: "UniqueGiftColors",
          required: false,
          description:
            "Optional. The color scheme based on a unique gift that must be used for the chat's name, message replies and link previews",
        },
        {
          name: "paid_message_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of Telegram Stars a general user have to pay to send a message to the chat",
        },
      ],
      example: {
        id: 1,
        type: "example",
        accent_color_id: 1,
        max_reaction_count: 1,
        accepted_gift_types: {},
      },
      relatedTypes: [
        "AcceptedGiftTypes",
        "Audio",
        "Birthdate",
        "BusinessIntro",
        "BusinessLocation",
        "BusinessOpeningHours",
        "Chat",
        "ChatLocation",
        "ChatPermissions",
        "ChatPhoto",
        "Message",
        "ReactionType",
        "UniqueGiftColors",
        "UserRating",
      ],
      usedByMethods: ["getChat"],
    },
    {
      name: "ChatInviteLink",
      href: "https://core.telegram.org/bots/api#chatinvitelink",
      description: "Represents an invite link for a chat.",
      fields: [
        {
          name: "invite_link",
          type: "String",
          required: true,
          description:
            'The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with "...".',
        },
        {
          name: "creator",
          type: "User",
          required: true,
          description: "Creator of the link",
        },
        {
          name: "creates_join_request",
          type: "Boolean",
          required: true,
          description:
            "True, if users joining the chat via the link need to be approved by chat administrators",
        },
        {
          name: "is_primary",
          type: "Boolean",
          required: true,
          description: "True, if the link is primary",
        },
        {
          name: "is_revoked",
          type: "Boolean",
          required: true,
          description: "True, if the link is revoked",
        },
        {
          name: "name",
          type: "String",
          required: false,
          description: "Optional. Invite link name",
        },
        {
          name: "expire_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Point in time (Unix timestamp) when the link will expire or has been expired",
        },
        {
          name: "member_limit",
          type: "Integer",
          required: false,
          description:
            "Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999",
        },
        {
          name: "pending_join_request_count",
          type: "Integer",
          required: false,
          description:
            "Optional. Number of pending join requests created using this link",
        },
        {
          name: "subscription_period",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of seconds the subscription will be active for before the next payment",
        },
        {
          name: "subscription_price",
          type: "Integer",
          required: false,
          description:
            "Optional. The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link",
        },
      ],
      example: {
        invite_link: "example",
        creator: {},
        creates_join_request: true,
        is_primary: true,
        is_revoked: true,
      },
      relatedTypes: ["User"],
      usedByMethods: [
        "createChatInviteLink",
        "createChatSubscriptionInviteLink",
        "editChatInviteLink",
        "editChatSubscriptionInviteLink",
        "revokeChatInviteLink",
      ],
    },
    {
      name: "ChatJoinRequest",
      href: "https://core.telegram.org/bots/api#chatjoinrequest",
      description: "Represents a join request sent to a chat.",
      fields: [
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "Chat to which the request was sent",
        },
        {
          name: "from",
          type: "User",
          required: true,
          description: "User that sent the join request",
        },
        {
          name: "user_chat_id",
          type: "Integer",
          required: true,
          description:
            "Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.",
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description: "Date the request was sent in Unix time",
        },
        {
          name: "bio",
          type: "String",
          required: false,
          description: "Optional. Bio of the user.",
        },
        {
          name: "invite_link",
          type: "ChatInviteLink",
          required: false,
          description:
            "Optional. Chat invite link that was used by the user to send the join request",
        },
      ],
      example: {
        chat: {},
        from: {},
        user_chat_id: 1,
        date: 1,
      },
      relatedTypes: ["Chat", "ChatInviteLink", "User"],
      usedByMethods: [],
    },
    {
      name: "ChatLocation",
      href: "https://core.telegram.org/bots/api#chatlocation",
      description: "Represents a location to which a chat is connected.",
      fields: [
        {
          name: "location",
          type: "Location",
          required: true,
          description:
            "The location to which the supergroup is connected. Can't be a live location.",
        },
        {
          name: "address",
          type: "String",
          required: true,
          description:
            "Location address; 1-64 characters, as defined by the chat owner",
        },
      ],
      example: {
        location: {},
        address: "example",
      },
      relatedTypes: ["Location"],
      usedByMethods: [],
    },
    {
      name: "ChatMember",
      href: "https://core.telegram.org/bots/api#chatmember",
      description:
        "This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:\n\n- ChatMemberOwner\n\n- ChatMemberAdministrator\n\n- ChatMemberMember\n\n- ChatMemberRestricted\n\n- ChatMemberLeft\n\n- ChatMemberBanned",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: ["getChatAdministrators", "getChatMember"],
    },
    {
      name: "ChatMemberAdministrator",
      href: "https://core.telegram.org/bots/api#chatmemberadministrator",
      description:
        "Represents a chat member that has some additional privileges.",
      fields: [
        {
          name: "status",
          type: "String",
          required: true,
          description:
            'The member\'s status in the chat, always "administrator"',
        },
        {
          name: "user",
          type: "User",
          required: true,
          description: "Information about the user",
        },
        {
          name: "can_be_edited",
          type: "Boolean",
          required: true,
          description:
            "True, if the bot is allowed to edit administrator privileges of that user",
        },
        {
          name: "is_anonymous",
          type: "Boolean",
          required: true,
          description: "True, if the user's presence in the chat is hidden",
        },
        {
          name: "can_manage_chat",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.",
        },
        {
          name: "can_delete_messages",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can delete messages of other users",
        },
        {
          name: "can_manage_video_chats",
          type: "Boolean",
          required: true,
          description: "True, if the administrator can manage video chats",
        },
        {
          name: "can_restrict_members",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics",
        },
        {
          name: "can_promote_members",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)",
        },
        {
          name: "can_change_info",
          type: "Boolean",
          required: true,
          description:
            "True, if the user is allowed to change the chat title, photo and other settings",
        },
        {
          name: "can_invite_users",
          type: "Boolean",
          required: true,
          description:
            "True, if the user is allowed to invite new users to the chat",
        },
        {
          name: "can_post_stories",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can post stories to the chat",
        },
        {
          name: "can_edit_stories",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive",
        },
        {
          name: "can_delete_stories",
          type: "Boolean",
          required: true,
          description:
            "True, if the administrator can delete stories posted by other users",
        },
        {
          name: "can_post_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only",
        },
        {
          name: "can_edit_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only",
        },
        {
          name: "can_pin_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to pin messages; for groups and supergroups only",
        },
        {
          name: "can_manage_topics",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only",
        },
        {
          name: "can_manage_direct_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the administrator can manage direct messages of the channel and decline suggested posts; for channels only",
        },
        {
          name: "can_manage_tags",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the administrator can edit the tags of regular members; for groups and supergroups only. If omitted defaults to the value of can_pin_messages.",
        },
        {
          name: "custom_title",
          type: "String",
          required: false,
          description: "Optional. Custom title for this user",
        },
      ],
      example: {
        status: "example",
        user: {},
        can_be_edited: true,
        is_anonymous: true,
        can_manage_chat: true,
        can_delete_messages: true,
        can_manage_video_chats: true,
        can_restrict_members: true,
        can_promote_members: true,
        can_change_info: true,
        can_invite_users: true,
        can_post_stories: true,
        can_edit_stories: true,
        can_delete_stories: true,
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ChatMemberBanned",
      href: "https://core.telegram.org/bots/api#chatmemberbanned",
      description:
        "Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.",
      fields: [
        {
          name: "status",
          type: "String",
          required: true,
          description: 'The member\'s status in the chat, always "kicked"',
        },
        {
          name: "user",
          type: "User",
          required: true,
          description: "Information about the user",
        },
        {
          name: "until_date",
          type: "Integer",
          required: true,
          description:
            "Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever",
        },
      ],
      example: {
        status: "example",
        user: {},
        until_date: 1,
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ChatMemberLeft",
      href: "https://core.telegram.org/bots/api#chatmemberleft",
      description:
        "Represents a chat member that isn't currently a member of the chat, but may join it themselves.",
      fields: [
        {
          name: "status",
          type: "String",
          required: true,
          description: 'The member\'s status in the chat, always "left"',
        },
        {
          name: "user",
          type: "User",
          required: true,
          description: "Information about the user",
        },
      ],
      example: {
        status: "example",
        user: {},
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ChatMemberMember",
      href: "https://core.telegram.org/bots/api#chatmembermember",
      description:
        "Represents a chat member that has no additional privileges or restrictions.",
      fields: [
        {
          name: "status",
          type: "String",
          required: true,
          description: 'The member\'s status in the chat, always "member"',
        },
        {
          name: "tag",
          type: "String",
          required: false,
          description: "Optional. Tag of the member",
        },
        {
          name: "user",
          type: "User",
          required: true,
          description: "Information about the user",
        },
        {
          name: "until_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Date when the user's subscription will expire; Unix time",
        },
      ],
      example: {
        status: "example",
        user: {},
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ChatMemberOwner",
      href: "https://core.telegram.org/bots/api#chatmemberowner",
      description:
        "Represents a chat member that owns the chat and has all administrator privileges.",
      fields: [
        {
          name: "status",
          type: "String",
          required: true,
          description: 'The member\'s status in the chat, always "creator"',
        },
        {
          name: "user",
          type: "User",
          required: true,
          description: "Information about the user",
        },
        {
          name: "is_anonymous",
          type: "Boolean",
          required: true,
          description: "True, if the user's presence in the chat is hidden",
        },
        {
          name: "custom_title",
          type: "String",
          required: false,
          description: "Optional. Custom title for this user",
        },
      ],
      example: {
        status: "example",
        user: {},
        is_anonymous: true,
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ChatMemberRestricted",
      href: "https://core.telegram.org/bots/api#chatmemberrestricted",
      description:
        "Represents a chat member that is under certain restrictions in the chat. Supergroups only.",
      fields: [
        {
          name: "status",
          type: "String",
          required: true,
          description: 'The member\'s status in the chat, always "restricted"',
        },
        {
          name: "tag",
          type: "String",
          required: false,
          description: "Optional. Tag of the member",
        },
        {
          name: "user",
          type: "User",
          required: true,
          description: "Information about the user",
        },
        {
          name: "is_member",
          type: "Boolean",
          required: true,
          description:
            "True, if the user is a member of the chat at the moment of the request",
        },
        {
          name: "can_send_messages",
          type: "Boolean",
          required: true,
          description:
            "True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues",
        },
        {
          name: "can_send_audios",
          type: "Boolean",
          required: true,
          description: "True, if the user is allowed to send audios",
        },
        {
          name: "can_send_documents",
          type: "Boolean",
          required: true,
          description: "True, if the user is allowed to send documents",
        },
        {
          name: "can_send_photos",
          type: "Boolean",
          required: true,
          description: "True, if the user is allowed to send photos",
        },
        {
          name: "can_send_videos",
          type: "Boolean",
          required: true,
          description: "True, if the user is allowed to send videos",
        },
        {
          name: "can_send_video_notes",
          type: "Boolean",
          required: true,
          description: "True, if the user is allowed to send video notes",
        },
        {
          name: "can_send_voice_notes",
          type: "Boolean",
          required: true,
          description: "True, if the user is allowed to send voice notes",
        },
        {
          name: "can_send_polls",
          type: "Boolean",
          required: true,
          description:
            "True, if the user is allowed to send polls and checklists",
        },
        {
          name: "can_send_other_messages",
          type: "Boolean",
          required: true,
          description:
            "True, if the user is allowed to send animations, games, stickers and use inline bots",
        },
        {
          name: "can_add_web_page_previews",
          type: "Boolean",
          required: true,
          description:
            "True, if the user is allowed to add web page previews to their messages",
        },
        {
          name: "can_edit_tag",
          type: "Boolean",
          required: true,
          description: "True, if the user is allowed to edit their own tag",
        },
        {
          name: "can_change_info",
          type: "Boolean",
          required: true,
          description:
            "True, if the user is allowed to change the chat title, photo and other settings",
        },
        {
          name: "can_invite_users",
          type: "Boolean",
          required: true,
          description:
            "True, if the user is allowed to invite new users to the chat",
        },
        {
          name: "can_pin_messages",
          type: "Boolean",
          required: true,
          description: "True, if the user is allowed to pin messages",
        },
        {
          name: "can_manage_topics",
          type: "Boolean",
          required: true,
          description: "True, if the user is allowed to create forum topics",
        },
        {
          name: "until_date",
          type: "Integer",
          required: true,
          description:
            "Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever",
        },
      ],
      example: {
        status: "example",
        user: {},
        is_member: true,
        can_send_messages: true,
        can_send_audios: true,
        can_send_documents: true,
        can_send_photos: true,
        can_send_videos: true,
        can_send_video_notes: true,
        can_send_voice_notes: true,
        can_send_polls: true,
        can_send_other_messages: true,
        can_add_web_page_previews: true,
        can_edit_tag: true,
        can_change_info: true,
        can_invite_users: true,
        can_pin_messages: true,
        can_manage_topics: true,
        until_date: 1,
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ChatMemberUpdated",
      href: "https://core.telegram.org/bots/api#chatmemberupdated",
      description:
        "This object represents changes in the status of a chat member.",
      fields: [
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "Chat the user belongs to",
        },
        {
          name: "from",
          type: "User",
          required: true,
          description: "Performer of the action, which resulted in the change",
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description: "Date the change was done in Unix time",
        },
        {
          name: "old_chat_member",
          type: "ChatMember",
          required: true,
          description: "Previous information about the chat member",
        },
        {
          name: "new_chat_member",
          type: "ChatMember",
          required: true,
          description: "New information about the chat member",
        },
        {
          name: "invite_link",
          type: "ChatInviteLink",
          required: false,
          description:
            "Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only.",
        },
        {
          name: "via_join_request",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator",
        },
        {
          name: "via_chat_folder_invite_link",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user joined the chat via a chat folder invite link",
        },
      ],
      example: {
        chat: {},
        from: {},
        date: 1,
        old_chat_member: {},
        new_chat_member: {},
      },
      relatedTypes: ["Chat", "ChatInviteLink", "ChatMember", "User"],
      usedByMethods: [],
    },
    {
      name: "ChatOwnerChanged",
      href: "https://core.telegram.org/bots/api#chatownerchanged",
      description:
        "Describes a service message about an ownership change in the chat.",
      fields: [
        {
          name: "new_owner",
          type: "User",
          required: true,
          description: "The new owner of the chat",
        },
      ],
      example: {
        new_owner: {},
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ChatOwnerLeft",
      href: "https://core.telegram.org/bots/api#chatownerleft",
      description:
        "Describes a service message about the chat owner leaving the chat.",
      fields: [
        {
          name: "new_owner",
          type: "User",
          required: false,
          description:
            "Optional. The user which will be the new owner of the chat if the previous owner does not return to the chat",
        },
      ],
      example: {},
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ChatPermissions",
      href: "https://core.telegram.org/bots/api#chatpermissions",
      description:
        "Describes actions that a non-administrator user is allowed to take in a chat.",
      fields: [
        {
          name: "can_send_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues",
        },
        {
          name: "can_send_audios",
          type: "Boolean",
          required: false,
          description: "Optional. True, if the user is allowed to send audios",
        },
        {
          name: "can_send_documents",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to send documents",
        },
        {
          name: "can_send_photos",
          type: "Boolean",
          required: false,
          description: "Optional. True, if the user is allowed to send photos",
        },
        {
          name: "can_send_videos",
          type: "Boolean",
          required: false,
          description: "Optional. True, if the user is allowed to send videos",
        },
        {
          name: "can_send_video_notes",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to send video notes",
        },
        {
          name: "can_send_voice_notes",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to send voice notes",
        },
        {
          name: "can_send_polls",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to send polls and checklists",
        },
        {
          name: "can_send_other_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to send animations, games, stickers and use inline bots",
        },
        {
          name: "can_add_web_page_previews",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to add web page previews to their messages",
        },
        {
          name: "can_edit_tag",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to edit their own tag",
        },
        {
          name: "can_change_info",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups",
        },
        {
          name: "can_invite_users",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to invite new users to the chat",
        },
        {
          name: "can_pin_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to pin messages. Ignored in public supergroups",
        },
        {
          name: "can_manage_topics",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages",
        },
      ],
      example: {},
      relatedTypes: [],
      usedByMethods: ["restrictChatMember", "setChatPermissions"],
    },
    {
      name: "ChatPhoto",
      href: "https://core.telegram.org/bots/api#chatphoto",
      description: "This object represents a chat photo.",
      fields: [
        {
          name: "small_file_id",
          type: "String",
          required: true,
          description:
            "File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.",
        },
        {
          name: "small_file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "big_file_id",
          type: "String",
          required: true,
          description:
            "File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.",
        },
        {
          name: "big_file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
      ],
      example: {
        small_file_id: "example",
        small_file_unique_id: "example",
        big_file_id: "example",
        big_file_unique_id: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ChatShared",
      href: "https://core.telegram.org/bots/api#chatshared",
      description:
        "This object contains information about a chat that was shared with the bot using a KeyboardButtonRequestChat button.",
      fields: [
        {
          name: "request_id",
          type: "Integer",
          required: true,
          description: "Identifier of the request",
        },
        {
          name: "chat_id",
          type: "Integer",
          required: true,
          description:
            "Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means.",
        },
        {
          name: "title",
          type: "String",
          required: false,
          description:
            "Optional. Title of the chat, if the title was requested by the bot.",
        },
        {
          name: "username",
          type: "String",
          required: false,
          description:
            "Optional. Username of the chat, if the username was requested by the bot and available.",
        },
        {
          name: "photo",
          type: "Array of PhotoSize",
          required: false,
          description:
            "Optional. Available sizes of the chat photo, if the photo was requested by the bot",
        },
      ],
      example: {
        request_id: 1,
        chat_id: 1,
      },
      relatedTypes: ["PhotoSize"],
      usedByMethods: [],
    },
    {
      name: "Checklist",
      href: "https://core.telegram.org/bots/api#checklist",
      description: "Describes a checklist.",
      fields: [
        {
          name: "title",
          type: "String",
          required: true,
          description: "Title of the checklist",
        },
        {
          name: "title_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. Special entities that appear in the checklist title",
        },
        {
          name: "tasks",
          type: "Array of ChecklistTask",
          required: true,
          description: "List of tasks in the checklist",
        },
        {
          name: "others_can_add_tasks",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if users other than the creator of the list can add tasks to the list",
        },
        {
          name: "others_can_mark_tasks_as_done",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if users other than the creator of the list can mark tasks as done or not done",
        },
      ],
      example: {
        title: "Example title",
        tasks: [],
      },
      relatedTypes: ["ChecklistTask", "MessageEntity"],
      usedByMethods: [],
    },
    {
      name: "ChecklistTask",
      href: "https://core.telegram.org/bots/api#checklisttask",
      description: "Describes a task in a checklist.",
      fields: [
        {
          name: "id",
          type: "Integer",
          required: true,
          description: "Unique identifier of the task",
        },
        {
          name: "text",
          type: "String",
          required: true,
          description: "Text of the task",
        },
        {
          name: "text_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. Special entities that appear in the task text",
        },
        {
          name: "completed_by_user",
          type: "User",
          required: false,
          description:
            "Optional. User that completed the task; omitted if the task wasn't completed by a user",
        },
        {
          name: "completed_by_chat",
          type: "Chat",
          required: false,
          description:
            "Optional. Chat that completed the task; omitted if the task wasn't completed by a chat",
        },
        {
          name: "completion_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Point in time (Unix timestamp) when the task was completed; 0 if the task wasn't completed",
        },
      ],
      example: {
        id: 1,
        text: "Hello from Telegram Bot API Tester",
      },
      relatedTypes: ["Chat", "MessageEntity", "User"],
      usedByMethods: [],
    },
    {
      name: "ChecklistTasksAdded",
      href: "https://core.telegram.org/bots/api#checklisttasksadded",
      description:
        "Describes a service message about tasks added to a checklist.",
      fields: [
        {
          name: "checklist_message",
          type: "Message",
          required: false,
          description:
            "Optional. Message containing the checklist to which the tasks were added. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.",
        },
        {
          name: "tasks",
          type: "Array of ChecklistTask",
          required: true,
          description: "List of tasks added to the checklist",
        },
      ],
      example: {
        tasks: [],
      },
      relatedTypes: ["ChecklistTask", "Message"],
      usedByMethods: [],
    },
    {
      name: "ChecklistTasksDone",
      href: "https://core.telegram.org/bots/api#checklisttasksdone",
      description:
        "Describes a service message about checklist tasks marked as done or not done.",
      fields: [
        {
          name: "checklist_message",
          type: "Message",
          required: false,
          description:
            "Optional. Message containing the checklist whose tasks were marked as done or not done. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.",
        },
        {
          name: "marked_as_done_task_ids",
          type: "Array of Integer",
          required: false,
          description:
            "Optional. Identifiers of the tasks that were marked as done",
        },
        {
          name: "marked_as_not_done_task_ids",
          type: "Array of Integer",
          required: false,
          description:
            "Optional. Identifiers of the tasks that were marked as not done",
        },
      ],
      example: {},
      relatedTypes: ["Message"],
      usedByMethods: [],
    },
    {
      name: "ChosenInlineResult",
      href: "https://core.telegram.org/bots/api#choseninlineresult",
      description:
        "Represents a result of an inline query that was chosen by the user and sent to their chat partner.\n\nNote: It is necessary to enable inline feedback via @BotFather in order to receive these objects in updates.",
      fields: [
        {
          name: "result_id",
          type: "String",
          required: true,
          description: "The unique identifier for the result that was chosen",
        },
        {
          name: "from",
          type: "User",
          required: true,
          description: "The user that chose the result",
        },
        {
          name: "location",
          type: "Location",
          required: false,
          description:
            "Optional. Sender location, only for bots that require user location",
        },
        {
          name: "inline_message_id",
          type: "String",
          required: false,
          description:
            "Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.",
        },
        {
          name: "query",
          type: "String",
          required: true,
          description: "The query that was used to obtain the result",
        },
      ],
      example: {
        result_id: "example",
        from: {},
        query: "example",
      },
      relatedTypes: ["Location", "User"],
      usedByMethods: [],
    },
    {
      name: "Contact",
      href: "https://core.telegram.org/bots/api#contact",
      description: "This object represents a phone contact.",
      fields: [
        {
          name: "phone_number",
          type: "String",
          required: true,
          description: "Contact's phone number",
        },
        {
          name: "first_name",
          type: "String",
          required: true,
          description: "Contact's first name",
        },
        {
          name: "last_name",
          type: "String",
          required: false,
          description: "Optional. Contact's last name",
        },
        {
          name: "user_id",
          type: "Integer",
          required: false,
          description:
            "Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.",
        },
        {
          name: "vcard",
          type: "String",
          required: false,
          description:
            "Optional. Additional data about the contact in the form of a vCard",
        },
      ],
      example: {
        phone_number: "+10000000000",
        first_name: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "CopyTextButton",
      href: "https://core.telegram.org/bots/api#copytextbutton",
      description:
        "This object represents an inline keyboard button that copies specified text to the clipboard.",
      fields: [
        {
          name: "text",
          type: "String",
          required: true,
          description:
            "The text to be copied to the clipboard; 1-256 characters",
        },
      ],
      example: {
        text: "Hello from Telegram Bot API Tester",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "Dice",
      href: "https://core.telegram.org/bots/api#dice",
      description:
        "This object represents an animated emoji that displays a random value.",
      fields: [
        {
          name: "emoji",
          type: "String",
          required: true,
          description: "Emoji on which the dice throw animation is based",
        },
        {
          name: "value",
          type: "Integer",
          required: true,
          description:
            'Value of the dice, 1-6 for "🎲", "🎯" and "🎳" base emoji, 1-5 for "🏀" and "⚽" base emoji, 1-64 for "🎰" base emoji',
        },
      ],
      example: {
        emoji: "🔥",
        value: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "DirectMessagePriceChanged",
      href: "https://core.telegram.org/bots/api#directmessagepricechanged",
      description:
        "Describes a service message about a change in the price of direct messages sent to a channel chat.",
      fields: [
        {
          name: "are_direct_messages_enabled",
          type: "Boolean",
          required: true,
          description:
            "True, if direct messages are enabled for the channel chat; false otherwise",
        },
        {
          name: "direct_message_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The new number of Telegram Stars that must be paid by users for each direct message sent to the channel. Does not apply to users who have been exempted by administrators. Defaults to 0.",
        },
      ],
      example: {
        are_direct_messages_enabled: true,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "DirectMessagesTopic",
      href: "https://core.telegram.org/bots/api#directmessagestopic",
      description: "Describes a topic of a direct messages chat.",
      fields: [
        {
          name: "topic_id",
          type: "Integer",
          required: true,
          description:
            "Unique identifier of the topic. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.",
        },
        {
          name: "user",
          type: "User",
          required: false,
          description:
            "Optional. Information about the user that created the topic. Currently, it is always present",
        },
      ],
      example: {
        topic_id: 1,
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "Document",
      href: "https://core.telegram.org/bots/api#document",
      description:
        "This object represents a general file (as opposed to photos, voice messages and audio files).",
      fields: [
        {
          name: "file_id",
          type: "String",
          required: true,
          description:
            "Identifier for this file, which can be used to download or reuse the file",
        },
        {
          name: "file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "thumbnail",
          type: "PhotoSize",
          required: false,
          description: "Optional. Document thumbnail as defined by the sender",
        },
        {
          name: "file_name",
          type: "String",
          required: false,
          description: "Optional. Original filename as defined by the sender",
        },
        {
          name: "mime_type",
          type: "String",
          required: false,
          description:
            "Optional. MIME type of the file as defined by the sender",
        },
        {
          name: "file_size",
          type: "Integer",
          required: false,
          description:
            "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.",
        },
      ],
      example: {
        file_id: "example",
        file_unique_id: "example",
      },
      relatedTypes: ["PhotoSize"],
      usedByMethods: [],
    },
    {
      name: "EncryptedCredentials",
      href: "https://core.telegram.org/bots/api#encryptedcredentials",
      description:
        "Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.",
      fields: [
        {
          name: "data",
          type: "String",
          required: true,
          description:
            "Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication",
        },
        {
          name: "hash",
          type: "String",
          required: true,
          description: "Base64-encoded data hash for data authentication",
        },
        {
          name: "secret",
          type: "String",
          required: true,
          description:
            "Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption",
        },
      ],
      example: {
        data: "example",
        hash: "example",
        secret: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "EncryptedPassportElement",
      href: "https://core.telegram.org/bots/api#encryptedpassportelement",
      description:
        "Describes documents or other Telegram Passport elements shared with the bot by the user.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'Element type. One of "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration", "phone_number", "email".',
        },
        {
          name: "data",
          type: "String",
          required: false,
          description:
            'Optional. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for "personal_details", "passport", "driver_license", "identity_card", "internal_passport" and "address" types. Can be decrypted and verified using the accompanying EncryptedCredentials.',
        },
        {
          name: "phone_number",
          type: "String",
          required: false,
          description:
            'Optional. User\'s verified phone number; available only for "phone_number" type',
        },
        {
          name: "email",
          type: "String",
          required: false,
          description:
            'Optional. User\'s verified email address; available only for "email" type',
        },
        {
          name: "files",
          type: "Array of PassportFile",
          required: false,
          description:
            'Optional. Array of encrypted files with documents provided by the user; available only for "utility_bill", "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration" types. Files can be decrypted and verified using the accompanying EncryptedCredentials.',
        },
        {
          name: "front_side",
          type: "PassportFile",
          required: false,
          description:
            'Optional. Encrypted file with the front side of the document, provided by the user; available only for "passport", "driver_license", "identity_card" and "internal_passport". The file can be decrypted and verified using the accompanying EncryptedCredentials.',
        },
        {
          name: "reverse_side",
          type: "PassportFile",
          required: false,
          description:
            'Optional. Encrypted file with the reverse side of the document, provided by the user; available only for "driver_license" and "identity_card". The file can be decrypted and verified using the accompanying EncryptedCredentials.',
        },
        {
          name: "selfie",
          type: "PassportFile",
          required: false,
          description:
            'Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for "passport", "driver_license", "identity_card" and "internal_passport". The file can be decrypted and verified using the accompanying EncryptedCredentials.',
        },
        {
          name: "translation",
          type: "Array of PassportFile",
          required: false,
          description:
            'Optional. Array of encrypted files with translated versions of documents provided by the user; available if requested for "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration" types. Files can be decrypted and verified using the accompanying EncryptedCredentials.',
        },
        {
          name: "hash",
          type: "String",
          required: true,
          description:
            "Base64-encoded element hash for using in PassportElementErrorUnspecified",
        },
      ],
      example: {
        type: "example",
        hash: "example",
      },
      relatedTypes: ["PassportFile"],
      usedByMethods: [],
    },
    {
      name: "ExternalReplyInfo",
      href: "https://core.telegram.org/bots/api#externalreplyinfo",
      description:
        "This object contains information about a message that is being replied to, which may come from another chat or forum topic.",
      fields: [
        {
          name: "origin",
          type: "MessageOrigin",
          required: true,
          description: "Origin of the message replied to by the given message",
        },
        {
          name: "chat",
          type: "Chat",
          required: false,
          description:
            "Optional. Chat the original message belongs to. Available only if the chat is a supergroup or a channel.",
        },
        {
          name: "message_id",
          type: "Integer",
          required: false,
          description:
            "Optional. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.",
        },
        {
          name: "link_preview_options",
          type: "LinkPreviewOptions",
          required: false,
          description:
            "Optional. Options used for link preview generation for the original message, if it is a text message",
        },
        {
          name: "animation",
          type: "Animation",
          required: false,
          description:
            "Optional. Message is an animation, information about the animation",
        },
        {
          name: "audio",
          type: "Audio",
          required: false,
          description:
            "Optional. Message is an audio file, information about the file",
        },
        {
          name: "document",
          type: "Document",
          required: false,
          description:
            "Optional. Message is a general file, information about the file",
        },
        {
          name: "paid_media",
          type: "PaidMediaInfo",
          required: false,
          description:
            "Optional. Message contains paid media; information about the paid media",
        },
        {
          name: "photo",
          type: "Array of PhotoSize",
          required: false,
          description:
            "Optional. Message is a photo, available sizes of the photo",
        },
        {
          name: "sticker",
          type: "Sticker",
          required: false,
          description:
            "Optional. Message is a sticker, information about the sticker",
        },
        {
          name: "story",
          type: "Story",
          required: false,
          description: "Optional. Message is a forwarded story",
        },
        {
          name: "video",
          type: "Video",
          required: false,
          description:
            "Optional. Message is a video, information about the video",
        },
        {
          name: "video_note",
          type: "VideoNote",
          required: false,
          description:
            "Optional. Message is a video note, information about the video message",
        },
        {
          name: "voice",
          type: "Voice",
          required: false,
          description:
            "Optional. Message is a voice message, information about the file",
        },
        {
          name: "has_media_spoiler",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the message media is covered by a spoiler animation",
        },
        {
          name: "checklist",
          type: "Checklist",
          required: false,
          description: "Optional. Message is a checklist",
        },
        {
          name: "contact",
          type: "Contact",
          required: false,
          description:
            "Optional. Message is a shared contact, information about the contact",
        },
        {
          name: "dice",
          type: "Dice",
          required: false,
          description: "Optional. Message is a dice with random value",
        },
        {
          name: "game",
          type: "Game",
          required: false,
          description:
            "Optional. Message is a game, information about the game. More about games: https://core.telegram.org/bots/api#games",
        },
        {
          name: "giveaway",
          type: "Giveaway",
          required: false,
          description:
            "Optional. Message is a scheduled giveaway, information about the giveaway",
        },
        {
          name: "giveaway_winners",
          type: "GiveawayWinners",
          required: false,
          description: "Optional. A giveaway with public winners was completed",
        },
        {
          name: "invoice",
          type: "Invoice",
          required: false,
          description:
            "Optional. Message is an invoice for a payment, information about the invoice. More about payments: https://core.telegram.org/bots/api#payments",
        },
        {
          name: "location",
          type: "Location",
          required: false,
          description:
            "Optional. Message is a shared location, information about the location",
        },
        {
          name: "poll",
          type: "Poll",
          required: false,
          description:
            "Optional. Message is a native poll, information about the poll",
        },
        {
          name: "venue",
          type: "Venue",
          required: false,
          description:
            "Optional. Message is a venue, information about the venue",
        },
      ],
      example: {
        origin: {},
      },
      relatedTypes: [
        "Animation",
        "Audio",
        "Chat",
        "Checklist",
        "Contact",
        "Dice",
        "Document",
        "Game",
        "Giveaway",
        "GiveawayWinners",
        "Invoice",
        "LinkPreviewOptions",
        "Location",
        "MessageOrigin",
        "PaidMediaInfo",
        "PhotoSize",
        "Poll",
        "Sticker",
        "Story",
        "Venue",
        "Video",
        "VideoNote",
        "Voice",
      ],
      usedByMethods: [],
    },
    {
      name: "File",
      href: "https://core.telegram.org/bots/api#file",
      description:
        "This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.",
      fields: [
        {
          name: "file_id",
          type: "String",
          required: true,
          description:
            "Identifier for this file, which can be used to download or reuse the file",
        },
        {
          name: "file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "file_size",
          type: "Integer",
          required: false,
          description:
            "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.",
        },
        {
          name: "file_path",
          type: "String",
          required: false,
          description:
            "Optional. File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file.",
        },
      ],
      example: {
        file_id: "example",
        file_unique_id: "example",
      },
      relatedTypes: [],
      usedByMethods: ["getFile", "uploadStickerFile"],
    },
    {
      name: "ForceReply",
      href: "https://core.telegram.org/bots/api#forcereply",
      description:
        "Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram Business account.",
      fields: [
        {
          name: "force_reply",
          type: "Boolean",
          required: true,
          description:
            "Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'",
        },
        {
          name: "input_field_placeholder",
          type: "String",
          required: false,
          description:
            "Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters",
        },
        {
          name: "selective",
          type: "Boolean",
          required: false,
          description:
            "Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.",
        },
      ],
      example: {
        force_reply: true,
      },
      relatedTypes: [],
      usedByMethods: [
        "copyMessage",
        "sendAnimation",
        "sendAudio",
        "sendContact",
        "sendDice",
        "sendDocument",
        "sendLocation",
        "sendMessage",
        "sendPaidMedia",
        "sendPhoto",
        "sendPoll",
        "sendSticker",
        "sendVenue",
        "sendVideo",
        "sendVideoNote",
        "sendVoice",
      ],
    },
    {
      name: "ForumTopic",
      href: "https://core.telegram.org/bots/api#forumtopic",
      description: "This object represents a forum topic.",
      fields: [
        {
          name: "message_thread_id",
          type: "Integer",
          required: true,
          description: "Unique identifier of the forum topic",
        },
        {
          name: "name",
          type: "String",
          required: true,
          description: "Name of the topic",
        },
        {
          name: "icon_color",
          type: "Integer",
          required: true,
          description: "Color of the topic icon in RGB format",
        },
        {
          name: "icon_custom_emoji_id",
          type: "String",
          required: false,
          description:
            "Optional. Unique identifier of the custom emoji shown as the topic icon",
        },
        {
          name: "is_name_implicit",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the name of the topic wasn't specified explicitly by its creator and likely needs to be changed by the bot",
        },
      ],
      example: {
        message_thread_id: 1,
        name: "example",
        icon_color: 1,
      },
      relatedTypes: [],
      usedByMethods: ["createForumTopic"],
    },
    {
      name: "ForumTopicClosed",
      href: "https://core.telegram.org/bots/api#forumtopicclosed",
      description:
        "This object represents a service message about a forum topic closed in the chat. Currently holds no information.",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ForumTopicCreated",
      href: "https://core.telegram.org/bots/api#forumtopiccreated",
      description:
        "This object represents a service message about a new forum topic created in the chat.",
      fields: [
        {
          name: "name",
          type: "String",
          required: true,
          description: "Name of the topic",
        },
        {
          name: "icon_color",
          type: "Integer",
          required: true,
          description: "Color of the topic icon in RGB format",
        },
        {
          name: "icon_custom_emoji_id",
          type: "String",
          required: false,
          description:
            "Optional. Unique identifier of the custom emoji shown as the topic icon",
        },
        {
          name: "is_name_implicit",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the name of the topic wasn't specified explicitly by its creator and likely needs to be changed by the bot",
        },
      ],
      example: {
        name: "example",
        icon_color: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ForumTopicEdited",
      href: "https://core.telegram.org/bots/api#forumtopicedited",
      description:
        "This object represents a service message about an edited forum topic.",
      fields: [
        {
          name: "name",
          type: "String",
          required: false,
          description: "Optional. New name of the topic, if it was edited",
        },
        {
          name: "icon_custom_emoji_id",
          type: "String",
          required: false,
          description:
            "Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed",
        },
      ],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ForumTopicReopened",
      href: "https://core.telegram.org/bots/api#forumtopicreopened",
      description:
        "This object represents a service message about a forum topic reopened in the chat. Currently holds no information.",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "Game",
      href: "https://core.telegram.org/bots/api#game",
      description:
        "This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.",
      fields: [
        {
          name: "title",
          type: "String",
          required: true,
          description: "Title of the game",
        },
        {
          name: "description",
          type: "String",
          required: true,
          description: "Description of the game",
        },
        {
          name: "photo",
          type: "Array of PhotoSize",
          required: true,
          description:
            "Photo that will be displayed in the game message in chats.",
        },
        {
          name: "text",
          type: "String",
          required: false,
          description:
            "Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.",
        },
        {
          name: "text_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc.",
        },
        {
          name: "animation",
          type: "Animation",
          required: false,
          description:
            "Optional. Animation that will be displayed in the game message in chats. Upload via BotFather",
        },
      ],
      example: {
        title: "Example title",
        description: "Example description",
        photo: [],
      },
      relatedTypes: ["Animation", "MessageEntity", "PhotoSize"],
      usedByMethods: [],
    },
    {
      name: "GameHighScore",
      href: "https://core.telegram.org/bots/api#gamehighscore",
      description:
        "This object represents one row of the high scores table for a game.",
      fields: [
        {
          name: "position",
          type: "Integer",
          required: true,
          description: "Position in high score table for the game",
        },
        {
          name: "user",
          type: "User",
          required: true,
          description: "User",
        },
        {
          name: "score",
          type: "Integer",
          required: true,
          description: "Score",
        },
      ],
      example: {
        position: 1,
        user: {},
        score: 1,
      },
      relatedTypes: ["User"],
      usedByMethods: ["getGameHighScores"],
    },
    {
      name: "GeneralForumTopicHidden",
      href: "https://core.telegram.org/bots/api#generalforumtopichidden",
      description:
        "This object represents a service message about General forum topic hidden in the chat. Currently holds no information.",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "GeneralForumTopicUnhidden",
      href: "https://core.telegram.org/bots/api#generalforumtopicunhidden",
      description:
        "This object represents a service message about General forum topic unhidden in the chat. Currently holds no information.",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "Gift",
      href: "https://core.telegram.org/bots/api#gift",
      description: "This object represents a gift that can be sent by the bot.",
      fields: [
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier of the gift",
        },
        {
          name: "sticker",
          type: "Sticker",
          required: true,
          description: "The sticker that represents the gift",
        },
        {
          name: "star_count",
          type: "Integer",
          required: true,
          description:
            "The number of Telegram Stars that must be paid to send the sticker",
        },
        {
          name: "upgrade_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of Telegram Stars that must be paid to upgrade the gift to a unique one",
        },
        {
          name: "is_premium",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift can only be purchased by Telegram Premium subscribers",
        },
        {
          name: "has_colors",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift can be used (after being upgraded) to customize a user's appearance",
        },
        {
          name: "total_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The total number of gifts of this type that can be sent by all users; for limited gifts only",
        },
        {
          name: "remaining_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of remaining gifts of this type that can be sent by all users; for limited gifts only",
        },
        {
          name: "personal_total_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The total number of gifts of this type that can be sent by the bot; for limited gifts only",
        },
        {
          name: "personal_remaining_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of remaining gifts of this type that can be sent by the bot; for limited gifts only",
        },
        {
          name: "background",
          type: "GiftBackground",
          required: false,
          description: "Optional. Background of the gift",
        },
        {
          name: "unique_gift_variant_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The total number of different unique gifts that can be obtained by upgrading the gift",
        },
        {
          name: "publisher_chat",
          type: "Chat",
          required: false,
          description:
            "Optional. Information about the chat that published the gift",
        },
      ],
      example: {
        id: "example",
        sticker: {},
        star_count: 1,
      },
      relatedTypes: ["Chat", "GiftBackground", "Sticker"],
      usedByMethods: [],
    },
    {
      name: "GiftBackground",
      href: "https://core.telegram.org/bots/api#giftbackground",
      description: "This object describes the background of a gift.",
      fields: [
        {
          name: "center_color",
          type: "Integer",
          required: true,
          description: "Center color of the background in RGB format",
        },
        {
          name: "edge_color",
          type: "Integer",
          required: true,
          description: "Edge color of the background in RGB format",
        },
        {
          name: "text_color",
          type: "Integer",
          required: true,
          description: "Text color of the background in RGB format",
        },
      ],
      example: {
        center_color: 1,
        edge_color: 1,
        text_color: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "GiftInfo",
      href: "https://core.telegram.org/bots/api#giftinfo",
      description:
        "Describes a service message about a regular gift that was sent or received.",
      fields: [
        {
          name: "gift",
          type: "Gift",
          required: true,
          description: "Information about the gift",
        },
        {
          name: "owned_gift_id",
          type: "String",
          required: false,
          description:
            "Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts",
        },
        {
          name: "convert_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. Number of Telegram Stars that can be claimed by the receiver by converting the gift; omitted if conversion to Telegram Stars is impossible",
        },
        {
          name: "prepaid_upgrade_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. Number of Telegram Stars that were prepaid for the ability to upgrade the gift",
        },
        {
          name: "is_upgrade_separate",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift's upgrade was purchased after the gift was sent",
        },
        {
          name: "can_be_upgraded",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift can be upgraded to a unique gift",
        },
        {
          name: "text",
          type: "String",
          required: false,
          description:
            "Optional. Text of the message that was added to the gift",
        },
        {
          name: "entities",
          type: "Array of MessageEntity",
          required: false,
          description: "Optional. Special entities that appear in the text",
        },
        {
          name: "is_private",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them",
        },
        {
          name: "unique_gift_number",
          type: "Integer",
          required: false,
          description:
            "Optional. Unique number reserved for this gift when upgraded. See the number field in UniqueGift",
        },
      ],
      example: {
        gift: {},
      },
      relatedTypes: ["Gift", "MessageEntity"],
      usedByMethods: [],
    },
    {
      name: "Gifts",
      href: "https://core.telegram.org/bots/api#gifts",
      description: "This object represent a list of gifts.",
      fields: [
        {
          name: "gifts",
          type: "Array of Gift",
          required: true,
          description: "The list of gifts",
        },
      ],
      example: {
        gifts: [],
      },
      relatedTypes: ["Gift"],
      usedByMethods: ["getAvailableGifts"],
    },
    {
      name: "Giveaway",
      href: "https://core.telegram.org/bots/api#giveaway",
      description:
        "This object represents a message about a scheduled giveaway.",
      fields: [
        {
          name: "chats",
          type: "Array of Chat",
          required: true,
          description:
            "The list of chats which the user must join to participate in the giveaway",
        },
        {
          name: "winners_selection_date",
          type: "Integer",
          required: true,
          description:
            "Point in time (Unix timestamp) when winners of the giveaway will be selected",
        },
        {
          name: "winner_count",
          type: "Integer",
          required: true,
          description:
            "The number of users which are supposed to be selected as winners of the giveaway",
        },
        {
          name: "only_new_members",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if only users who join the chats after the giveaway started should be eligible to win",
        },
        {
          name: "has_public_winners",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the list of giveaway winners will be visible to everyone",
        },
        {
          name: "prize_description",
          type: "String",
          required: false,
          description: "Optional. Description of additional giveaway prize",
        },
        {
          name: "country_codes",
          type: "Array of String",
          required: false,
          description:
            "Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways.",
        },
        {
          name: "prize_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only",
        },
        {
          name: "premium_subscription_month_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only",
        },
      ],
      example: {
        chats: [],
        winners_selection_date: 1,
        winner_count: 1,
      },
      relatedTypes: ["Chat"],
      usedByMethods: [],
    },
    {
      name: "GiveawayCompleted",
      href: "https://core.telegram.org/bots/api#giveawaycompleted",
      description:
        "This object represents a service message about the completion of a giveaway without public winners.",
      fields: [
        {
          name: "winner_count",
          type: "Integer",
          required: true,
          description: "Number of winners in the giveaway",
        },
        {
          name: "unclaimed_prize_count",
          type: "Integer",
          required: false,
          description: "Optional. Number of undistributed prizes",
        },
        {
          name: "giveaway_message",
          type: "Message",
          required: false,
          description:
            "Optional. Message with the giveaway that was completed, if it wasn't deleted",
        },
        {
          name: "is_star_giveaway",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway.",
        },
      ],
      example: {
        winner_count: 1,
      },
      relatedTypes: ["Message"],
      usedByMethods: [],
    },
    {
      name: "GiveawayCreated",
      href: "https://core.telegram.org/bots/api#giveawaycreated",
      description:
        "This object represents a service message about the creation of a scheduled giveaway.",
      fields: [
        {
          name: "prize_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only",
        },
      ],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "GiveawayWinners",
      href: "https://core.telegram.org/bots/api#giveawaywinners",
      description:
        "This object represents a message about the completion of a giveaway with public winners.",
      fields: [
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "The chat that created the giveaway",
        },
        {
          name: "giveaway_message_id",
          type: "Integer",
          required: true,
          description:
            "Identifier of the message with the giveaway in the chat",
        },
        {
          name: "winners_selection_date",
          type: "Integer",
          required: true,
          description:
            "Point in time (Unix timestamp) when winners of the giveaway were selected",
        },
        {
          name: "winner_count",
          type: "Integer",
          required: true,
          description: "Total number of winners in the giveaway",
        },
        {
          name: "winners",
          type: "Array of User",
          required: true,
          description: "List of up to 100 winners of the giveaway",
        },
        {
          name: "additional_chat_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of other chats the user had to join in order to be eligible for the giveaway",
        },
        {
          name: "prize_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only",
        },
        {
          name: "premium_subscription_month_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only",
        },
        {
          name: "unclaimed_prize_count",
          type: "Integer",
          required: false,
          description: "Optional. Number of undistributed prizes",
        },
        {
          name: "only_new_members",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if only users who had joined the chats after the giveaway started were eligible to win",
        },
        {
          name: "was_refunded",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the giveaway was canceled because the payment for it was refunded",
        },
        {
          name: "prize_description",
          type: "String",
          required: false,
          description: "Optional. Description of additional giveaway prize",
        },
      ],
      example: {
        chat: {},
        giveaway_message_id: 1,
        winners_selection_date: 1,
        winner_count: 1,
        winners: [],
      },
      relatedTypes: ["Chat", "User"],
      usedByMethods: [],
    },
    {
      name: "InaccessibleMessage",
      href: "https://core.telegram.org/bots/api#inaccessiblemessage",
      description:
        "This object describes a message that was deleted or is otherwise inaccessible to the bot.",
      fields: [
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "Chat the message belonged to",
        },
        {
          name: "message_id",
          type: "Integer",
          required: true,
          description: "Unique message identifier inside the chat",
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description:
            "Always 0. The field can be used to differentiate regular and inaccessible messages.",
        },
      ],
      example: {
        chat: {},
        message_id: 1,
        date: 1,
      },
      relatedTypes: ["Chat"],
      usedByMethods: [],
    },
    {
      name: "InlineKeyboardButton",
      href: "https://core.telegram.org/bots/api#inlinekeyboardbutton",
      description:
        "This object represents one button of an inline keyboard. Exactly one of the fields other than text, icon_custom_emoji_id, and style must be used to specify the type of the button.",
      fields: [
        {
          name: "text",
          type: "String",
          required: true,
          description: "Label text on the button",
        },
        {
          name: "icon_custom_emoji_id",
          type: "String",
          required: false,
          description:
            "Optional. Unique identifier of the custom emoji shown before the text of the button. Can only be used by bots that purchased additional usernames on Fragment or in the messages directly sent by the bot to private, group and supergroup chats if the owner of the bot has a Telegram Premium subscription.",
        },
        {
          name: "style",
          type: "String",
          required: false,
          description:
            'Optional. Style of the button. Must be one of "danger" (red), "success" (green) or "primary" (blue). If omitted, then an app-specific style is used.',
        },
        {
          name: "url",
          type: "String",
          required: false,
          description:
            "Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.",
        },
        {
          name: "callback_data",
          type: "String",
          required: false,
          description:
            "Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes",
        },
        {
          name: "web_app",
          type: "WebAppInfo",
          required: false,
          description:
            "Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account.",
        },
        {
          name: "login_url",
          type: "LoginUrl",
          required: false,
          description:
            "Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.",
        },
        {
          name: "switch_inline_query",
          type: "String",
          required: false,
          description:
            "Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent in channel direct messages chats and on behalf of a Telegram Business account.",
        },
        {
          name: "switch_inline_query_current_chat",
          type: "String",
          required: false,
          description:
            "Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted. This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent in channel direct messages chats and on behalf of a Telegram Business account.",
        },
        {
          name: "switch_inline_query_chosen_chat",
          type: "SwitchInlineQueryChosenChat",
          required: false,
          description:
            "Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent in channel direct messages chats and on behalf of a Telegram Business account.",
        },
        {
          name: "copy_text",
          type: "CopyTextButton",
          required: false,
          description:
            "Optional. Description of the button that copies the specified text to the clipboard.",
        },
        {
          name: "callback_game",
          type: "CallbackGame",
          required: false,
          description:
            "Optional. Description of the game that will be launched when the user presses the button. NOTE: This type of button must always be the first button in the first row.",
        },
        {
          name: "pay",
          type: "Boolean",
          required: false,
          description:
            'Optional. Specify True, to send a Pay button. Substrings "⭐" and "XTR" in the buttons\'s text will be replaced with a Telegram Star icon. NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.',
        },
      ],
      example: {
        text: "Hello from Telegram Bot API Tester",
      },
      relatedTypes: [
        "CallbackGame",
        "CopyTextButton",
        "LoginUrl",
        "SwitchInlineQueryChosenChat",
        "WebAppInfo",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineKeyboardMarkup",
      href: "https://core.telegram.org/bots/api#inlinekeyboardmarkup",
      description:
        "This object represents an inline keyboard that appears right next to the message it belongs to.",
      fields: [
        {
          name: "inline_keyboard",
          type: "Array of Array of InlineKeyboardButton",
          required: true,
          description:
            "Array of button rows, each represented by an Array of InlineKeyboardButton objects",
        },
      ],
      example: {
        inline_keyboard: [],
      },
      relatedTypes: [],
      usedByMethods: [
        "copyMessage",
        "editMessageCaption",
        "editMessageChecklist",
        "editMessageLiveLocation",
        "editMessageMedia",
        "editMessageReplyMarkup",
        "editMessageText",
        "sendAnimation",
        "sendAudio",
        "sendChecklist",
        "sendContact",
        "sendDice",
        "sendDocument",
        "sendGame",
        "sendInvoice",
        "sendLocation",
        "sendMessage",
        "sendPaidMedia",
        "sendPhoto",
        "sendPoll",
        "sendSticker",
        "sendVenue",
        "sendVideo",
        "sendVideoNote",
        "sendVoice",
        "stopMessageLiveLocation",
        "stopPoll",
      ],
    },
    {
      name: "InlineQuery",
      href: "https://core.telegram.org/bots/api#inlinequery",
      description:
        "This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.",
      fields: [
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this query",
        },
        {
          name: "from",
          type: "User",
          required: true,
          description: "Sender",
        },
        {
          name: "query",
          type: "String",
          required: true,
          description: "Text of the query (up to 256 characters)",
        },
        {
          name: "offset",
          type: "String",
          required: true,
          description:
            "Offset of the results to be returned, can be controlled by the bot",
        },
        {
          name: "chat_type",
          type: "String",
          required: false,
          description:
            'Optional. Type of the chat from which the inline query was sent. Can be either "sender" for a private chat with the inline query sender, "private", "group", "supergroup", or "channel". The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat',
        },
        {
          name: "location",
          type: "Location",
          required: false,
          description:
            "Optional. Sender location, only for bots that request user location",
        },
      ],
      example: {
        id: "example",
        from: {},
        query: "example",
        offset: "example",
      },
      relatedTypes: ["Location", "User"],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResult",
      href: "https://core.telegram.org/bots/api#inlinequeryresult",
      description:
        "This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:\n\n- InlineQueryResultCachedAudio\n\n- InlineQueryResultCachedDocument\n\n- InlineQueryResultCachedGif\n\n- InlineQueryResultCachedMpeg4Gif\n\n- InlineQueryResultCachedPhoto\n\n- InlineQueryResultCachedSticker\n\n- InlineQueryResultCachedVideo\n\n- InlineQueryResultCachedVoice\n\n- InlineQueryResultArticle\n\n- InlineQueryResultAudio\n\n- InlineQueryResultContact\n\n- InlineQueryResultGame\n\n- InlineQueryResultDocument\n\n- InlineQueryResultGif\n\n- InlineQueryResultLocation\n\n- InlineQueryResultMpeg4Gif\n\n- InlineQueryResultPhoto\n\n- InlineQueryResultVenue\n\n- InlineQueryResultVideo\n\n- InlineQueryResultVoice\n\nNote: All URLs passed in inline query results will be available to end users and therefore must be assumed to be public.",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [
        "answerInlineQuery",
        "answerWebAppQuery",
        "savePreparedInlineMessage",
      ],
    },
    {
      name: "InlineQueryResultArticle",
      href: "https://core.telegram.org/bots/api#inlinequeryresultarticle",
      description: "Represents a link to an article or web page.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be article",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 Bytes",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Title of the result",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: true,
          description: "Content of the message to be sent",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "url",
          type: "String",
          required: false,
          description: "Optional. URL of the result",
        },
        {
          name: "description",
          type: "String",
          required: false,
          description: "Optional. Short description of the result",
        },
        {
          name: "thumbnail_url",
          type: "String",
          required: false,
          description: "Optional. Url of the thumbnail for the result",
        },
        {
          name: "thumbnail_width",
          type: "Integer",
          required: false,
          description: "Optional. Thumbnail width",
        },
        {
          name: "thumbnail_height",
          type: "Integer",
          required: false,
          description: "Optional. Thumbnail height",
        },
      ],
      example: {
        type: "example",
        id: "example",
        title: "Example title",
        input_message_content: {},
      },
      relatedTypes: ["InlineKeyboardMarkup", "InputMessageContent"],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultAudio",
      href: "https://core.telegram.org/bots/api#inlinequeryresultaudio",
      description:
        "Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be audio",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "audio_url",
          type: "String",
          required: true,
          description: "A valid URL for the audio file",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Title",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the audio caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "performer",
          type: "String",
          required: false,
          description: "Optional. Performer",
        },
        {
          name: "audio_duration",
          type: "Integer",
          required: false,
          description: "Optional. Audio duration in seconds",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the audio",
        },
      ],
      example: {
        type: "example",
        id: "example",
        audio_url: "https://example.com",
        title: "Example title",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultCachedAudio",
      href: "https://core.telegram.org/bots/api#inlinequeryresultcachedaudio",
      description:
        "Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be audio",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "audio_file_id",
          type: "String",
          required: true,
          description: "A valid file identifier for the audio file",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the audio caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the audio",
        },
      ],
      example: {
        type: "example",
        id: "example",
        audio_file_id: "example",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultCachedDocument",
      href: "https://core.telegram.org/bots/api#inlinequeryresultcacheddocument",
      description:
        "Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be document",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Title for the result",
        },
        {
          name: "document_file_id",
          type: "String",
          required: true,
          description: "A valid file identifier for the file",
        },
        {
          name: "description",
          type: "String",
          required: false,
          description: "Optional. Short description of the result",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the document to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the document caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the file",
        },
      ],
      example: {
        type: "example",
        id: "example",
        title: "Example title",
        document_file_id: "example",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultCachedGif",
      href: "https://core.telegram.org/bots/api#inlinequeryresultcachedgif",
      description:
        "Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be gif",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "gif_file_id",
          type: "String",
          required: true,
          description: "A valid file identifier for the GIF file",
        },
        {
          name: "title",
          type: "String",
          required: false,
          description: "Optional. Title for the result",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True, if the caption must be shown above the message media",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the GIF animation",
        },
      ],
      example: {
        type: "example",
        id: "example",
        gif_file_id: "example",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultCachedMpeg4Gif",
      href: "https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif",
      description:
        "Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be mpeg4_gif",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "mpeg4_file_id",
          type: "String",
          required: true,
          description: "A valid file identifier for the MPEG4 file",
        },
        {
          name: "title",
          type: "String",
          required: false,
          description: "Optional. Title for the result",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True, if the caption must be shown above the message media",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the video animation",
        },
      ],
      example: {
        type: "example",
        id: "example",
        mpeg4_file_id: "example",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultCachedPhoto",
      href: "https://core.telegram.org/bots/api#inlinequeryresultcachedphoto",
      description:
        "Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be photo",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "photo_file_id",
          type: "String",
          required: true,
          description: "A valid file identifier of the photo",
        },
        {
          name: "title",
          type: "String",
          required: false,
          description: "Optional. Title for the result",
        },
        {
          name: "description",
          type: "String",
          required: false,
          description: "Optional. Short description of the result",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the photo caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True, if the caption must be shown above the message media",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the photo",
        },
      ],
      example: {
        type: "example",
        id: "example",
        photo_file_id: "C:/path/to/file",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultCachedSticker",
      href: "https://core.telegram.org/bots/api#inlinequeryresultcachedsticker",
      description:
        "Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be sticker",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "sticker_file_id",
          type: "String",
          required: true,
          description: "A valid file identifier of the sticker",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the sticker",
        },
      ],
      example: {
        type: "example",
        id: "example",
        sticker_file_id: "C:/path/to/file",
      },
      relatedTypes: ["InlineKeyboardMarkup", "InputMessageContent"],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultCachedVideo",
      href: "https://core.telegram.org/bots/api#inlinequeryresultcachedvideo",
      description:
        "Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be video",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "video_file_id",
          type: "String",
          required: true,
          description: "A valid file identifier for the video file",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Title for the result",
        },
        {
          name: "description",
          type: "String",
          required: false,
          description: "Optional. Short description of the result",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the video to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the video caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True, if the caption must be shown above the message media",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the video",
        },
      ],
      example: {
        type: "example",
        id: "example",
        video_file_id: "example",
        title: "Example title",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultCachedVoice",
      href: "https://core.telegram.org/bots/api#inlinequeryresultcachedvoice",
      description:
        "Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be voice",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "voice_file_id",
          type: "String",
          required: true,
          description: "A valid file identifier for the voice message",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Voice message title",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the voice message",
        },
      ],
      example: {
        type: "example",
        id: "example",
        voice_file_id: "example",
        title: "Example title",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultContact",
      href: "https://core.telegram.org/bots/api#inlinequeryresultcontact",
      description:
        "Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be contact",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 Bytes",
        },
        {
          name: "phone_number",
          type: "String",
          required: true,
          description: "Contact's phone number",
        },
        {
          name: "first_name",
          type: "String",
          required: true,
          description: "Contact's first name",
        },
        {
          name: "last_name",
          type: "String",
          required: false,
          description: "Optional. Contact's last name",
        },
        {
          name: "vcard",
          type: "String",
          required: false,
          description:
            "Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the contact",
        },
        {
          name: "thumbnail_url",
          type: "String",
          required: false,
          description: "Optional. Url of the thumbnail for the result",
        },
        {
          name: "thumbnail_width",
          type: "Integer",
          required: false,
          description: "Optional. Thumbnail width",
        },
        {
          name: "thumbnail_height",
          type: "Integer",
          required: false,
          description: "Optional. Thumbnail height",
        },
      ],
      example: {
        type: "example",
        id: "example",
        phone_number: "+10000000000",
        first_name: "example",
      },
      relatedTypes: ["InlineKeyboardMarkup", "InputMessageContent"],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultDocument",
      href: "https://core.telegram.org/bots/api#inlinequeryresultdocument",
      description:
        "Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be document",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Title for the result",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the document to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the document caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "document_url",
          type: "String",
          required: true,
          description: "A valid URL for the file",
        },
        {
          name: "mime_type",
          type: "String",
          required: true,
          description:
            'MIME type of the content of the file, either "application/pdf" or "application/zip"',
        },
        {
          name: "description",
          type: "String",
          required: false,
          description: "Optional. Short description of the result",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the file",
        },
        {
          name: "thumbnail_url",
          type: "String",
          required: false,
          description:
            "Optional. URL of the thumbnail (JPEG only) for the file",
        },
        {
          name: "thumbnail_width",
          type: "Integer",
          required: false,
          description: "Optional. Thumbnail width",
        },
        {
          name: "thumbnail_height",
          type: "Integer",
          required: false,
          description: "Optional. Thumbnail height",
        },
      ],
      example: {
        type: "example",
        id: "example",
        title: "Example title",
        document_url: "https://example.com",
        mime_type: "example",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultGame",
      href: "https://core.telegram.org/bots/api#inlinequeryresultgame",
      description: "Represents a Game.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be game",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "game_short_name",
          type: "String",
          required: true,
          description: "Short name of the game",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
      ],
      example: {
        type: "example",
        id: "example",
        game_short_name: "example",
      },
      relatedTypes: ["InlineKeyboardMarkup"],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultGif",
      href: "https://core.telegram.org/bots/api#inlinequeryresultgif",
      description:
        "Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be gif",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "gif_url",
          type: "String",
          required: true,
          description: "A valid URL for the GIF file",
        },
        {
          name: "gif_width",
          type: "Integer",
          required: false,
          description: "Optional. Width of the GIF",
        },
        {
          name: "gif_height",
          type: "Integer",
          required: false,
          description: "Optional. Height of the GIF",
        },
        {
          name: "gif_duration",
          type: "Integer",
          required: false,
          description: "Optional. Duration of the GIF in seconds",
        },
        {
          name: "thumbnail_url",
          type: "String",
          required: true,
          description:
            "URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result",
        },
        {
          name: "thumbnail_mime_type",
          type: "String",
          required: false,
          description:
            'Optional. MIME type of the thumbnail, must be one of "image/jpeg", "image/gif", or "video/mp4". Defaults to "image/jpeg"',
        },
        {
          name: "title",
          type: "String",
          required: false,
          description: "Optional. Title for the result",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True, if the caption must be shown above the message media",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the GIF animation",
        },
      ],
      example: {
        type: "example",
        id: "example",
        gif_url: "https://example.com",
        thumbnail_url: "https://example.com",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultLocation",
      href: "https://core.telegram.org/bots/api#inlinequeryresultlocation",
      description:
        "Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be location",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 Bytes",
        },
        {
          name: "latitude",
          type: "Float",
          required: true,
          description: "Location latitude in degrees",
        },
        {
          name: "longitude",
          type: "Float",
          required: true,
          description: "Location longitude in degrees",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Location title",
        },
        {
          name: "horizontal_accuracy",
          type: "Float",
          required: false,
          description:
            "Optional. The radius of uncertainty for the location, measured in meters; 0-1500",
        },
        {
          name: "live_period",
          type: "Integer",
          required: false,
          description:
            "Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.",
        },
        {
          name: "heading",
          type: "Integer",
          required: false,
          description:
            "Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.",
        },
        {
          name: "proximity_alert_radius",
          type: "Integer",
          required: false,
          description:
            "Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the location",
        },
        {
          name: "thumbnail_url",
          type: "String",
          required: false,
          description: "Optional. Url of the thumbnail for the result",
        },
        {
          name: "thumbnail_width",
          type: "Integer",
          required: false,
          description: "Optional. Thumbnail width",
        },
        {
          name: "thumbnail_height",
          type: "Integer",
          required: false,
          description: "Optional. Thumbnail height",
        },
      ],
      example: {
        type: "example",
        id: "example",
        latitude: 37.7749,
        longitude: -122.4194,
        title: "Example title",
      },
      relatedTypes: ["InlineKeyboardMarkup", "InputMessageContent"],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultMpeg4Gif",
      href: "https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif",
      description:
        "Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be mpeg4_gif",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "mpeg4_url",
          type: "String",
          required: true,
          description: "A valid URL for the MPEG4 file",
        },
        {
          name: "mpeg4_width",
          type: "Integer",
          required: false,
          description: "Optional. Video width",
        },
        {
          name: "mpeg4_height",
          type: "Integer",
          required: false,
          description: "Optional. Video height",
        },
        {
          name: "mpeg4_duration",
          type: "Integer",
          required: false,
          description: "Optional. Video duration in seconds",
        },
        {
          name: "thumbnail_url",
          type: "String",
          required: true,
          description:
            "URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result",
        },
        {
          name: "thumbnail_mime_type",
          type: "String",
          required: false,
          description:
            'Optional. MIME type of the thumbnail, must be one of "image/jpeg", "image/gif", or "video/mp4". Defaults to "image/jpeg"',
        },
        {
          name: "title",
          type: "String",
          required: false,
          description: "Optional. Title for the result",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True, if the caption must be shown above the message media",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the video animation",
        },
      ],
      example: {
        type: "example",
        id: "example",
        mpeg4_url: "https://example.com",
        thumbnail_url: "https://example.com",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultPhoto",
      href: "https://core.telegram.org/bots/api#inlinequeryresultphoto",
      description:
        "Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be photo",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "photo_url",
          type: "String",
          required: true,
          description:
            "A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB",
        },
        {
          name: "thumbnail_url",
          type: "String",
          required: true,
          description: "URL of the thumbnail for the photo",
        },
        {
          name: "photo_width",
          type: "Integer",
          required: false,
          description: "Optional. Width of the photo",
        },
        {
          name: "photo_height",
          type: "Integer",
          required: false,
          description: "Optional. Height of the photo",
        },
        {
          name: "title",
          type: "String",
          required: false,
          description: "Optional. Title for the result",
        },
        {
          name: "description",
          type: "String",
          required: false,
          description: "Optional. Short description of the result",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the photo caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True, if the caption must be shown above the message media",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the photo",
        },
      ],
      example: {
        type: "example",
        id: "example",
        photo_url: "https://example.com",
        thumbnail_url: "https://example.com",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultsButton",
      href: "https://core.telegram.org/bots/api#inlinequeryresultsbutton",
      description:
        "This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.",
      fields: [
        {
          name: "text",
          type: "String",
          required: true,
          description: "Label text on the button",
        },
        {
          name: "web_app",
          type: "WebAppInfo",
          required: false,
          description:
            "Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App.",
        },
        {
          name: "start_parameter",
          type: "String",
          required: false,
          description:
            "Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed. Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.",
        },
      ],
      example: {
        text: "Hello from Telegram Bot API Tester",
      },
      relatedTypes: ["WebAppInfo"],
      usedByMethods: ["answerInlineQuery"],
    },
    {
      name: "InlineQueryResultVenue",
      href: "https://core.telegram.org/bots/api#inlinequeryresultvenue",
      description:
        "Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be venue",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 Bytes",
        },
        {
          name: "latitude",
          type: "Float",
          required: true,
          description: "Latitude of the venue location in degrees",
        },
        {
          name: "longitude",
          type: "Float",
          required: true,
          description: "Longitude of the venue location in degrees",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Title of the venue",
        },
        {
          name: "address",
          type: "String",
          required: true,
          description: "Address of the venue",
        },
        {
          name: "foursquare_id",
          type: "String",
          required: false,
          description: "Optional. Foursquare identifier of the venue if known",
        },
        {
          name: "foursquare_type",
          type: "String",
          required: false,
          description:
            'Optional. Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)',
        },
        {
          name: "google_place_id",
          type: "String",
          required: false,
          description: "Optional. Google Places identifier of the venue",
        },
        {
          name: "google_place_type",
          type: "String",
          required: false,
          description:
            "Optional. Google Places type of the venue. (See supported types.)",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the venue",
        },
        {
          name: "thumbnail_url",
          type: "String",
          required: false,
          description: "Optional. Url of the thumbnail for the result",
        },
        {
          name: "thumbnail_width",
          type: "Integer",
          required: false,
          description: "Optional. Thumbnail width",
        },
        {
          name: "thumbnail_height",
          type: "Integer",
          required: false,
          description: "Optional. Thumbnail height",
        },
      ],
      example: {
        type: "example",
        id: "example",
        latitude: 37.7749,
        longitude: -122.4194,
        title: "Example title",
        address: "example",
      },
      relatedTypes: ["InlineKeyboardMarkup", "InputMessageContent"],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultVideo",
      href: "https://core.telegram.org/bots/api#inlinequeryresultvideo",
      description:
        "Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be video",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "video_url",
          type: "String",
          required: true,
          description:
            "A valid URL for the embedded video player or video file",
        },
        {
          name: "mime_type",
          type: "String",
          required: true,
          description:
            'MIME type of the content of the video URL, "text/html" or "video/mp4"',
        },
        {
          name: "thumbnail_url",
          type: "String",
          required: true,
          description: "URL of the thumbnail (JPEG only) for the video",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Title for the result",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the video to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the video caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True, if the caption must be shown above the message media",
        },
        {
          name: "video_width",
          type: "Integer",
          required: false,
          description: "Optional. Video width",
        },
        {
          name: "video_height",
          type: "Integer",
          required: false,
          description: "Optional. Video height",
        },
        {
          name: "video_duration",
          type: "Integer",
          required: false,
          description: "Optional. Video duration in seconds",
        },
        {
          name: "description",
          type: "String",
          required: false,
          description: "Optional. Short description of the result",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).",
        },
      ],
      example: {
        type: "example",
        id: "example",
        video_url: "https://example.com",
        mime_type: "example",
        thumbnail_url: "https://example.com",
        title: "Example title",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InlineQueryResultVoice",
      href: "https://core.telegram.org/bots/api#inlinequeryresultvoice",
      description:
        "Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be voice",
        },
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier for this result, 1-64 bytes",
        },
        {
          name: "voice_url",
          type: "String",
          required: true,
          description: "A valid URL for the voice recording",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Recording title",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "voice_duration",
          type: "Integer",
          required: false,
          description: "Optional. Recording duration in seconds",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description: "Optional. Inline keyboard attached to the message",
        },
        {
          name: "input_message_content",
          type: "InputMessageContent",
          required: false,
          description:
            "Optional. Content of the message to be sent instead of the voice recording",
        },
      ],
      example: {
        type: "example",
        id: "example",
        voice_url: "https://example.com",
        title: "Example title",
      },
      relatedTypes: [
        "InlineKeyboardMarkup",
        "InputMessageContent",
        "MessageEntity",
      ],
      usedByMethods: [],
    },
    {
      name: "InputChecklist",
      href: "https://core.telegram.org/bots/api#inputchecklist",
      description: "Describes a checklist to create.",
      fields: [
        {
          name: "title",
          type: "String",
          required: true,
          description:
            "Title of the checklist; 1-255 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the title. See formatting options for more details.",
        },
        {
          name: "title_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the title, which can be specified instead of parse_mode. Currently, only bold, italic, underline, strikethrough, spoiler, custom_emoji, and date_time entities are allowed.",
        },
        {
          name: "tasks",
          type: "Array of InputChecklistTask",
          required: true,
          description: "List of 1-30 tasks in the checklist",
        },
        {
          name: "others_can_add_tasks",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if other users can add tasks to the checklist",
        },
        {
          name: "others_can_mark_tasks_as_done",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if other users can mark tasks as done or not done in the checklist",
        },
      ],
      example: {
        title: "Example title",
        tasks: [],
      },
      relatedTypes: ["InputChecklistTask", "MessageEntity"],
      usedByMethods: ["editMessageChecklist", "sendChecklist"],
    },
    {
      name: "InputChecklistTask",
      href: "https://core.telegram.org/bots/api#inputchecklisttask",
      description: "Describes a task to add to a checklist.",
      fields: [
        {
          name: "id",
          type: "Integer",
          required: true,
          description:
            "Unique identifier of the task; must be positive and unique among all task identifiers currently present in the checklist",
        },
        {
          name: "text",
          type: "String",
          required: true,
          description:
            "Text of the task; 1-100 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the text. See formatting options for more details.",
        },
        {
          name: "text_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the text, which can be specified instead of parse_mode. Currently, only bold, italic, underline, strikethrough, spoiler, custom_emoji, and date_time entities are allowed.",
        },
      ],
      example: {
        id: 1,
        text: "Hello from Telegram Bot API Tester",
      },
      relatedTypes: ["MessageEntity"],
      usedByMethods: [],
    },
    {
      name: "InputContactMessageContent",
      href: "https://core.telegram.org/bots/api#inputcontactmessagecontent",
      description:
        "Represents the content of a contact message to be sent as the result of an inline query.",
      fields: [
        {
          name: "phone_number",
          type: "String",
          required: true,
          description: "Contact's phone number",
        },
        {
          name: "first_name",
          type: "String",
          required: true,
          description: "Contact's first name",
        },
        {
          name: "last_name",
          type: "String",
          required: false,
          description: "Optional. Contact's last name",
        },
        {
          name: "vcard",
          type: "String",
          required: false,
          description:
            "Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes",
        },
      ],
      example: {
        phone_number: "+10000000000",
        first_name: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "InputFile",
      href: "https://core.telegram.org/bots/api#inputfile",
      description:
        "This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [
        "sendAnimation",
        "sendAudio",
        "sendDocument",
        "sendPhoto",
        "sendSticker",
        "sendVideo",
        "sendVideoNote",
        "sendVoice",
        "setChatPhoto",
        "setStickerSetThumbnail",
        "setWebhook",
        "uploadStickerFile",
      ],
    },
    {
      name: "InputInvoiceMessageContent",
      href: "https://core.telegram.org/bots/api#inputinvoicemessagecontent",
      description:
        "Represents the content of an invoice message to be sent as the result of an inline query.",
      fields: [
        {
          name: "title",
          type: "String",
          required: true,
          description: "Product name, 1-32 characters",
        },
        {
          name: "description",
          type: "String",
          required: true,
          description: "Product description, 1-255 characters",
        },
        {
          name: "payload",
          type: "String",
          required: true,
          description:
            "Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.",
        },
        {
          name: "provider_token",
          type: "String",
          required: false,
          description:
            "Optional. Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.",
        },
        {
          name: "currency",
          type: "String",
          required: true,
          description:
            'Three-letter ISO 4217 currency code, see more on currencies. Pass "XTR" for payments in Telegram Stars.',
        },
        {
          name: "prices",
          type: "Array of LabeledPrice",
          required: true,
          description:
            "Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.",
        },
        {
          name: "max_tip_amount",
          type: "Integer",
          required: false,
          description:
            "Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.",
        },
        {
          name: "suggested_tip_amounts",
          type: "Array of Integer",
          required: false,
          description:
            "Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.",
        },
        {
          name: "provider_data",
          type: "String",
          required: false,
          description:
            "Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.",
        },
        {
          name: "photo_url",
          type: "String",
          required: false,
          description:
            "Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.",
        },
        {
          name: "photo_size",
          type: "Integer",
          required: false,
          description: "Optional. Photo size in bytes",
        },
        {
          name: "photo_width",
          type: "Integer",
          required: false,
          description: "Optional. Photo width",
        },
        {
          name: "photo_height",
          type: "Integer",
          required: false,
          description: "Optional. Photo height",
        },
        {
          name: "need_name",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.",
        },
        {
          name: "need_phone_number",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.",
        },
        {
          name: "need_email",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.",
        },
        {
          name: "need_shipping_address",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.",
        },
        {
          name: "send_phone_number_to_provider",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.",
        },
        {
          name: "send_email_to_provider",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.",
        },
        {
          name: "is_flexible",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.",
        },
      ],
      example: {
        title: "Example title",
        description: "Example description",
        payload: "example",
        currency: "example",
        prices: [],
      },
      relatedTypes: ["LabeledPrice"],
      usedByMethods: [],
    },
    {
      name: "InputLocationMessageContent",
      href: "https://core.telegram.org/bots/api#inputlocationmessagecontent",
      description:
        "Represents the content of a location message to be sent as the result of an inline query.",
      fields: [
        {
          name: "latitude",
          type: "Float",
          required: true,
          description: "Latitude of the location in degrees",
        },
        {
          name: "longitude",
          type: "Float",
          required: true,
          description: "Longitude of the location in degrees",
        },
        {
          name: "horizontal_accuracy",
          type: "Float",
          required: false,
          description:
            "Optional. The radius of uncertainty for the location, measured in meters; 0-1500",
        },
        {
          name: "live_period",
          type: "Integer",
          required: false,
          description:
            "Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.",
        },
        {
          name: "heading",
          type: "Integer",
          required: false,
          description:
            "Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.",
        },
        {
          name: "proximity_alert_radius",
          type: "Integer",
          required: false,
          description:
            "Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.",
        },
      ],
      example: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "InputMedia",
      href: "https://core.telegram.org/bots/api#inputmedia",
      description:
        "This object represents the content of a media message to be sent. It should be one of\n\n- InputMediaAnimation\n\n- InputMediaDocument\n\n- InputMediaAudio\n\n- InputMediaPhoto\n\n- InputMediaVideo",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: ["editMessageMedia"],
    },
    {
      name: "InputMediaAnimation",
      href: "https://core.telegram.org/bots/api#inputmediaanimation",
      description:
        "Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be animation",
        },
        {
          name: "media",
          type: "String",
          required: true,
          description:
            'File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
        {
          name: "thumbnail",
          type: "String",
          required: false,
          description:
            "Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the animation caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True, if the caption must be shown above the message media",
        },
        {
          name: "width",
          type: "Integer",
          required: false,
          description: "Optional. Animation width",
        },
        {
          name: "height",
          type: "Integer",
          required: false,
          description: "Optional. Animation height",
        },
        {
          name: "duration",
          type: "Integer",
          required: false,
          description: "Optional. Animation duration in seconds",
        },
        {
          name: "has_spoiler",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if the animation needs to be covered with a spoiler animation",
        },
      ],
      example: {
        type: "example",
        media: "example",
      },
      relatedTypes: ["MessageEntity"],
      usedByMethods: [],
    },
    {
      name: "InputMediaAudio",
      href: "https://core.telegram.org/bots/api#inputmediaaudio",
      description:
        "Represents an audio file to be treated as music to be sent.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be audio",
        },
        {
          name: "media",
          type: "String",
          required: true,
          description:
            'File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
        {
          name: "thumbnail",
          type: "String",
          required: false,
          description:
            "Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the audio caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "duration",
          type: "Integer",
          required: false,
          description: "Optional. Duration of the audio in seconds",
        },
        {
          name: "performer",
          type: "String",
          required: false,
          description: "Optional. Performer of the audio",
        },
        {
          name: "title",
          type: "String",
          required: false,
          description: "Optional. Title of the audio",
        },
      ],
      example: {
        type: "example",
        media: "example",
      },
      relatedTypes: ["MessageEntity"],
      usedByMethods: ["sendMediaGroup"],
    },
    {
      name: "InputMediaDocument",
      href: "https://core.telegram.org/bots/api#inputmediadocument",
      description: "Represents a general file to be sent.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be document",
        },
        {
          name: "media",
          type: "String",
          required: true,
          description:
            'File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
        {
          name: "thumbnail",
          type: "String",
          required: false,
          description:
            "Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the document to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the document caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "disable_content_type_detection",
          type: "Boolean",
          required: false,
          description:
            "Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album.",
        },
      ],
      example: {
        type: "example",
        media: "example",
      },
      relatedTypes: ["MessageEntity"],
      usedByMethods: ["sendMediaGroup"],
    },
    {
      name: "InputMediaPhoto",
      href: "https://core.telegram.org/bots/api#inputmediaphoto",
      description: "Represents a photo to be sent.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be photo",
        },
        {
          name: "media",
          type: "String",
          required: true,
          description:
            'File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the photo caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True, if the caption must be shown above the message media",
        },
        {
          name: "has_spoiler",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if the photo needs to be covered with a spoiler animation",
        },
      ],
      example: {
        type: "example",
        media: "example",
      },
      relatedTypes: ["MessageEntity"],
      usedByMethods: ["sendMediaGroup"],
    },
    {
      name: "InputMediaVideo",
      href: "https://core.telegram.org/bots/api#inputmediavideo",
      description: "Represents a video to be sent.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the result, must be video",
        },
        {
          name: "media",
          type: "String",
          required: true,
          description:
            'File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
        {
          name: "thumbnail",
          type: "String",
          required: false,
          description:
            "Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files",
        },
        {
          name: "cover",
          type: "String",
          required: false,
          description:
            'Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
        {
          name: "start_timestamp",
          type: "Integer",
          required: false,
          description: "Optional. Start timestamp for the video in the message",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption of the video to be sent, 0-1024 characters after entities parsing",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the video caption. See formatting options for more details.",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True, if the caption must be shown above the message media",
        },
        {
          name: "width",
          type: "Integer",
          required: false,
          description: "Optional. Video width",
        },
        {
          name: "height",
          type: "Integer",
          required: false,
          description: "Optional. Video height",
        },
        {
          name: "duration",
          type: "Integer",
          required: false,
          description: "Optional. Video duration in seconds",
        },
        {
          name: "supports_streaming",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if the uploaded video is suitable for streaming",
        },
        {
          name: "has_spoiler",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if the video needs to be covered with a spoiler animation",
        },
      ],
      example: {
        type: "example",
        media: "example",
      },
      relatedTypes: ["MessageEntity"],
      usedByMethods: ["sendMediaGroup"],
    },
    {
      name: "InputMessageContent",
      href: "https://core.telegram.org/bots/api#inputmessagecontent",
      description:
        "This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types:\n\n- InputTextMessageContent\n\n- InputLocationMessageContent\n\n- InputVenueMessageContent\n\n- InputContactMessageContent\n\n- InputInvoiceMessageContent",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "InputPaidMedia",
      href: "https://core.telegram.org/bots/api#inputpaidmedia",
      description:
        "This object describes the paid media to be sent. Currently, it can be one of\n\n- InputPaidMediaPhoto\n\n- InputPaidMediaVideo",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: ["sendPaidMedia"],
    },
    {
      name: "InputPaidMediaPhoto",
      href: "https://core.telegram.org/bots/api#inputpaidmediaphoto",
      description: "The paid media to send is a photo.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the media, must be photo",
        },
        {
          name: "media",
          type: "String",
          required: true,
          description:
            'File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
      ],
      example: {
        type: "example",
        media: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "InputPaidMediaVideo",
      href: "https://core.telegram.org/bots/api#inputpaidmediavideo",
      description: "The paid media to send is a video.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the media, must be video",
        },
        {
          name: "media",
          type: "String",
          required: true,
          description:
            'File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
        {
          name: "thumbnail",
          type: "String",
          required: false,
          description:
            "Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files",
        },
        {
          name: "cover",
          type: "String",
          required: false,
          description:
            'Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
        {
          name: "start_timestamp",
          type: "Integer",
          required: false,
          description: "Optional. Start timestamp for the video in the message",
        },
        {
          name: "width",
          type: "Integer",
          required: false,
          description: "Optional. Video width",
        },
        {
          name: "height",
          type: "Integer",
          required: false,
          description: "Optional. Video height",
        },
        {
          name: "duration",
          type: "Integer",
          required: false,
          description: "Optional. Video duration in seconds",
        },
        {
          name: "supports_streaming",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if the uploaded video is suitable for streaming",
        },
      ],
      example: {
        type: "example",
        media: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "InputPollOption",
      href: "https://core.telegram.org/bots/api#inputpolloption",
      description:
        "This object contains information about one answer option in a poll to be sent.",
      fields: [
        {
          name: "text",
          type: "String",
          required: true,
          description: "Option text, 1-100 characters",
        },
        {
          name: "text_parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed",
        },
        {
          name: "text_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. A JSON-serialized list of special entities that appear in the poll option text. It can be specified instead of text_parse_mode",
        },
      ],
      example: {
        text: "Hello from Telegram Bot API Tester",
      },
      relatedTypes: ["MessageEntity"],
      usedByMethods: ["sendPoll"],
    },
    {
      name: "InputProfilePhoto",
      href: "https://core.telegram.org/bots/api#inputprofilephoto",
      description:
        "This object describes a profile photo to set. Currently, it can be one of\n\n- InputProfilePhotoStatic\n\n- InputProfilePhotoAnimated",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: ["setBusinessAccountProfilePhoto", "setMyProfilePhoto"],
    },
    {
      name: "InputProfilePhotoAnimated",
      href: "https://core.telegram.org/bots/api#inputprofilephotoanimated",
      description: "An animated profile photo in the MPEG4 format.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the profile photo, must be animated",
        },
        {
          name: "animation",
          type: "String",
          required: true,
          description:
            'The animated profile photo. Profile photos can\'t be reused and can only be uploaded as a new file, so you can pass "attach://<file_attach_name>" if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
        {
          name: "main_frame_timestamp",
          type: "Float",
          required: false,
          description:
            "Optional. Timestamp in seconds of the frame that will be used as the static profile photo. Defaults to 0.0.",
        },
      ],
      example: {
        type: "example",
        animation: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "InputProfilePhotoStatic",
      href: "https://core.telegram.org/bots/api#inputprofilephotostatic",
      description: "A static profile photo in the .JPG format.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the profile photo, must be static",
        },
        {
          name: "photo",
          type: "String",
          required: true,
          description:
            'The static profile photo. Profile photos can\'t be reused and can only be uploaded as a new file, so you can pass "attach://<file_attach_name>" if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
      ],
      example: {
        type: "example",
        photo: "C:/path/to/file",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "InputSticker",
      href: "https://core.telegram.org/bots/api#inputsticker",
      description:
        "This object describes a sticker to be added to a sticker set.",
      fields: [
        {
          name: "sticker",
          type: "String",
          required: true,
          description:
            'The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new file using multipart/form-data under <file_attach_name> name. Animated and video stickers can\'t be uploaded via HTTP URL. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
        {
          name: "format",
          type: "String",
          required: true,
          description:
            'Format of the added sticker, must be one of "static" for a .WEBP or .PNG image, "animated" for a .TGS animation, "video" for a .WEBM video',
        },
        {
          name: "emoji_list",
          type: "Array of String",
          required: true,
          description: "List of 1-20 emoji associated with the sticker",
        },
        {
          name: "mask_position",
          type: "MaskPosition",
          required: false,
          description:
            'Optional. Position where the mask should be placed on faces. For "mask" stickers only.',
        },
        {
          name: "keywords",
          type: "Array of String",
          required: false,
          description:
            'Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For "regular" and "custom_emoji" stickers only.',
        },
      ],
      example: {
        sticker: "C:/path/to/file",
        format: "example",
        emoji_list: [],
      },
      relatedTypes: ["MaskPosition"],
      usedByMethods: [
        "addStickerToSet",
        "createNewStickerSet",
        "replaceStickerInSet",
      ],
    },
    {
      name: "InputStoryContent",
      href: "https://core.telegram.org/bots/api#inputstorycontent",
      description:
        "This object describes the content of a story to post. Currently, it can be one of\n\n- InputStoryContentPhoto\n\n- InputStoryContentVideo",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: ["editStory", "postStory"],
    },
    {
      name: "InputStoryContentPhoto",
      href: "https://core.telegram.org/bots/api#inputstorycontentphoto",
      description: "Describes a photo to post as a story.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the content, must be photo",
        },
        {
          name: "photo",
          type: "String",
          required: true,
          description:
            'The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can\'t be reused and can only be uploaded as a new file, so you can pass "attach://<file_attach_name>" if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
      ],
      example: {
        type: "example",
        photo: "C:/path/to/file",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "InputStoryContentVideo",
      href: "https://core.telegram.org/bots/api#inputstorycontentvideo",
      description: "Describes a video to post as a story.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the content, must be video",
        },
        {
          name: "video",
          type: "String",
          required: true,
          description:
            'The video to post as a story. The video must be of the size 720x1280, streamable, encoded with H.265 codec, with key frames added each second in the MPEG4 format, and must not exceed 30 MB. The video can\'t be reused and can only be uploaded as a new file, so you can pass "attach://<file_attach_name>" if the video was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
        },
        {
          name: "duration",
          type: "Float",
          required: false,
          description:
            "Optional. Precise duration of the video in seconds; 0-60",
        },
        {
          name: "cover_frame_timestamp",
          type: "Float",
          required: false,
          description:
            "Optional. Timestamp in seconds of the frame that will be used as the static cover for the story. Defaults to 0.0.",
        },
        {
          name: "is_animation",
          type: "Boolean",
          required: false,
          description: "Optional. Pass True if the video has no sound",
        },
      ],
      example: {
        type: "example",
        video: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "InputTextMessageContent",
      href: "https://core.telegram.org/bots/api#inputtextmessagecontent",
      description:
        "Represents the content of a text message to be sent as the result of an inline query.",
      fields: [
        {
          name: "message_text",
          type: "String",
          required: true,
          description: "Text of the message to be sent, 1-4096 characters",
        },
        {
          name: "parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the message text. See formatting options for more details.",
        },
        {
          name: "entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. List of special entities that appear in message text, which can be specified instead of parse_mode",
        },
        {
          name: "link_preview_options",
          type: "LinkPreviewOptions",
          required: false,
          description:
            "Optional. Link preview generation options for the message",
        },
      ],
      example: {
        message_text: "Hello from Telegram Bot API Tester",
      },
      relatedTypes: ["LinkPreviewOptions", "MessageEntity"],
      usedByMethods: [],
    },
    {
      name: "InputVenueMessageContent",
      href: "https://core.telegram.org/bots/api#inputvenuemessagecontent",
      description:
        "Represents the content of a venue message to be sent as the result of an inline query.",
      fields: [
        {
          name: "latitude",
          type: "Float",
          required: true,
          description: "Latitude of the venue in degrees",
        },
        {
          name: "longitude",
          type: "Float",
          required: true,
          description: "Longitude of the venue in degrees",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Name of the venue",
        },
        {
          name: "address",
          type: "String",
          required: true,
          description: "Address of the venue",
        },
        {
          name: "foursquare_id",
          type: "String",
          required: false,
          description: "Optional. Foursquare identifier of the venue, if known",
        },
        {
          name: "foursquare_type",
          type: "String",
          required: false,
          description:
            'Optional. Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)',
        },
        {
          name: "google_place_id",
          type: "String",
          required: false,
          description: "Optional. Google Places identifier of the venue",
        },
        {
          name: "google_place_type",
          type: "String",
          required: false,
          description:
            "Optional. Google Places type of the venue. (See supported types.)",
        },
      ],
      example: {
        latitude: 37.7749,
        longitude: -122.4194,
        title: "Example title",
        address: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "Invoice",
      href: "https://core.telegram.org/bots/api#invoice",
      description: "This object contains basic information about an invoice.",
      fields: [
        {
          name: "title",
          type: "String",
          required: true,
          description: "Product name",
        },
        {
          name: "description",
          type: "String",
          required: true,
          description: "Product description",
        },
        {
          name: "start_parameter",
          type: "String",
          required: true,
          description:
            "Unique bot deep-linking parameter that can be used to generate this invoice",
        },
        {
          name: "currency",
          type: "String",
          required: true,
          description:
            'Three-letter ISO 4217 currency code, or "XTR" for payments in Telegram Stars',
        },
        {
          name: "total_amount",
          type: "Integer",
          required: true,
          description:
            "Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).",
        },
      ],
      example: {
        title: "Example title",
        description: "Example description",
        start_parameter: "example",
        currency: "example",
        total_amount: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "KeyboardButton",
      href: "https://core.telegram.org/bots/api#keyboardbutton",
      description:
        "This object represents one button of the reply keyboard. At most one of the fields other than text, icon_custom_emoji_id, and style must be used to specify the type of the button. For simple text buttons, String can be used instead of this object to specify the button text.",
      fields: [
        {
          name: "text",
          type: "String",
          required: true,
          description:
            "Text of the button. If none of the fields other than text, icon_custom_emoji_id, and style are used, it will be sent as a message when the button is pressed",
        },
        {
          name: "icon_custom_emoji_id",
          type: "String",
          required: false,
          description:
            "Optional. Unique identifier of the custom emoji shown before the text of the button. Can only be used by bots that purchased additional usernames on Fragment or in the messages directly sent by the bot to private, group and supergroup chats if the owner of the bot has a Telegram Premium subscription.",
        },
        {
          name: "style",
          type: "String",
          required: false,
          description:
            'Optional. Style of the button. Must be one of "danger" (red), "success" (green) or "primary" (blue). If omitted, then an app-specific style is used.',
        },
        {
          name: "request_users",
          type: "KeyboardButtonRequestUsers",
          required: false,
          description:
            'Optional. If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a "users_shared" service message. Available in private chats only.',
        },
        {
          name: "request_chat",
          type: "KeyboardButtonRequestChat",
          required: false,
          description:
            'Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a "chat_shared" service message. Available in private chats only.',
        },
        {
          name: "request_managed_bot",
          type: "KeyboardButtonRequestManagedBot",
          required: false,
          description:
            "Optional. If specified, pressing the button will ask the user to create and share a bot that will be managed by the current bot. Available for bots that enabled management of other bots in the @BotFather Mini App. Available in private chats only.",
        },
        {
          name: "request_contact",
          type: "Boolean",
          required: false,
          description:
            "Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only.",
        },
        {
          name: "request_location",
          type: "Boolean",
          required: false,
          description:
            "Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only.",
        },
        {
          name: "request_poll",
          type: "KeyboardButtonPollType",
          required: false,
          description:
            "Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.",
        },
        {
          name: "web_app",
          type: "WebAppInfo",
          required: false,
          description:
            'Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a "web_app_data" service message. Available in private chats only.',
        },
      ],
      example: {
        text: "Hello from Telegram Bot API Tester",
      },
      relatedTypes: [
        "KeyboardButtonPollType",
        "KeyboardButtonRequestChat",
        "KeyboardButtonRequestManagedBot",
        "KeyboardButtonRequestUsers",
        "WebAppInfo",
      ],
      usedByMethods: ["savePreparedKeyboardButton"],
    },
    {
      name: "KeyboardButtonPollType",
      href: "https://core.telegram.org/bots/api#keyboardbuttonpolltype",
      description:
        "This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.",
      fields: [
        {
          name: "type",
          type: "String",
          required: false,
          description:
            "Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.",
        },
      ],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "KeyboardButtonRequestChat",
      href: "https://core.telegram.org/bots/api#keyboardbuttonrequestchat",
      description:
        "This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. More about requesting chats: https://core.telegram.org/bots/features#chat-and-user-selection.",
      fields: [
        {
          name: "request_id",
          type: "Integer",
          required: true,
          description:
            "Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message",
        },
        {
          name: "chat_is_channel",
          type: "Boolean",
          required: true,
          description:
            "Pass True to request a channel chat, pass False to request a group or a supergroup chat.",
        },
        {
          name: "chat_is_forum",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied.",
        },
        {
          name: "chat_has_username",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied.",
        },
        {
          name: "chat_is_created",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied.",
        },
        {
          name: "user_administrator_rights",
          type: "ChatAdministratorRights",
          required: false,
          description:
            "Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied.",
        },
        {
          name: "bot_administrator_rights",
          type: "ChatAdministratorRights",
          required: false,
          description:
            "Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied.",
        },
        {
          name: "bot_is_member",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.",
        },
        {
          name: "request_title",
          type: "Boolean",
          required: false,
          description: "Optional. Pass True to request the chat's title",
        },
        {
          name: "request_username",
          type: "Boolean",
          required: false,
          description: "Optional. Pass True to request the chat's username",
        },
        {
          name: "request_photo",
          type: "Boolean",
          required: false,
          description: "Optional. Pass True to request the chat's photo",
        },
      ],
      example: {
        request_id: 1,
        chat_is_channel: true,
      },
      relatedTypes: ["ChatAdministratorRights"],
      usedByMethods: [],
    },
    {
      name: "KeyboardButtonRequestManagedBot",
      href: "https://core.telegram.org/bots/api#keyboardbuttonrequestmanagedbot",
      description:
        "This object defines the parameters for the creation of a managed bot. Information about the created bot will be shared with the bot using the update managed_bot and a Message with the field managed_bot_created.",
      fields: [
        {
          name: "request_id",
          type: "Integer",
          required: true,
          description:
            "Signed 32-bit identifier of the request. Must be unique within the message",
        },
        {
          name: "suggested_name",
          type: "String",
          required: false,
          description: "Optional. Suggested name for the bot",
        },
        {
          name: "suggested_username",
          type: "String",
          required: false,
          description: "Optional. Suggested username for the bot",
        },
      ],
      example: {
        request_id: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "KeyboardButtonRequestUsers",
      href: "https://core.telegram.org/bots/api#keyboardbuttonrequestusers",
      description:
        "This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. More about requesting users: https://core.telegram.org/bots/features#chat-and-user-selection",
      fields: [
        {
          name: "request_id",
          type: "Integer",
          required: true,
          description:
            "Signed 32-bit identifier of the request that will be received back in the UsersShared object. Must be unique within the message",
        },
        {
          name: "user_is_bot",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True to request bots, pass False to request regular users. If not specified, no additional restrictions are applied.",
        },
        {
          name: "user_is_premium",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True to request premium users, pass False to request non-premium users. If not specified, no additional restrictions are applied.",
        },
        {
          name: "max_quantity",
          type: "Integer",
          required: false,
          description:
            "Optional. The maximum number of users to be selected; 1-10. Defaults to 1.",
        },
        {
          name: "request_name",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True to request the users' first and last names",
        },
        {
          name: "request_username",
          type: "Boolean",
          required: false,
          description: "Optional. Pass True to request the users' usernames",
        },
        {
          name: "request_photo",
          type: "Boolean",
          required: false,
          description: "Optional. Pass True to request the users' photos",
        },
      ],
      example: {
        request_id: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "LabeledPrice",
      href: "https://core.telegram.org/bots/api#labeledprice",
      description:
        "This object represents a portion of the price for goods or services.",
      fields: [
        {
          name: "label",
          type: "String",
          required: true,
          description: "Portion label",
        },
        {
          name: "amount",
          type: "Integer",
          required: true,
          description:
            "Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).",
        },
      ],
      example: {
        label: "example",
        amount: 1,
      },
      relatedTypes: [],
      usedByMethods: ["createInvoiceLink", "sendInvoice"],
    },
    {
      name: "LinkPreviewOptions",
      href: "https://core.telegram.org/bots/api#linkpreviewoptions",
      description: "Describes the options used for link preview generation.",
      fields: [
        {
          name: "is_disabled",
          type: "Boolean",
          required: false,
          description: "Optional. True, if the link preview is disabled",
        },
        {
          name: "url",
          type: "String",
          required: false,
          description:
            "Optional. URL to use for the link preview. If empty, then the first URL found in the message text will be used",
        },
        {
          name: "prefer_small_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview",
        },
        {
          name: "prefer_large_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview",
        },
        {
          name: "show_above_text",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text",
        },
      ],
      example: {},
      relatedTypes: [],
      usedByMethods: ["editMessageText", "sendMessage"],
    },
    {
      name: "Location",
      href: "https://core.telegram.org/bots/api#location",
      description: "This object represents a point on the map.",
      fields: [
        {
          name: "latitude",
          type: "Float",
          required: true,
          description: "Latitude as defined by the sender",
        },
        {
          name: "longitude",
          type: "Float",
          required: true,
          description: "Longitude as defined by the sender",
        },
        {
          name: "horizontal_accuracy",
          type: "Float",
          required: false,
          description:
            "Optional. The radius of uncertainty for the location, measured in meters; 0-1500",
        },
        {
          name: "live_period",
          type: "Integer",
          required: false,
          description:
            "Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.",
        },
        {
          name: "heading",
          type: "Integer",
          required: false,
          description:
            "Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only.",
        },
        {
          name: "proximity_alert_radius",
          type: "Integer",
          required: false,
          description:
            "Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.",
        },
      ],
      example: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "LocationAddress",
      href: "https://core.telegram.org/bots/api#locationaddress",
      description: "Describes the physical address of a location.",
      fields: [
        {
          name: "country_code",
          type: "String",
          required: true,
          description:
            "The two-letter ISO 3166-1 alpha-2 country code of the country where the location is located",
        },
        {
          name: "state",
          type: "String",
          required: false,
          description: "Optional. State of the location",
        },
        {
          name: "city",
          type: "String",
          required: false,
          description: "Optional. City of the location",
        },
        {
          name: "street",
          type: "String",
          required: false,
          description: "Optional. Street address of the location",
        },
      ],
      example: {
        country_code: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "LoginUrl",
      href: "https://core.telegram.org/bots/api#loginurl",
      description:
        "This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:\n\nTelegram apps support these buttons as of version 5.7.",
      fields: [
        {
          name: "url",
          type: "String",
          required: true,
          description:
            "An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data. NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization.",
        },
        {
          name: "forward_text",
          type: "String",
          required: false,
          description:
            "Optional. New text of the button in forwarded messages.",
        },
        {
          name: "bot_username",
          type: "String",
          required: false,
          description:
            "Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details.",
        },
        {
          name: "request_write_access",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True to request the permission for your bot to send messages to the user.",
        },
      ],
      example: {
        url: "https://example.com",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ManagedBotCreated",
      href: "https://core.telegram.org/bots/api#managedbotcreated",
      description:
        "This object contains information about the bot that was created to be managed by the current bot.",
      fields: [
        {
          name: "bot",
          type: "User",
          required: true,
          description:
            "Information about the bot. The bot's token can be fetched using the method getManagedBotToken.",
        },
      ],
      example: {
        bot: {},
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ManagedBotUpdated",
      href: "https://core.telegram.org/bots/api#managedbotupdated",
      description:
        "This object contains information about the creation, token update, or owner update of a bot that is managed by the current bot.",
      fields: [
        {
          name: "user",
          type: "User",
          required: true,
          description: "User that created the bot",
        },
        {
          name: "bot",
          type: "User",
          required: true,
          description:
            "Information about the bot. Token of the bot can be fetched using the method getManagedBotToken.",
        },
      ],
      example: {
        user: {},
        bot: {},
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "MaskPosition",
      href: "https://core.telegram.org/bots/api#maskposition",
      description:
        "This object describes the position on faces where a mask should be placed by default.",
      fields: [
        {
          name: "point",
          type: "String",
          required: true,
          description:
            'The part of the face relative to which the mask should be placed. One of "forehead", "eyes", "mouth", or "chin".',
        },
        {
          name: "x_shift",
          type: "Float",
          required: true,
          description:
            "Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.",
        },
        {
          name: "y_shift",
          type: "Float",
          required: true,
          description:
            "Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.",
        },
        {
          name: "scale",
          type: "Float",
          required: true,
          description:
            "Mask scaling coefficient. For example, 2.0 means double size.",
        },
      ],
      example: {
        point: "example",
        x_shift: 1,
        y_shift: 1,
        scale: 1,
      },
      relatedTypes: [],
      usedByMethods: ["setStickerMaskPosition"],
    },
    {
      name: "MaybeInaccessibleMessage",
      href: "https://core.telegram.org/bots/api#maybeinaccessiblemessage",
      description:
        "This object describes a message that can be inaccessible to the bot. It can be one of\n\n- Message\n\n- InaccessibleMessage",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "MenuButton",
      href: "https://core.telegram.org/bots/api#menubutton",
      description:
        "This object describes the bot's menu button in a private chat. It should be one of\n\n- MenuButtonCommands\n\n- MenuButtonWebApp\n\n- MenuButtonDefault\n\nIf a menu button other than MenuButtonDefault is set for a private chat, then it is applied in the chat. Otherwise the default menu button is applied. By default, the menu button opens the list of bot commands.",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: ["getChatMenuButton", "setChatMenuButton"],
    },
    {
      name: "MenuButtonCommands",
      href: "https://core.telegram.org/bots/api#menubuttoncommands",
      description:
        "Represents a menu button, which opens the bot's list of commands.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the button, must be commands",
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "MenuButtonDefault",
      href: "https://core.telegram.org/bots/api#menubuttondefault",
      description:
        "Describes that no specific value for the menu button was set.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the button, must be default",
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "MenuButtonWebApp",
      href: "https://core.telegram.org/bots/api#menubuttonwebapp",
      description: "Represents a menu button, which launches a Web App.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: "Type of the button, must be web_app",
        },
        {
          name: "text",
          type: "String",
          required: true,
          description: "Text on the button",
        },
        {
          name: "web_app",
          type: "WebAppInfo",
          required: true,
          description:
            "Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a t.me link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link.",
        },
      ],
      example: {
        type: "example",
        text: "Hello from Telegram Bot API Tester",
        web_app: {},
      },
      relatedTypes: ["WebAppInfo"],
      usedByMethods: [],
    },
    {
      name: "Message",
      href: "https://core.telegram.org/bots/api#message",
      description: "This object represents a message.",
      fields: [
        {
          name: "message_id",
          type: "Integer",
          required: true,
          description:
            "Unique message identifier inside this chat. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent",
        },
        {
          name: "message_thread_id",
          type: "Integer",
          required: false,
          description:
            "Optional. Unique identifier of a message thread or forum topic to which the message belongs; for supergroups and private chats only",
        },
        {
          name: "direct_messages_topic",
          type: "DirectMessagesTopic",
          required: false,
          description:
            "Optional. Information about the direct messages chat topic that contains the message",
        },
        {
          name: "from",
          type: "User",
          required: false,
          description:
            "Optional. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats",
        },
        {
          name: "sender_chat",
          type: "Chat",
          required: false,
          description:
            "Optional. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains a fake sender user in non-channel chats.",
        },
        {
          name: "sender_boost_count",
          type: "Integer",
          required: false,
          description:
            "Optional. If the sender of the message boosted the chat, the number of boosts added by the user",
        },
        {
          name: "sender_business_bot",
          type: "User",
          required: false,
          description:
            "Optional. The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account.",
        },
        {
          name: "sender_tag",
          type: "String",
          required: false,
          description:
            "Optional. Tag or custom title of the sender of the message; for supergroups only",
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description:
            "Date the message was sent in Unix time. It is always a positive number, representing a valid date.",
        },
        {
          name: "business_connection_id",
          type: "String",
          required: false,
          description:
            "Optional. Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier.",
        },
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "Chat the message belongs to",
        },
        {
          name: "forward_origin",
          type: "MessageOrigin",
          required: false,
          description:
            "Optional. Information about the original message for forwarded messages",
        },
        {
          name: "is_topic_message",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the message is sent to a topic in a forum supergroup or a private chat with the bot",
        },
        {
          name: "is_automatic_forward",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group",
        },
        {
          name: "reply_to_message",
          type: "Message",
          required: false,
          description:
            "Optional. For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.",
        },
        {
          name: "external_reply",
          type: "ExternalReplyInfo",
          required: false,
          description:
            "Optional. Information about the message that is being replied to, which may come from another chat or forum topic",
        },
        {
          name: "quote",
          type: "TextQuote",
          required: false,
          description:
            "Optional. For replies that quote part of the original message, the quoted part of the message",
        },
        {
          name: "reply_to_story",
          type: "Story",
          required: false,
          description: "Optional. For replies to a story, the original story",
        },
        {
          name: "reply_to_checklist_task_id",
          type: "Integer",
          required: false,
          description:
            "Optional. Identifier of the specific checklist task that is being replied to",
        },
        {
          name: "reply_to_poll_option_id",
          type: "String",
          required: false,
          description:
            "Optional. Persistent identifier of the specific poll option that is being replied to",
        },
        {
          name: "via_bot",
          type: "User",
          required: false,
          description: "Optional. Bot through which the message was sent",
        },
        {
          name: "edit_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Date the message was last edited in Unix time",
        },
        {
          name: "has_protected_content",
          type: "Boolean",
          required: false,
          description: "Optional. True, if the message can't be forwarded",
        },
        {
          name: "is_from_offline",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message",
        },
        {
          name: "is_paid_post",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the message is a paid post. Note that such posts must not be deleted for 24 hours to receive the payment and can't be edited.",
        },
        {
          name: "media_group_id",
          type: "String",
          required: false,
          description:
            "Optional. The unique identifier inside this chat of a media message group this message belongs to",
        },
        {
          name: "author_signature",
          type: "String",
          required: false,
          description:
            "Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator",
        },
        {
          name: "paid_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of Telegram Stars that were paid by the sender of the message to send it",
        },
        {
          name: "text",
          type: "String",
          required: false,
          description:
            "Optional. For text messages, the actual UTF-8 text of the message",
        },
        {
          name: "entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text",
        },
        {
          name: "link_preview_options",
          type: "LinkPreviewOptions",
          required: false,
          description:
            "Optional. Options used for link preview generation for the message, if it is a text message and link preview options were changed",
        },
        {
          name: "suggested_post_info",
          type: "SuggestedPostInfo",
          required: false,
          description:
            "Optional. Information about suggested post parameters if the message is a suggested post in a channel direct messages chat. If the message is an approved or declined suggested post, then it can't be edited.",
        },
        {
          name: "effect_id",
          type: "String",
          required: false,
          description:
            "Optional. Unique identifier of the message effect added to the message",
        },
        {
          name: "animation",
          type: "Animation",
          required: false,
          description:
            "Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set",
        },
        {
          name: "audio",
          type: "Audio",
          required: false,
          description:
            "Optional. Message is an audio file, information about the file",
        },
        {
          name: "document",
          type: "Document",
          required: false,
          description:
            "Optional. Message is a general file, information about the file",
        },
        {
          name: "paid_media",
          type: "PaidMediaInfo",
          required: false,
          description:
            "Optional. Message contains paid media; information about the paid media",
        },
        {
          name: "photo",
          type: "Array of PhotoSize",
          required: false,
          description:
            "Optional. Message is a photo, available sizes of the photo",
        },
        {
          name: "sticker",
          type: "Sticker",
          required: false,
          description:
            "Optional. Message is a sticker, information about the sticker",
        },
        {
          name: "story",
          type: "Story",
          required: false,
          description: "Optional. Message is a forwarded story",
        },
        {
          name: "video",
          type: "Video",
          required: false,
          description:
            "Optional. Message is a video, information about the video",
        },
        {
          name: "video_note",
          type: "VideoNote",
          required: false,
          description:
            "Optional. Message is a video note, information about the video message",
        },
        {
          name: "voice",
          type: "Voice",
          required: false,
          description:
            "Optional. Message is a voice message, information about the file",
        },
        {
          name: "caption",
          type: "String",
          required: false,
          description:
            "Optional. Caption for the animation, audio, document, paid media, photo, video or voice",
        },
        {
          name: "caption_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption",
        },
        {
          name: "show_caption_above_media",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the caption must be shown above the message media",
        },
        {
          name: "has_media_spoiler",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the message media is covered by a spoiler animation",
        },
        {
          name: "checklist",
          type: "Checklist",
          required: false,
          description: "Optional. Message is a checklist",
        },
        {
          name: "contact",
          type: "Contact",
          required: false,
          description:
            "Optional. Message is a shared contact, information about the contact",
        },
        {
          name: "dice",
          type: "Dice",
          required: false,
          description: "Optional. Message is a dice with random value",
        },
        {
          name: "game",
          type: "Game",
          required: false,
          description:
            "Optional. Message is a game, information about the game. More about games: https://core.telegram.org/bots/api#games",
        },
        {
          name: "poll",
          type: "Poll",
          required: false,
          description:
            "Optional. Message is a native poll, information about the poll",
        },
        {
          name: "venue",
          type: "Venue",
          required: false,
          description:
            "Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set",
        },
        {
          name: "location",
          type: "Location",
          required: false,
          description:
            "Optional. Message is a shared location, information about the location",
        },
        {
          name: "new_chat_members",
          type: "Array of User",
          required: false,
          description:
            "Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)",
        },
        {
          name: "left_chat_member",
          type: "User",
          required: false,
          description:
            "Optional. A member was removed from the group, information about them (this member may be the bot itself)",
        },
        {
          name: "chat_owner_left",
          type: "ChatOwnerLeft",
          required: false,
          description: "Optional. Service message: chat owner has left",
        },
        {
          name: "chat_owner_changed",
          type: "ChatOwnerChanged",
          required: false,
          description: "Optional. Service message: chat owner has changed",
        },
        {
          name: "new_chat_title",
          type: "String",
          required: false,
          description: "Optional. A chat title was changed to this value",
        },
        {
          name: "new_chat_photo",
          type: "Array of PhotoSize",
          required: false,
          description: "Optional. A chat photo was change to this value",
        },
        {
          name: "delete_chat_photo",
          type: "Boolean",
          required: false,
          description: "Optional. Service message: the chat photo was deleted",
        },
        {
          name: "group_chat_created",
          type: "Boolean",
          required: false,
          description: "Optional. Service message: the group has been created",
        },
        {
          name: "supergroup_chat_created",
          type: "Boolean",
          required: false,
          description:
            "Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.",
        },
        {
          name: "channel_chat_created",
          type: "Boolean",
          required: false,
          description:
            "Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.",
        },
        {
          name: "message_auto_delete_timer_changed",
          type: "MessageAutoDeleteTimerChanged",
          required: false,
          description:
            "Optional. Service message: auto-delete timer settings changed in the chat",
        },
        {
          name: "migrate_to_chat_id",
          type: "Integer",
          required: false,
          description:
            "Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.",
        },
        {
          name: "migrate_from_chat_id",
          type: "Integer",
          required: false,
          description:
            "Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.",
        },
        {
          name: "pinned_message",
          type: "MaybeInaccessibleMessage",
          required: false,
          description:
            "Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.",
        },
        {
          name: "invoice",
          type: "Invoice",
          required: false,
          description:
            "Optional. Message is an invoice for a payment, information about the invoice. More about payments: https://core.telegram.org/bots/api#payments",
        },
        {
          name: "successful_payment",
          type: "SuccessfulPayment",
          required: false,
          description:
            "Optional. Message is a service message about a successful payment, information about the payment. More about payments: https://core.telegram.org/bots/api#payments",
        },
        {
          name: "refunded_payment",
          type: "RefundedPayment",
          required: false,
          description:
            "Optional. Message is a service message about a refunded payment, information about the payment. More about payments: https://core.telegram.org/bots/api#payments",
        },
        {
          name: "users_shared",
          type: "UsersShared",
          required: false,
          description:
            "Optional. Service message: users were shared with the bot",
        },
        {
          name: "chat_shared",
          type: "ChatShared",
          required: false,
          description:
            "Optional. Service message: a chat was shared with the bot",
        },
        {
          name: "gift",
          type: "GiftInfo",
          required: false,
          description:
            "Optional. Service message: a regular gift was sent or received",
        },
        {
          name: "unique_gift",
          type: "UniqueGiftInfo",
          required: false,
          description:
            "Optional. Service message: a unique gift was sent or received",
        },
        {
          name: "gift_upgrade_sent",
          type: "GiftInfo",
          required: false,
          description:
            "Optional. Service message: upgrade of a gift was purchased after the gift was sent",
        },
        {
          name: "connected_website",
          type: "String",
          required: false,
          description:
            "Optional. The domain name of the website on which the user has logged in. More about Telegram Login: https://core.telegram.org/widgets/login",
        },
        {
          name: "write_access_allowed",
          type: "WriteAccessAllowed",
          required: false,
          description:
            "Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess",
        },
        {
          name: "passport_data",
          type: "PassportData",
          required: false,
          description: "Optional. Telegram Passport data",
        },
        {
          name: "proximity_alert_triggered",
          type: "ProximityAlertTriggered",
          required: false,
          description:
            "Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location.",
        },
        {
          name: "boost_added",
          type: "ChatBoostAdded",
          required: false,
          description: "Optional. Service message: user boosted the chat",
        },
        {
          name: "chat_background_set",
          type: "ChatBackground",
          required: false,
          description: "Optional. Service message: chat background set",
        },
        {
          name: "checklist_tasks_done",
          type: "ChecklistTasksDone",
          required: false,
          description:
            "Optional. Service message: some tasks in a checklist were marked as done or not done",
        },
        {
          name: "checklist_tasks_added",
          type: "ChecklistTasksAdded",
          required: false,
          description:
            "Optional. Service message: tasks were added to a checklist",
        },
        {
          name: "direct_message_price_changed",
          type: "DirectMessagePriceChanged",
          required: false,
          description:
            "Optional. Service message: the price for paid messages in the corresponding direct messages chat of a channel has changed",
        },
        {
          name: "forum_topic_created",
          type: "ForumTopicCreated",
          required: false,
          description: "Optional. Service message: forum topic created",
        },
        {
          name: "forum_topic_edited",
          type: "ForumTopicEdited",
          required: false,
          description: "Optional. Service message: forum topic edited",
        },
        {
          name: "forum_topic_closed",
          type: "ForumTopicClosed",
          required: false,
          description: "Optional. Service message: forum topic closed",
        },
        {
          name: "forum_topic_reopened",
          type: "ForumTopicReopened",
          required: false,
          description: "Optional. Service message: forum topic reopened",
        },
        {
          name: "general_forum_topic_hidden",
          type: "GeneralForumTopicHidden",
          required: false,
          description:
            "Optional. Service message: the 'General' forum topic hidden",
        },
        {
          name: "general_forum_topic_unhidden",
          type: "GeneralForumTopicUnhidden",
          required: false,
          description:
            "Optional. Service message: the 'General' forum topic unhidden",
        },
        {
          name: "giveaway_created",
          type: "GiveawayCreated",
          required: false,
          description:
            "Optional. Service message: a scheduled giveaway was created",
        },
        {
          name: "giveaway",
          type: "Giveaway",
          required: false,
          description: "Optional. The message is a scheduled giveaway message",
        },
        {
          name: "giveaway_winners",
          type: "GiveawayWinners",
          required: false,
          description: "Optional. A giveaway with public winners was completed",
        },
        {
          name: "giveaway_completed",
          type: "GiveawayCompleted",
          required: false,
          description:
            "Optional. Service message: a giveaway without public winners was completed",
        },
        {
          name: "managed_bot_created",
          type: "ManagedBotCreated",
          required: false,
          description:
            "Optional. Service message: user created a bot that will be managed by the current bot",
        },
        {
          name: "paid_message_price_changed",
          type: "PaidMessagePriceChanged",
          required: false,
          description:
            "Optional. Service message: the price for paid messages has changed in the chat",
        },
        {
          name: "poll_option_added",
          type: "PollOptionAdded",
          required: false,
          description:
            "Optional. Service message: answer option was added to a poll",
        },
        {
          name: "poll_option_deleted",
          type: "PollOptionDeleted",
          required: false,
          description:
            "Optional. Service message: answer option was deleted from a poll",
        },
        {
          name: "suggested_post_approved",
          type: "SuggestedPostApproved",
          required: false,
          description:
            "Optional. Service message: a suggested post was approved",
        },
        {
          name: "suggested_post_approval_failed",
          type: "SuggestedPostApprovalFailed",
          required: false,
          description:
            "Optional. Service message: approval of a suggested post has failed",
        },
        {
          name: "suggested_post_declined",
          type: "SuggestedPostDeclined",
          required: false,
          description:
            "Optional. Service message: a suggested post was declined",
        },
        {
          name: "suggested_post_paid",
          type: "SuggestedPostPaid",
          required: false,
          description:
            "Optional. Service message: payment for a suggested post was received",
        },
        {
          name: "suggested_post_refunded",
          type: "SuggestedPostRefunded",
          required: false,
          description:
            "Optional. Service message: payment for a suggested post was refunded",
        },
        {
          name: "video_chat_scheduled",
          type: "VideoChatScheduled",
          required: false,
          description: "Optional. Service message: video chat scheduled",
        },
        {
          name: "video_chat_started",
          type: "VideoChatStarted",
          required: false,
          description: "Optional. Service message: video chat started",
        },
        {
          name: "video_chat_ended",
          type: "VideoChatEnded",
          required: false,
          description: "Optional. Service message: video chat ended",
        },
        {
          name: "video_chat_participants_invited",
          type: "VideoChatParticipantsInvited",
          required: false,
          description:
            "Optional. Service message: new participants invited to a video chat",
        },
        {
          name: "web_app_data",
          type: "WebAppData",
          required: false,
          description: "Optional. Service message: data sent by a Web App",
        },
        {
          name: "reply_markup",
          type: "InlineKeyboardMarkup",
          required: false,
          description:
            "Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.",
        },
      ],
      example: {
        message_id: 1,
        date: 1,
        chat: {},
      },
      relatedTypes: [
        "Animation",
        "Audio",
        "Chat",
        "ChatBackground",
        "ChatBoostAdded",
        "ChatOwnerChanged",
        "ChatOwnerLeft",
        "ChatShared",
        "Checklist",
        "ChecklistTasksAdded",
        "ChecklistTasksDone",
        "Contact",
        "Dice",
        "DirectMessagePriceChanged",
        "DirectMessagesTopic",
        "Document",
        "ExternalReplyInfo",
        "ForumTopicClosed",
        "ForumTopicCreated",
        "ForumTopicEdited",
        "ForumTopicReopened",
        "Game",
        "GeneralForumTopicHidden",
        "GeneralForumTopicUnhidden",
        "GiftInfo",
        "Giveaway",
        "GiveawayCompleted",
        "GiveawayCreated",
        "GiveawayWinners",
        "InlineKeyboardMarkup",
        "Invoice",
        "LinkPreviewOptions",
        "Location",
        "ManagedBotCreated",
        "MaybeInaccessibleMessage",
        "MessageAutoDeleteTimerChanged",
        "MessageEntity",
        "MessageOrigin",
        "PaidMediaInfo",
        "PaidMessagePriceChanged",
        "PassportData",
        "PhotoSize",
        "Poll",
        "PollOptionAdded",
        "PollOptionDeleted",
        "ProximityAlertTriggered",
        "RefundedPayment",
        "Sticker",
        "Story",
        "SuccessfulPayment",
        "SuggestedPostApprovalFailed",
        "SuggestedPostApproved",
        "SuggestedPostDeclined",
        "SuggestedPostInfo",
        "SuggestedPostPaid",
        "SuggestedPostRefunded",
        "TextQuote",
        "UniqueGiftInfo",
        "User",
        "UsersShared",
        "Venue",
        "Video",
        "VideoChatEnded",
        "VideoChatParticipantsInvited",
        "VideoChatScheduled",
        "VideoChatStarted",
        "VideoNote",
        "Voice",
        "WebAppData",
        "WriteAccessAllowed",
      ],
      usedByMethods: [
        "editMessageCaption",
        "editMessageChecklist",
        "editMessageLiveLocation",
        "editMessageMedia",
        "editMessageReplyMarkup",
        "editMessageText",
        "forwardMessage",
        "sendAnimation",
        "sendAudio",
        "sendChecklist",
        "sendContact",
        "sendDice",
        "sendDocument",
        "sendGame",
        "sendInvoice",
        "sendLocation",
        "sendMediaGroup",
        "sendMessage",
        "sendPaidMedia",
        "sendPhoto",
        "sendPoll",
        "sendSticker",
        "sendVenue",
        "sendVideo",
        "sendVideoNote",
        "sendVoice",
        "setGameScore",
        "stopMessageLiveLocation",
      ],
    },
    {
      name: "MessageAutoDeleteTimerChanged",
      href: "https://core.telegram.org/bots/api#messageautodeletetimerchanged",
      description:
        "This object represents a service message about a change in auto-delete timer settings.",
      fields: [
        {
          name: "message_auto_delete_time",
          type: "Integer",
          required: true,
          description:
            "New auto-delete time for messages in the chat; in seconds",
        },
      ],
      example: {
        message_auto_delete_time: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "MessageEntity",
      href: "https://core.telegram.org/bots/api#messageentity",
      description:
        "This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'Type of the entity. Currently, can be "mention" (@username), "hashtag" (#hashtag or #hashtag@chatusername), "cashtag" ($USD or $USD@chatusername), "bot_command" (/start@jobs_bot), "url" (https://telegram.org), "email" (do-not-reply@telegram.org), "phone_number" (+1-212-555-0123), "bold" (bold text), "italic" (italic text), "underline" (underlined text), "strikethrough" (strikethrough text), "spoiler" (spoiler message), "blockquote" (block quotation), "expandable_blockquote" (collapsed-by-default block quotation), "code" (monowidth string), "pre" (monowidth block), "text_link" (for clickable text URLs), "text_mention" (for users without usernames), "custom_emoji" (for inline custom emoji stickers), or "date_time" (for formatted date and time)',
        },
        {
          name: "offset",
          type: "Integer",
          required: true,
          description: "Offset in UTF-16 code units to the start of the entity",
        },
        {
          name: "length",
          type: "Integer",
          required: true,
          description: "Length of the entity in UTF-16 code units",
        },
        {
          name: "url",
          type: "String",
          required: false,
          description:
            'Optional. For "text_link" only, URL that will be opened after user taps on the text',
        },
        {
          name: "user",
          type: "User",
          required: false,
          description: 'Optional. For "text_mention" only, the mentioned user',
        },
        {
          name: "language",
          type: "String",
          required: false,
          description:
            'Optional. For "pre" only, the programming language of the entity text',
        },
        {
          name: "custom_emoji_id",
          type: "String",
          required: false,
          description:
            'Optional. For "custom_emoji" only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker',
        },
        {
          name: "unix_time",
          type: "Integer",
          required: false,
          description:
            'Optional. For "date_time" only, the Unix time associated with the entity',
        },
        {
          name: "date_time_format",
          type: "String",
          required: false,
          description:
            'Optional. For "date_time" only, the string that defines the formatting of the date and time. See date-time entity formatting for more details.',
        },
      ],
      example: {
        type: "example",
        offset: 1,
        length: 1,
      },
      relatedTypes: ["User"],
      usedByMethods: [
        "copyMessage",
        "editMessageCaption",
        "editMessageText",
        "editStory",
        "giftPremiumSubscription",
        "postStory",
        "sendAnimation",
        "sendAudio",
        "sendDocument",
        "sendGift",
        "sendMessage",
        "sendMessageDraft",
        "sendPaidMedia",
        "sendPhoto",
        "sendPoll",
        "sendVideo",
        "sendVoice",
      ],
    },
    {
      name: "MessageId",
      href: "https://core.telegram.org/bots/api#messageid",
      description: "This object represents a unique message identifier.",
      fields: [
        {
          name: "message_id",
          type: "Integer",
          required: true,
          description:
            "Unique message identifier. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent",
        },
      ],
      example: {
        message_id: 1,
      },
      relatedTypes: [],
      usedByMethods: ["copyMessage", "copyMessages", "forwardMessages"],
    },
    {
      name: "MessageOrigin",
      href: "https://core.telegram.org/bots/api#messageorigin",
      description:
        "This object describes the origin of a message. It can be one of\n\n- MessageOriginUser\n\n- MessageOriginHiddenUser\n\n- MessageOriginChat\n\n- MessageOriginChannel",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "MessageOriginChannel",
      href: "https://core.telegram.org/bots/api#messageoriginchannel",
      description: "The message was originally sent to a channel chat.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the message origin, always "channel"',
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description: "Date the message was sent originally in Unix time",
        },
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "Channel chat to which the message was originally sent",
        },
        {
          name: "message_id",
          type: "Integer",
          required: true,
          description: "Unique message identifier inside the chat",
        },
        {
          name: "author_signature",
          type: "String",
          required: false,
          description: "Optional. Signature of the original post author",
        },
      ],
      example: {
        type: "example",
        date: 1,
        chat: {},
        message_id: 1,
      },
      relatedTypes: ["Chat"],
      usedByMethods: [],
    },
    {
      name: "MessageOriginChat",
      href: "https://core.telegram.org/bots/api#messageoriginchat",
      description:
        "The message was originally sent on behalf of a chat to a group chat.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the message origin, always "chat"',
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description: "Date the message was sent originally in Unix time",
        },
        {
          name: "sender_chat",
          type: "Chat",
          required: true,
          description: "Chat that sent the message originally",
        },
        {
          name: "author_signature",
          type: "String",
          required: false,
          description:
            "Optional. For messages originally sent by an anonymous chat administrator, original message author signature",
        },
      ],
      example: {
        type: "example",
        date: 1,
        sender_chat: {},
      },
      relatedTypes: ["Chat"],
      usedByMethods: [],
    },
    {
      name: "MessageOriginHiddenUser",
      href: "https://core.telegram.org/bots/api#messageoriginhiddenuser",
      description: "The message was originally sent by an unknown user.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the message origin, always "hidden_user"',
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description: "Date the message was sent originally in Unix time",
        },
        {
          name: "sender_user_name",
          type: "String",
          required: true,
          description: "Name of the user that sent the message originally",
        },
      ],
      example: {
        type: "example",
        date: 1,
        sender_user_name: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "MessageOriginUser",
      href: "https://core.telegram.org/bots/api#messageoriginuser",
      description: "The message was originally sent by a known user.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the message origin, always "user"',
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description: "Date the message was sent originally in Unix time",
        },
        {
          name: "sender_user",
          type: "User",
          required: true,
          description: "User that sent the message originally",
        },
      ],
      example: {
        type: "example",
        date: 1,
        sender_user: {},
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "MessageReactionCountUpdated",
      href: "https://core.telegram.org/bots/api#messagereactioncountupdated",
      description:
        "This object represents reaction changes on a message with anonymous reactions.",
      fields: [
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "The chat containing the message",
        },
        {
          name: "message_id",
          type: "Integer",
          required: true,
          description: "Unique message identifier inside the chat",
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description: "Date of the change in Unix time",
        },
        {
          name: "reactions",
          type: "Array of ReactionCount",
          required: true,
          description: "List of reactions that are present on the message",
        },
      ],
      example: {
        chat: {},
        message_id: 1,
        date: 1,
        reactions: [],
      },
      relatedTypes: ["Chat", "ReactionCount"],
      usedByMethods: [],
    },
    {
      name: "MessageReactionUpdated",
      href: "https://core.telegram.org/bots/api#messagereactionupdated",
      description:
        "This object represents a change of a reaction on a message performed by a user.",
      fields: [
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "The chat containing the message the user reacted to",
        },
        {
          name: "message_id",
          type: "Integer",
          required: true,
          description: "Unique identifier of the message inside the chat",
        },
        {
          name: "user",
          type: "User",
          required: false,
          description:
            "Optional. The user that changed the reaction, if the user isn't anonymous",
        },
        {
          name: "actor_chat",
          type: "Chat",
          required: false,
          description:
            "Optional. The chat on behalf of which the reaction was changed, if the user is anonymous",
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description: "Date of the change in Unix time",
        },
        {
          name: "old_reaction",
          type: "Array of ReactionType",
          required: true,
          description:
            "Previous list of reaction types that were set by the user",
        },
        {
          name: "new_reaction",
          type: "Array of ReactionType",
          required: true,
          description:
            "New list of reaction types that have been set by the user",
        },
      ],
      example: {
        chat: {},
        message_id: 1,
        date: 1,
        old_reaction: [],
        new_reaction: [],
      },
      relatedTypes: ["Chat", "ReactionType", "User"],
      usedByMethods: [],
    },
    {
      name: "OrderInfo",
      href: "https://core.telegram.org/bots/api#orderinfo",
      description: "This object represents information about an order.",
      fields: [
        {
          name: "name",
          type: "String",
          required: false,
          description: "Optional. User name",
        },
        {
          name: "phone_number",
          type: "String",
          required: false,
          description: "Optional. User's phone number",
        },
        {
          name: "email",
          type: "String",
          required: false,
          description: "Optional. User email",
        },
        {
          name: "shipping_address",
          type: "ShippingAddress",
          required: false,
          description: "Optional. User shipping address",
        },
      ],
      example: {},
      relatedTypes: ["ShippingAddress"],
      usedByMethods: [],
    },
    {
      name: "OwnedGift",
      href: "https://core.telegram.org/bots/api#ownedgift",
      description:
        "This object describes a gift received and owned by a user or a chat. Currently, it can be one of\n\n- OwnedGiftRegular\n\n- OwnedGiftUnique",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "OwnedGiftRegular",
      href: "https://core.telegram.org/bots/api#ownedgiftregular",
      description: "Describes a regular gift owned by a user or a chat.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the gift, always "regular"',
        },
        {
          name: "gift",
          type: "Gift",
          required: true,
          description: "Information about the regular gift",
        },
        {
          name: "owned_gift_id",
          type: "String",
          required: false,
          description:
            "Optional. Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only",
        },
        {
          name: "sender_user",
          type: "User",
          required: false,
          description: "Optional. Sender of the gift if it is a known user",
        },
        {
          name: "send_date",
          type: "Integer",
          required: true,
          description: "Date the gift was sent in Unix time",
        },
        {
          name: "text",
          type: "String",
          required: false,
          description:
            "Optional. Text of the message that was added to the gift",
        },
        {
          name: "entities",
          type: "Array of MessageEntity",
          required: false,
          description: "Optional. Special entities that appear in the text",
        },
        {
          name: "is_private",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them",
        },
        {
          name: "is_saved",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only",
        },
        {
          name: "can_be_upgraded",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift can be upgraded to a unique gift; for gifts received on behalf of business accounts only",
        },
        {
          name: "was_refunded",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift was refunded and isn't available anymore",
        },
        {
          name: "convert_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. Number of Telegram Stars that can be claimed by the receiver instead of the gift; omitted if the gift cannot be converted to Telegram Stars; for gifts received on behalf of business accounts only",
        },
        {
          name: "prepaid_upgrade_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. Number of Telegram Stars that were paid for the ability to upgrade the gift",
        },
        {
          name: "is_upgrade_separate",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift's upgrade was purchased after the gift was sent; for gifts received on behalf of business accounts only",
        },
        {
          name: "unique_gift_number",
          type: "Integer",
          required: false,
          description:
            "Optional. Unique number reserved for this gift when upgraded. See the number field in UniqueGift",
        },
      ],
      example: {
        type: "example",
        gift: {},
        send_date: 1,
      },
      relatedTypes: ["Gift", "MessageEntity", "User"],
      usedByMethods: [],
    },
    {
      name: "OwnedGifts",
      href: "https://core.telegram.org/bots/api#ownedgifts",
      description:
        "Contains the list of gifts received and owned by a user or a chat.",
      fields: [
        {
          name: "total_count",
          type: "Integer",
          required: true,
          description:
            "The total number of gifts owned by the user or the chat",
        },
        {
          name: "gifts",
          type: "Array of OwnedGift",
          required: true,
          description: "The list of gifts",
        },
        {
          name: "next_offset",
          type: "String",
          required: false,
          description:
            "Optional. Offset for the next request. If empty, then there are no more results",
        },
      ],
      example: {
        total_count: 1,
        gifts: [],
      },
      relatedTypes: ["OwnedGift"],
      usedByMethods: [
        "getBusinessAccountGifts",
        "getChatGifts",
        "getUserGifts",
      ],
    },
    {
      name: "OwnedGiftUnique",
      href: "https://core.telegram.org/bots/api#ownedgiftunique",
      description:
        "Describes a unique gift received and owned by a user or a chat.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the gift, always "unique"',
        },
        {
          name: "gift",
          type: "UniqueGift",
          required: true,
          description: "Information about the unique gift",
        },
        {
          name: "owned_gift_id",
          type: "String",
          required: false,
          description:
            "Optional. Unique identifier of the received gift for the bot; for gifts received on behalf of business accounts only",
        },
        {
          name: "sender_user",
          type: "User",
          required: false,
          description: "Optional. Sender of the gift if it is a known user",
        },
        {
          name: "send_date",
          type: "Integer",
          required: true,
          description: "Date the gift was sent in Unix time",
        },
        {
          name: "is_saved",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only",
        },
        {
          name: "can_be_transferred",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift can be transferred to another owner; for gifts received on behalf of business accounts only",
        },
        {
          name: "transfer_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift",
        },
        {
          name: "next_transfer_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now",
        },
      ],
      example: {
        type: "example",
        gift: {},
        send_date: 1,
      },
      relatedTypes: ["UniqueGift", "User"],
      usedByMethods: [],
    },
    {
      name: "PaidMedia",
      href: "https://core.telegram.org/bots/api#paidmedia",
      description:
        "This object describes paid media. Currently, it can be one of\n\n- PaidMediaPreview\n\n- PaidMediaPhoto\n\n- PaidMediaVideo",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PaidMediaInfo",
      href: "https://core.telegram.org/bots/api#paidmediainfo",
      description: "Describes the paid media added to a message.",
      fields: [
        {
          name: "star_count",
          type: "Integer",
          required: true,
          description:
            "The number of Telegram Stars that must be paid to buy access to the media",
        },
        {
          name: "paid_media",
          type: "Array of PaidMedia",
          required: true,
          description: "Information about the paid media",
        },
      ],
      example: {
        star_count: 1,
        paid_media: [],
      },
      relatedTypes: ["PaidMedia"],
      usedByMethods: [],
    },
    {
      name: "PaidMediaPhoto",
      href: "https://core.telegram.org/bots/api#paidmediaphoto",
      description: "The paid media is a photo.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the paid media, always "photo"',
        },
        {
          name: "photo",
          type: "Array of PhotoSize",
          required: true,
          description: "The photo",
        },
      ],
      example: {
        type: "example",
        photo: [],
      },
      relatedTypes: ["PhotoSize"],
      usedByMethods: [],
    },
    {
      name: "PaidMediaPreview",
      href: "https://core.telegram.org/bots/api#paidmediapreview",
      description: "The paid media isn't available before the payment.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the paid media, always "preview"',
        },
        {
          name: "width",
          type: "Integer",
          required: false,
          description: "Optional. Media width as defined by the sender",
        },
        {
          name: "height",
          type: "Integer",
          required: false,
          description: "Optional. Media height as defined by the sender",
        },
        {
          name: "duration",
          type: "Integer",
          required: false,
          description:
            "Optional. Duration of the media in seconds as defined by the sender",
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PaidMediaPurchased",
      href: "https://core.telegram.org/bots/api#paidmediapurchased",
      description:
        "This object contains information about a paid media purchase.",
      fields: [
        {
          name: "from",
          type: "User",
          required: true,
          description: "User who purchased the media",
        },
        {
          name: "paid_media_payload",
          type: "String",
          required: true,
          description: "Bot-specified paid media payload",
        },
      ],
      example: {
        from: {},
        paid_media_payload: "example",
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "PaidMediaVideo",
      href: "https://core.telegram.org/bots/api#paidmediavideo",
      description: "The paid media is a video.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the paid media, always "video"',
        },
        {
          name: "video",
          type: "Video",
          required: true,
          description: "The video",
        },
      ],
      example: {
        type: "example",
        video: {},
      },
      relatedTypes: ["Video"],
      usedByMethods: [],
    },
    {
      name: "PaidMessagePriceChanged",
      href: "https://core.telegram.org/bots/api#paidmessagepricechanged",
      description:
        "Describes a service message about a change in the price of paid messages within a chat.",
      fields: [
        {
          name: "paid_message_star_count",
          type: "Integer",
          required: true,
          description:
            "The new number of Telegram Stars that must be paid by non-administrator users of the supergroup chat for each sent message",
        },
      ],
      example: {
        paid_message_star_count: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PassportData",
      href: "https://core.telegram.org/bots/api#passportdata",
      description:
        "Describes Telegram Passport data shared with the bot by the user.",
      fields: [
        {
          name: "data",
          type: "Array of EncryptedPassportElement",
          required: true,
          description:
            "Array with information about documents and other Telegram Passport elements that was shared with the bot",
        },
        {
          name: "credentials",
          type: "EncryptedCredentials",
          required: true,
          description: "Encrypted credentials required to decrypt the data",
        },
      ],
      example: {
        data: [],
        credentials: {},
      },
      relatedTypes: ["EncryptedCredentials", "EncryptedPassportElement"],
      usedByMethods: [],
    },
    {
      name: "PassportElementError",
      href: "https://core.telegram.org/bots/api#passportelementerror",
      description:
        "This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:\n\n- PassportElementErrorDataField\n\n- PassportElementErrorFrontSide\n\n- PassportElementErrorReverseSide\n\n- PassportElementErrorSelfie\n\n- PassportElementErrorFile\n\n- PassportElementErrorFiles\n\n- PassportElementErrorTranslationFile\n\n- PassportElementErrorTranslationFiles\n\n- PassportElementErrorUnspecified",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: ["setPassportDataErrors"],
    },
    {
      name: "PassportElementErrorDataField",
      href: "https://core.telegram.org/bots/api#passportelementerrordatafield",
      description:
        "Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: "Error source, must be data",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'The section of the user\'s Telegram Passport which has the error, one of "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address"',
        },
        {
          name: "field_name",
          type: "String",
          required: true,
          description: "Name of the data field which has the error",
        },
        {
          name: "data_hash",
          type: "String",
          required: true,
          description: "Base64-encoded data hash",
        },
        {
          name: "message",
          type: "String",
          required: true,
          description: "Error message",
        },
      ],
      example: {
        source: "example",
        type: "example",
        field_name: "example",
        data_hash: "example",
        message: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PassportElementErrorFile",
      href: "https://core.telegram.org/bots/api#passportelementerrorfile",
      description:
        "Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: "Error source, must be file",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'The section of the user\'s Telegram Passport which has the issue, one of "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration"',
        },
        {
          name: "file_hash",
          type: "String",
          required: true,
          description: "Base64-encoded file hash",
        },
        {
          name: "message",
          type: "String",
          required: true,
          description: "Error message",
        },
      ],
      example: {
        source: "example",
        type: "example",
        file_hash: "example",
        message: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PassportElementErrorFiles",
      href: "https://core.telegram.org/bots/api#passportelementerrorfiles",
      description:
        "Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: "Error source, must be files",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'The section of the user\'s Telegram Passport which has the issue, one of "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration"',
        },
        {
          name: "file_hashes",
          type: "Array of String",
          required: true,
          description: "List of base64-encoded file hashes",
        },
        {
          name: "message",
          type: "String",
          required: true,
          description: "Error message",
        },
      ],
      example: {
        source: "example",
        type: "example",
        file_hashes: [],
        message: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PassportElementErrorFrontSide",
      href: "https://core.telegram.org/bots/api#passportelementerrorfrontside",
      description:
        "Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: "Error source, must be front_side",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'The section of the user\'s Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport"',
        },
        {
          name: "file_hash",
          type: "String",
          required: true,
          description:
            "Base64-encoded hash of the file with the front side of the document",
        },
        {
          name: "message",
          type: "String",
          required: true,
          description: "Error message",
        },
      ],
      example: {
        source: "example",
        type: "example",
        file_hash: "example",
        message: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PassportElementErrorReverseSide",
      href: "https://core.telegram.org/bots/api#passportelementerrorreverseside",
      description:
        "Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: "Error source, must be reverse_side",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'The section of the user\'s Telegram Passport which has the issue, one of "driver_license", "identity_card"',
        },
        {
          name: "file_hash",
          type: "String",
          required: true,
          description:
            "Base64-encoded hash of the file with the reverse side of the document",
        },
        {
          name: "message",
          type: "String",
          required: true,
          description: "Error message",
        },
      ],
      example: {
        source: "example",
        type: "example",
        file_hash: "example",
        message: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PassportElementErrorSelfie",
      href: "https://core.telegram.org/bots/api#passportelementerrorselfie",
      description:
        "Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: "Error source, must be selfie",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'The section of the user\'s Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport"',
        },
        {
          name: "file_hash",
          type: "String",
          required: true,
          description: "Base64-encoded hash of the file with the selfie",
        },
        {
          name: "message",
          type: "String",
          required: true,
          description: "Error message",
        },
      ],
      example: {
        source: "example",
        type: "example",
        file_hash: "example",
        message: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PassportElementErrorTranslationFile",
      href: "https://core.telegram.org/bots/api#passportelementerrortranslationfile",
      description:
        "Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: "Error source, must be translation_file",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'Type of element of the user\'s Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration"',
        },
        {
          name: "file_hash",
          type: "String",
          required: true,
          description: "Base64-encoded file hash",
        },
        {
          name: "message",
          type: "String",
          required: true,
          description: "Error message",
        },
      ],
      example: {
        source: "example",
        type: "example",
        file_hash: "example",
        message: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PassportElementErrorTranslationFiles",
      href: "https://core.telegram.org/bots/api#passportelementerrortranslationfiles",
      description:
        "Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: "Error source, must be translation_files",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'Type of element of the user\'s Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration"',
        },
        {
          name: "file_hashes",
          type: "Array of String",
          required: true,
          description: "List of base64-encoded file hashes",
        },
        {
          name: "message",
          type: "String",
          required: true,
          description: "Error message",
        },
      ],
      example: {
        source: "example",
        type: "example",
        file_hashes: [],
        message: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PassportElementErrorUnspecified",
      href: "https://core.telegram.org/bots/api#passportelementerrorunspecified",
      description:
        "Represents an issue in an unspecified place. The error is considered resolved when new data is added.",
      fields: [
        {
          name: "source",
          type: "String",
          required: true,
          description: "Error source, must be unspecified",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            "Type of element of the user's Telegram Passport which has the issue",
        },
        {
          name: "element_hash",
          type: "String",
          required: true,
          description: "Base64-encoded element hash",
        },
        {
          name: "message",
          type: "String",
          required: true,
          description: "Error message",
        },
      ],
      example: {
        source: "example",
        type: "example",
        element_hash: "example",
        message: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PassportFile",
      href: "https://core.telegram.org/bots/api#passportfile",
      description:
        "This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.",
      fields: [
        {
          name: "file_id",
          type: "String",
          required: true,
          description:
            "Identifier for this file, which can be used to download or reuse the file",
        },
        {
          name: "file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "file_size",
          type: "Integer",
          required: true,
          description: "File size in bytes",
        },
        {
          name: "file_date",
          type: "Integer",
          required: true,
          description: "Unix time when the file was uploaded",
        },
      ],
      example: {
        file_id: "example",
        file_unique_id: "example",
        file_size: 1,
        file_date: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "PhotoSize",
      href: "https://core.telegram.org/bots/api#photosize",
      description:
        "This object represents one size of a photo or a file / sticker thumbnail.",
      fields: [
        {
          name: "file_id",
          type: "String",
          required: true,
          description:
            "Identifier for this file, which can be used to download or reuse the file",
        },
        {
          name: "file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "width",
          type: "Integer",
          required: true,
          description: "Photo width",
        },
        {
          name: "height",
          type: "Integer",
          required: true,
          description: "Photo height",
        },
        {
          name: "file_size",
          type: "Integer",
          required: false,
          description: "Optional. File size in bytes",
        },
      ],
      example: {
        file_id: "example",
        file_unique_id: "example",
        width: 1,
        height: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "Poll",
      href: "https://core.telegram.org/bots/api#poll",
      description: "This object contains information about a poll.",
      fields: [
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique poll identifier",
        },
        {
          name: "question",
          type: "String",
          required: true,
          description: "Poll question, 1-300 characters",
        },
        {
          name: "question_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions",
        },
        {
          name: "options",
          type: "Array of PollOption",
          required: true,
          description: "List of poll options",
        },
        {
          name: "total_voter_count",
          type: "Integer",
          required: true,
          description: "Total number of users that voted in the poll",
        },
        {
          name: "is_closed",
          type: "Boolean",
          required: true,
          description: "True, if the poll is closed",
        },
        {
          name: "is_anonymous",
          type: "Boolean",
          required: true,
          description: "True, if the poll is anonymous",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Poll type, currently can be "regular" or "quiz"',
        },
        {
          name: "allows_multiple_answers",
          type: "Boolean",
          required: true,
          description: "True, if the poll allows multiple answers",
        },
        {
          name: "allows_revoting",
          type: "Boolean",
          required: true,
          description:
            "True, if the poll allows to change the chosen answer options",
        },
        {
          name: "correct_option_ids",
          type: "Array of Integer",
          required: false,
          description:
            "Optional. Array of 0-based identifiers of the correct answer options. Available only for polls in quiz mode which are closed or were sent (not forwarded) by the bot or to the private chat with the bot.",
        },
        {
          name: "explanation",
          type: "String",
          required: false,
          description:
            "Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters",
        },
        {
          name: "explanation_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation",
        },
        {
          name: "open_period",
          type: "Integer",
          required: false,
          description:
            "Optional. Amount of time in seconds the poll will be active after creation",
        },
        {
          name: "close_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Point in time (Unix timestamp) when the poll will be automatically closed",
        },
        {
          name: "description",
          type: "String",
          required: false,
          description:
            "Optional. Description of the poll; for polls inside the Message object only",
        },
        {
          name: "description_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the description",
        },
      ],
      example: {
        id: "example",
        question: "Example question",
        options: [],
        total_voter_count: 1,
        is_closed: true,
        is_anonymous: true,
        type: "example",
        allows_multiple_answers: true,
        allows_revoting: true,
      },
      relatedTypes: ["MessageEntity", "PollOption"],
      usedByMethods: ["stopPoll"],
    },
    {
      name: "PollAnswer",
      href: "https://core.telegram.org/bots/api#pollanswer",
      description:
        "This object represents an answer of a user in a non-anonymous poll.",
      fields: [
        {
          name: "poll_id",
          type: "String",
          required: true,
          description: "Unique poll identifier",
        },
        {
          name: "voter_chat",
          type: "Chat",
          required: false,
          description:
            "Optional. The chat that changed the answer to the poll, if the voter is anonymous",
        },
        {
          name: "user",
          type: "User",
          required: false,
          description:
            "Optional. The user that changed the answer to the poll, if the voter isn't anonymous",
        },
        {
          name: "option_ids",
          type: "Array of Integer",
          required: true,
          description:
            "0-based identifiers of chosen answer options. May be empty if the vote was retracted.",
        },
        {
          name: "option_persistent_ids",
          type: "Array of String",
          required: true,
          description:
            "Persistent identifiers of the chosen answer options. May be empty if the vote was retracted.",
        },
      ],
      example: {
        poll_id: "example",
        option_ids: [],
        option_persistent_ids: [],
      },
      relatedTypes: ["Chat", "User"],
      usedByMethods: [],
    },
    {
      name: "PollOption",
      href: "https://core.telegram.org/bots/api#polloption",
      description:
        "This object contains information about one answer option in a poll.",
      fields: [
        {
          name: "persistent_id",
          type: "String",
          required: true,
          description:
            "Unique identifier of the option, persistent on option addition and deletion",
        },
        {
          name: "text",
          type: "String",
          required: true,
          description: "Option text, 1-100 characters",
        },
        {
          name: "text_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts",
        },
        {
          name: "voter_count",
          type: "Integer",
          required: true,
          description:
            "Number of users who voted for this option; may be 0 if unknown",
        },
        {
          name: "added_by_user",
          type: "User",
          required: false,
          description:
            "Optional. User who added the option; omitted if the option wasn't added by a user after poll creation",
        },
        {
          name: "added_by_chat",
          type: "Chat",
          required: false,
          description:
            "Optional. Chat that added the option; omitted if the option wasn't added by a chat after poll creation",
        },
        {
          name: "addition_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Point in time (Unix timestamp) when the option was added; omitted if the option existed in the original poll",
        },
      ],
      example: {
        persistent_id: "example",
        text: "Hello from Telegram Bot API Tester",
        voter_count: 1,
      },
      relatedTypes: ["Chat", "MessageEntity", "User"],
      usedByMethods: [],
    },
    {
      name: "PollOptionAdded",
      href: "https://core.telegram.org/bots/api#polloptionadded",
      description:
        "Describes a service message about an option added to a poll.",
      fields: [
        {
          name: "poll_message",
          type: "MaybeInaccessibleMessage",
          required: false,
          description:
            "Optional. Message containing the poll to which the option was added, if known. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.",
        },
        {
          name: "option_persistent_id",
          type: "String",
          required: true,
          description: "Unique identifier of the added option",
        },
        {
          name: "option_text",
          type: "String",
          required: true,
          description: "Option text",
        },
        {
          name: "option_text_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. Special entities that appear in the option_text",
        },
      ],
      example: {
        option_persistent_id: "example",
        option_text: "Hello from Telegram Bot API Tester",
      },
      relatedTypes: ["MaybeInaccessibleMessage", "MessageEntity"],
      usedByMethods: [],
    },
    {
      name: "PollOptionDeleted",
      href: "https://core.telegram.org/bots/api#polloptiondeleted",
      description:
        "Describes a service message about an option deleted from a poll.",
      fields: [
        {
          name: "poll_message",
          type: "MaybeInaccessibleMessage",
          required: false,
          description:
            "Optional. Message containing the poll from which the option was deleted, if known. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.",
        },
        {
          name: "option_persistent_id",
          type: "String",
          required: true,
          description: "Unique identifier of the deleted option",
        },
        {
          name: "option_text",
          type: "String",
          required: true,
          description: "Option text",
        },
        {
          name: "option_text_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. Special entities that appear in the option_text",
        },
      ],
      example: {
        option_persistent_id: "example",
        option_text: "Hello from Telegram Bot API Tester",
      },
      relatedTypes: ["MaybeInaccessibleMessage", "MessageEntity"],
      usedByMethods: [],
    },
    {
      name: "PreCheckoutQuery",
      href: "https://core.telegram.org/bots/api#precheckoutquery",
      description:
        "This object contains information about an incoming pre-checkout query.",
      fields: [
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique query identifier",
        },
        {
          name: "from",
          type: "User",
          required: true,
          description: "User who sent the query",
        },
        {
          name: "currency",
          type: "String",
          required: true,
          description:
            'Three-letter ISO 4217 currency code, or "XTR" for payments in Telegram Stars',
        },
        {
          name: "total_amount",
          type: "Integer",
          required: true,
          description:
            "Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).",
        },
        {
          name: "invoice_payload",
          type: "String",
          required: true,
          description: "Bot-specified invoice payload",
        },
        {
          name: "shipping_option_id",
          type: "String",
          required: false,
          description:
            "Optional. Identifier of the shipping option chosen by the user",
        },
        {
          name: "order_info",
          type: "OrderInfo",
          required: false,
          description: "Optional. Order information provided by the user",
        },
      ],
      example: {
        id: "example",
        from: {},
        currency: "example",
        total_amount: 1,
        invoice_payload: "example",
      },
      relatedTypes: ["OrderInfo", "User"],
      usedByMethods: [],
    },
    {
      name: "PreparedInlineMessage",
      href: "https://core.telegram.org/bots/api#preparedinlinemessage",
      description:
        "Describes an inline message to be sent by a user of a Mini App.",
      fields: [
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier of the prepared message",
        },
        {
          name: "expiration_date",
          type: "Integer",
          required: true,
          description:
            "Expiration date of the prepared message, in Unix time. Expired prepared messages can no longer be used",
        },
      ],
      example: {
        id: "example",
        expiration_date: 1,
      },
      relatedTypes: [],
      usedByMethods: ["savePreparedInlineMessage"],
    },
    {
      name: "PreparedKeyboardButton",
      href: "https://core.telegram.org/bots/api#preparedkeyboardbutton",
      description:
        "Describes a keyboard button to be used by a user of a Mini App.",
      fields: [
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique identifier of the keyboard button",
        },
      ],
      example: {
        id: "example",
      },
      relatedTypes: [],
      usedByMethods: ["savePreparedKeyboardButton"],
    },
    {
      name: "ProximityAlertTriggered",
      href: "https://core.telegram.org/bots/api#proximityalerttriggered",
      description:
        "This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.",
      fields: [
        {
          name: "traveler",
          type: "User",
          required: true,
          description: "User that triggered the alert",
        },
        {
          name: "watcher",
          type: "User",
          required: true,
          description: "User that set the alert",
        },
        {
          name: "distance",
          type: "Integer",
          required: true,
          description: "The distance between the users",
        },
      ],
      example: {
        traveler: {},
        watcher: {},
        distance: 1,
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "ReactionCount",
      href: "https://core.telegram.org/bots/api#reactioncount",
      description:
        "Represents a reaction added to a message along with the number of times it was added.",
      fields: [
        {
          name: "type",
          type: "ReactionType",
          required: true,
          description: "Type of the reaction",
        },
        {
          name: "total_count",
          type: "Integer",
          required: true,
          description: "Number of times the reaction was added",
        },
      ],
      example: {
        type: {},
        total_count: 1,
      },
      relatedTypes: ["ReactionType"],
      usedByMethods: [],
    },
    {
      name: "ReactionType",
      href: "https://core.telegram.org/bots/api#reactiontype",
      description:
        "This object describes the type of a reaction. Currently, it can be one of\n\n- ReactionTypeEmoji\n\n- ReactionTypeCustomEmoji\n\n- ReactionTypePaid",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: ["setMessageReaction"],
    },
    {
      name: "ReactionTypeCustomEmoji",
      href: "https://core.telegram.org/bots/api#reactiontypecustomemoji",
      description: "The reaction is based on a custom emoji.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the reaction, always "custom_emoji"',
        },
        {
          name: "custom_emoji_id",
          type: "String",
          required: true,
          description: "Custom emoji identifier",
        },
      ],
      example: {
        type: "example",
        custom_emoji_id: "🔥",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ReactionTypeEmoji",
      href: "https://core.telegram.org/bots/api#reactiontypeemoji",
      description: "The reaction is based on an emoji.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the reaction, always "emoji"',
        },
        {
          name: "emoji",
          type: "String",
          required: true,
          description:
            'Reaction emoji. Currently, it can be one of "❤", "👍", "👎", "🔥", "🥰", "👏", "😁", "🤔", "🤯", "😱", "🤬", "😢", "🎉", "🤩", "🤮", "💩", "🙏", "👌", "🕊", "🤡", "🥱", "🥴", "😍", "🐳", "❤‍🔥", "🌚", "🌭", "💯", "🤣", "⚡", "🍌", "🏆", "💔", "🤨", "😐", "🍓", "🍾", "💋", "🖕", "😈", "😴", "😭", "🤓", "👻", "👨‍💻", "👀", "🎃", "🙈", "😇", "😨", "🤝", "✍", "🤗", "🫡", "🎅", "🎄", "☃", "💅", "🤪", "🗿", "🆒", "💘", "🙉", "🦄", "😘", "💊", "🙊", "😎", "👾", "🤷‍♂", "🤷", "🤷‍♀", "😡"',
        },
      ],
      example: {
        type: "example",
        emoji: "🔥",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ReactionTypePaid",
      href: "https://core.telegram.org/bots/api#reactiontypepaid",
      description: "The reaction is paid.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the reaction, always "paid"',
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "RefundedPayment",
      href: "https://core.telegram.org/bots/api#refundedpayment",
      description:
        "This object contains basic information about a refunded payment.",
      fields: [
        {
          name: "currency",
          type: "String",
          required: true,
          description:
            'Three-letter ISO 4217 currency code, or "XTR" for payments in Telegram Stars. Currently, always "XTR"',
        },
        {
          name: "total_amount",
          type: "Integer",
          required: true,
          description:
            "Total refunded price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45, total_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).",
        },
        {
          name: "invoice_payload",
          type: "String",
          required: true,
          description: "Bot-specified invoice payload",
        },
        {
          name: "telegram_payment_charge_id",
          type: "String",
          required: true,
          description: "Telegram payment identifier",
        },
        {
          name: "provider_payment_charge_id",
          type: "String",
          required: false,
          description: "Optional. Provider payment identifier",
        },
      ],
      example: {
        currency: "example",
        total_amount: 1,
        invoice_payload: "example",
        telegram_payment_charge_id: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ReplyKeyboardMarkup",
      href: "https://core.telegram.org/bots/api#replykeyboardmarkup",
      description:
        "This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.",
      fields: [
        {
          name: "keyboard",
          type: "Array of Array of KeyboardButton",
          required: true,
          description:
            "Array of button rows, each represented by an Array of KeyboardButton objects",
        },
        {
          name: "is_persistent",
          type: "Boolean",
          required: false,
          description:
            "Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon.",
        },
        {
          name: "resize_keyboard",
          type: "Boolean",
          required: false,
          description:
            "Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.",
        },
        {
          name: "one_time_keyboard",
          type: "Boolean",
          required: false,
          description:
            "Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false.",
        },
        {
          name: "input_field_placeholder",
          type: "String",
          required: false,
          description:
            "Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters",
        },
        {
          name: "selective",
          type: "Boolean",
          required: false,
          description:
            "Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message. Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.",
        },
      ],
      example: {
        keyboard: [],
      },
      relatedTypes: [],
      usedByMethods: [
        "copyMessage",
        "sendAnimation",
        "sendAudio",
        "sendContact",
        "sendDice",
        "sendDocument",
        "sendLocation",
        "sendMessage",
        "sendPaidMedia",
        "sendPhoto",
        "sendPoll",
        "sendSticker",
        "sendVenue",
        "sendVideo",
        "sendVideoNote",
        "sendVoice",
      ],
    },
    {
      name: "ReplyKeyboardRemove",
      href: "https://core.telegram.org/bots/api#replykeyboardremove",
      description:
        "Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup). Not supported in channels and for messages sent on behalf of a Telegram Business account.",
      fields: [
        {
          name: "remove_keyboard",
          type: "Boolean",
          required: true,
          description:
            "Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)",
        },
        {
          name: "selective",
          type: "Boolean",
          required: false,
          description:
            "Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message. Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.",
        },
      ],
      example: {
        remove_keyboard: true,
      },
      relatedTypes: [],
      usedByMethods: [
        "copyMessage",
        "sendAnimation",
        "sendAudio",
        "sendContact",
        "sendDice",
        "sendDocument",
        "sendLocation",
        "sendMessage",
        "sendPaidMedia",
        "sendPhoto",
        "sendPoll",
        "sendSticker",
        "sendVenue",
        "sendVideo",
        "sendVideoNote",
        "sendVoice",
      ],
    },
    {
      name: "ReplyParameters",
      href: "https://core.telegram.org/bots/api#replyparameters",
      description:
        "Describes reply parameters for the message that is being sent.",
      fields: [
        {
          name: "message_id",
          type: "Integer",
          required: true,
          description:
            "Identifier of the message that will be replied to in the current chat, or in the chat chat_id if it is specified",
        },
        {
          name: "chat_id",
          type: "Integer or String",
          required: false,
          description:
            "Optional. If the message to be replied to is from a different chat, unique identifier for the chat or username of the channel (in the format @channelusername). Not supported for messages sent on behalf of a business account and messages from channel direct messages chats.",
        },
        {
          name: "allow_sending_without_reply",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if the message should be sent even if the specified message to be replied to is not found. Always False for replies in another chat or forum topic. Always True for messages sent on behalf of a business account.",
        },
        {
          name: "quote",
          type: "String",
          required: false,
          description:
            "Optional. Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including bold, italic, underline, strikethrough, spoiler, custom_emoji, and date_time entities. The message will fail to send if the quote isn't found in the original message.",
        },
        {
          name: "quote_parse_mode",
          type: "String",
          required: false,
          description:
            "Optional. Mode for parsing entities in the quote. See formatting options for more details.",
        },
        {
          name: "quote_entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. A JSON-serialized list of special entities that appear in the quote. It can be specified instead of quote_parse_mode.",
        },
        {
          name: "quote_position",
          type: "Integer",
          required: false,
          description:
            "Optional. Position of the quote in the original message in UTF-16 code units",
        },
        {
          name: "checklist_task_id",
          type: "Integer",
          required: false,
          description:
            "Optional. Identifier of the specific checklist task to be replied to",
        },
        {
          name: "poll_option_id",
          type: "String",
          required: false,
          description:
            "Optional. Persistent identifier of the specific poll option to be replied to",
        },
      ],
      example: {
        message_id: 1,
      },
      relatedTypes: ["MessageEntity"],
      usedByMethods: [
        "copyMessage",
        "sendAnimation",
        "sendAudio",
        "sendChecklist",
        "sendContact",
        "sendDice",
        "sendDocument",
        "sendGame",
        "sendInvoice",
        "sendLocation",
        "sendMediaGroup",
        "sendMessage",
        "sendPaidMedia",
        "sendPhoto",
        "sendPoll",
        "sendSticker",
        "sendVenue",
        "sendVideo",
        "sendVideoNote",
        "sendVoice",
      ],
    },
    {
      name: "ResponseParameters",
      href: "https://core.telegram.org/bots/api#responseparameters",
      description: "Describes why a request was unsuccessful.",
      fields: [
        {
          name: "migrate_to_chat_id",
          type: "Integer",
          required: false,
          description:
            "Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.",
        },
        {
          name: "retry_after",
          type: "Integer",
          required: false,
          description:
            "Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated",
        },
      ],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "RevenueWithdrawalState",
      href: "https://core.telegram.org/bots/api#revenuewithdrawalstate",
      description:
        "This object describes the state of a revenue withdrawal operation. Currently, it can be one of\n\n- RevenueWithdrawalStatePending\n\n- RevenueWithdrawalStateSucceeded\n\n- RevenueWithdrawalStateFailed",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "RevenueWithdrawalStateFailed",
      href: "https://core.telegram.org/bots/api#revenuewithdrawalstatefailed",
      description: "The withdrawal failed and the transaction was refunded.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the state, always "failed"',
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "RevenueWithdrawalStatePending",
      href: "https://core.telegram.org/bots/api#revenuewithdrawalstatepending",
      description: "The withdrawal is in progress.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the state, always "pending"',
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "RevenueWithdrawalStateSucceeded",
      href: "https://core.telegram.org/bots/api#revenuewithdrawalstatesucceeded",
      description: "The withdrawal succeeded.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the state, always "succeeded"',
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description: "Date the withdrawal was completed in Unix time",
        },
        {
          name: "url",
          type: "String",
          required: true,
          description:
            "An HTTPS URL that can be used to see transaction details",
        },
      ],
      example: {
        type: "example",
        date: 1,
        url: "https://example.com",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "SentWebAppMessage",
      href: "https://core.telegram.org/bots/api#sentwebappmessage",
      description:
        "Describes an inline message sent by a Web App on behalf of a user.",
      fields: [
        {
          name: "inline_message_id",
          type: "String",
          required: false,
          description:
            "Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message.",
        },
      ],
      example: {},
      relatedTypes: [],
      usedByMethods: ["answerWebAppQuery"],
    },
    {
      name: "SharedUser",
      href: "https://core.telegram.org/bots/api#shareduser",
      description:
        "This object contains information about a user that was shared with the bot using a KeyboardButtonRequestUsers button.",
      fields: [
        {
          name: "user_id",
          type: "Integer",
          required: true,
          description:
            "Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means.",
        },
        {
          name: "first_name",
          type: "String",
          required: false,
          description:
            "Optional. First name of the user, if the name was requested by the bot",
        },
        {
          name: "last_name",
          type: "String",
          required: false,
          description:
            "Optional. Last name of the user, if the name was requested by the bot",
        },
        {
          name: "username",
          type: "String",
          required: false,
          description:
            "Optional. Username of the user, if the username was requested by the bot",
        },
        {
          name: "photo",
          type: "Array of PhotoSize",
          required: false,
          description:
            "Optional. Available sizes of the chat photo, if the photo was requested by the bot",
        },
      ],
      example: {
        user_id: 1,
      },
      relatedTypes: ["PhotoSize"],
      usedByMethods: [],
    },
    {
      name: "ShippingAddress",
      href: "https://core.telegram.org/bots/api#shippingaddress",
      description: "This object represents a shipping address.",
      fields: [
        {
          name: "country_code",
          type: "String",
          required: true,
          description: "Two-letter ISO 3166-1 alpha-2 country code",
        },
        {
          name: "state",
          type: "String",
          required: true,
          description: "State, if applicable",
        },
        {
          name: "city",
          type: "String",
          required: true,
          description: "City",
        },
        {
          name: "street_line1",
          type: "String",
          required: true,
          description: "First line for the address",
        },
        {
          name: "street_line2",
          type: "String",
          required: true,
          description: "Second line for the address",
        },
        {
          name: "post_code",
          type: "String",
          required: true,
          description: "Address post code",
        },
      ],
      example: {
        country_code: "example",
        state: "example",
        city: "example",
        street_line1: "example",
        street_line2: "example",
        post_code: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "ShippingOption",
      href: "https://core.telegram.org/bots/api#shippingoption",
      description: "This object represents one shipping option.",
      fields: [
        {
          name: "id",
          type: "String",
          required: true,
          description: "Shipping option identifier",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Option title",
        },
        {
          name: "prices",
          type: "Array of LabeledPrice",
          required: true,
          description: "List of price portions",
        },
      ],
      example: {
        id: "example",
        title: "Example title",
        prices: [],
      },
      relatedTypes: ["LabeledPrice"],
      usedByMethods: ["answerShippingQuery"],
    },
    {
      name: "ShippingQuery",
      href: "https://core.telegram.org/bots/api#shippingquery",
      description:
        "This object contains information about an incoming shipping query.",
      fields: [
        {
          name: "id",
          type: "String",
          required: true,
          description: "Unique query identifier",
        },
        {
          name: "from",
          type: "User",
          required: true,
          description: "User who sent the query",
        },
        {
          name: "invoice_payload",
          type: "String",
          required: true,
          description: "Bot-specified invoice payload",
        },
        {
          name: "shipping_address",
          type: "ShippingAddress",
          required: true,
          description: "User specified shipping address",
        },
      ],
      example: {
        id: "example",
        from: {},
        invoice_payload: "example",
        shipping_address: {},
      },
      relatedTypes: ["ShippingAddress", "User"],
      usedByMethods: [],
    },
    {
      name: "StarAmount",
      href: "https://core.telegram.org/bots/api#staramount",
      description: "Describes an amount of Telegram Stars.",
      fields: [
        {
          name: "amount",
          type: "Integer",
          required: true,
          description:
            "Integer amount of Telegram Stars, rounded to 0; can be negative",
        },
        {
          name: "nanostar_amount",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of 1/1000000000 shares of Telegram Stars; from -999999999 to 999999999; can be negative if and only if amount is non-positive",
        },
      ],
      example: {
        amount: 1,
      },
      relatedTypes: [],
      usedByMethods: ["getBusinessAccountStarBalance", "getMyStarBalance"],
    },
    {
      name: "StarTransaction",
      href: "https://core.telegram.org/bots/api#startransaction",
      description:
        "Describes a Telegram Star transaction. Note that if the buyer initiates a chargeback with the payment provider from whom they acquired Stars (e.g., Apple, Google) following this transaction, the refunded Stars will be deducted from the bot's balance. This is outside of Telegram's control.",
      fields: [
        {
          name: "id",
          type: "String",
          required: true,
          description:
            "Unique identifier of the transaction. Coincides with the identifier of the original transaction for refund transactions. Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from users.",
        },
        {
          name: "amount",
          type: "Integer",
          required: true,
          description:
            "Integer amount of Telegram Stars transferred by the transaction",
        },
        {
          name: "nanostar_amount",
          type: "Integer",
          required: false,
          description:
            "Optional. The number of 1/1000000000 shares of Telegram Stars transferred by the transaction; from 0 to 999999999",
        },
        {
          name: "date",
          type: "Integer",
          required: true,
          description: "Date the transaction was created in Unix time",
        },
        {
          name: "source",
          type: "TransactionPartner",
          required: false,
          description:
            "Optional. Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal). Only for incoming transactions",
        },
        {
          name: "receiver",
          type: "TransactionPartner",
          required: false,
          description:
            "Optional. Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only for outgoing transactions",
        },
      ],
      example: {
        id: "example",
        amount: 1,
        date: 1,
      },
      relatedTypes: ["TransactionPartner"],
      usedByMethods: [],
    },
    {
      name: "StarTransactions",
      href: "https://core.telegram.org/bots/api#startransactions",
      description: "Contains a list of Telegram Star transactions.",
      fields: [
        {
          name: "transactions",
          type: "Array of StarTransaction",
          required: true,
          description: "The list of transactions",
        },
      ],
      example: {
        transactions: [],
      },
      relatedTypes: ["StarTransaction"],
      usedByMethods: ["getStarTransactions"],
    },
    {
      name: "Sticker",
      href: "https://core.telegram.org/bots/api#sticker",
      description: "This object represents a sticker.",
      fields: [
        {
          name: "file_id",
          type: "String",
          required: true,
          description:
            "Identifier for this file, which can be used to download or reuse the file",
        },
        {
          name: "file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'Type of the sticker, currently one of "regular", "mask", "custom_emoji". The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video.',
        },
        {
          name: "width",
          type: "Integer",
          required: true,
          description: "Sticker width",
        },
        {
          name: "height",
          type: "Integer",
          required: true,
          description: "Sticker height",
        },
        {
          name: "is_animated",
          type: "Boolean",
          required: true,
          description: "True, if the sticker is animated",
        },
        {
          name: "is_video",
          type: "Boolean",
          required: true,
          description: "True, if the sticker is a video sticker",
        },
        {
          name: "thumbnail",
          type: "PhotoSize",
          required: false,
          description:
            "Optional. Sticker thumbnail in the .WEBP or .JPG format",
        },
        {
          name: "emoji",
          type: "String",
          required: false,
          description: "Optional. Emoji associated with the sticker",
        },
        {
          name: "set_name",
          type: "String",
          required: false,
          description:
            "Optional. Name of the sticker set to which the sticker belongs",
        },
        {
          name: "premium_animation",
          type: "File",
          required: false,
          description:
            "Optional. For premium regular stickers, premium animation for the sticker",
        },
        {
          name: "mask_position",
          type: "MaskPosition",
          required: false,
          description:
            "Optional. For mask stickers, the position where the mask should be placed",
        },
        {
          name: "custom_emoji_id",
          type: "String",
          required: false,
          description:
            "Optional. For custom emoji stickers, unique identifier of the custom emoji",
        },
        {
          name: "needs_repainting",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places",
        },
        {
          name: "file_size",
          type: "Integer",
          required: false,
          description: "Optional. File size in bytes",
        },
      ],
      example: {
        file_id: "example",
        file_unique_id: "example",
        type: "example",
        width: 1,
        height: 1,
        is_animated: true,
        is_video: true,
      },
      relatedTypes: ["File", "MaskPosition", "PhotoSize"],
      usedByMethods: ["getCustomEmojiStickers", "getForumTopicIconStickers"],
    },
    {
      name: "StickerSet",
      href: "https://core.telegram.org/bots/api#stickerset",
      description: "This object represents a sticker set.",
      fields: [
        {
          name: "name",
          type: "String",
          required: true,
          description: "Sticker set name",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Sticker set title",
        },
        {
          name: "sticker_type",
          type: "String",
          required: true,
          description:
            'Type of stickers in the set, currently one of "regular", "mask", "custom_emoji"',
        },
        {
          name: "stickers",
          type: "Array of Sticker",
          required: true,
          description: "List of all set stickers",
        },
        {
          name: "thumbnail",
          type: "PhotoSize",
          required: false,
          description:
            "Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format",
        },
      ],
      example: {
        name: "example",
        title: "Example title",
        sticker_type: "C:/path/to/file",
        stickers: [],
      },
      relatedTypes: ["PhotoSize", "Sticker"],
      usedByMethods: ["getStickerSet"],
    },
    {
      name: "Story",
      href: "https://core.telegram.org/bots/api#story",
      description: "This object represents a story.",
      fields: [
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "Chat that posted the story",
        },
        {
          name: "id",
          type: "Integer",
          required: true,
          description: "Unique identifier for the story in the chat",
        },
      ],
      example: {
        chat: {},
        id: 1,
      },
      relatedTypes: ["Chat"],
      usedByMethods: ["editStory", "postStory", "repostStory"],
    },
    {
      name: "StoryArea",
      href: "https://core.telegram.org/bots/api#storyarea",
      description: "Describes a clickable area on a story media.",
      fields: [
        {
          name: "position",
          type: "StoryAreaPosition",
          required: true,
          description: "Position of the area",
        },
        {
          name: "type",
          type: "StoryAreaType",
          required: true,
          description: "Type of the area",
        },
      ],
      example: {
        position: {},
        type: {},
      },
      relatedTypes: ["StoryAreaPosition", "StoryAreaType"],
      usedByMethods: ["editStory", "postStory"],
    },
    {
      name: "StoryAreaPosition",
      href: "https://core.telegram.org/bots/api#storyareaposition",
      description: "Describes the position of a clickable area within a story.",
      fields: [
        {
          name: "x_percentage",
          type: "Float",
          required: true,
          description:
            "The abscissa of the area's center, as a percentage of the media width",
        },
        {
          name: "y_percentage",
          type: "Float",
          required: true,
          description:
            "The ordinate of the area's center, as a percentage of the media height",
        },
        {
          name: "width_percentage",
          type: "Float",
          required: true,
          description:
            "The width of the area's rectangle, as a percentage of the media width",
        },
        {
          name: "height_percentage",
          type: "Float",
          required: true,
          description:
            "The height of the area's rectangle, as a percentage of the media height",
        },
        {
          name: "rotation_angle",
          type: "Float",
          required: true,
          description:
            "The clockwise rotation angle of the rectangle, in degrees; 0-360",
        },
        {
          name: "corner_radius_percentage",
          type: "Float",
          required: true,
          description:
            "The radius of the rectangle corner rounding, as a percentage of the media width",
        },
      ],
      example: {
        x_percentage: 1,
        y_percentage: 1,
        width_percentage: 1,
        height_percentage: 1,
        rotation_angle: 1,
        corner_radius_percentage: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "StoryAreaType",
      href: "https://core.telegram.org/bots/api#storyareatype",
      description:
        "Describes the type of a clickable area on a story. Currently, it can be one of\n\n- StoryAreaTypeLocation\n\n- StoryAreaTypeSuggestedReaction\n\n- StoryAreaTypeLink\n\n- StoryAreaTypeWeather\n\n- StoryAreaTypeUniqueGift",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "StoryAreaTypeLink",
      href: "https://core.telegram.org/bots/api#storyareatypelink",
      description:
        "Describes a story area pointing to an HTTP or tg:// link. Currently, a story can have up to 3 link areas.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the area, always "link"',
        },
        {
          name: "url",
          type: "String",
          required: true,
          description:
            "HTTP or tg:// URL to be opened when the area is clicked",
        },
      ],
      example: {
        type: "example",
        url: "https://example.com",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "StoryAreaTypeLocation",
      href: "https://core.telegram.org/bots/api#storyareatypelocation",
      description:
        "Describes a story area pointing to a location. Currently, a story can have up to 10 location areas.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the area, always "location"',
        },
        {
          name: "latitude",
          type: "Float",
          required: true,
          description: "Location latitude in degrees",
        },
        {
          name: "longitude",
          type: "Float",
          required: true,
          description: "Location longitude in degrees",
        },
        {
          name: "address",
          type: "LocationAddress",
          required: false,
          description: "Optional. Address of the location",
        },
      ],
      example: {
        type: "example",
        latitude: 37.7749,
        longitude: -122.4194,
      },
      relatedTypes: ["LocationAddress"],
      usedByMethods: [],
    },
    {
      name: "StoryAreaTypeSuggestedReaction",
      href: "https://core.telegram.org/bots/api#storyareatypesuggestedreaction",
      description:
        "Describes a story area pointing to a suggested reaction. Currently, a story can have up to 5 suggested reaction areas.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the area, always "suggested_reaction"',
        },
        {
          name: "reaction_type",
          type: "ReactionType",
          required: true,
          description: "Type of the reaction",
        },
        {
          name: "is_dark",
          type: "Boolean",
          required: false,
          description:
            "Optional. Pass True if the reaction area has a dark background",
        },
        {
          name: "is_flipped",
          type: "Boolean",
          required: false,
          description: "Optional. Pass True if reaction area corner is flipped",
        },
      ],
      example: {
        type: "example",
        reaction_type: {},
      },
      relatedTypes: ["ReactionType"],
      usedByMethods: [],
    },
    {
      name: "StoryAreaTypeUniqueGift",
      href: "https://core.telegram.org/bots/api#storyareatypeuniquegift",
      description:
        "Describes a story area pointing to a unique gift. Currently, a story can have at most 1 unique gift area.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the area, always "unique_gift"',
        },
        {
          name: "name",
          type: "String",
          required: true,
          description: "Unique name of the gift",
        },
      ],
      example: {
        type: "example",
        name: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "StoryAreaTypeWeather",
      href: "https://core.telegram.org/bots/api#storyareatypeweather",
      description:
        "Describes a story area containing weather information. Currently, a story can have up to 3 weather areas.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the area, always "weather"',
        },
        {
          name: "temperature",
          type: "Float",
          required: true,
          description: "Temperature, in degree Celsius",
        },
        {
          name: "emoji",
          type: "String",
          required: true,
          description: "Emoji representing the weather",
        },
        {
          name: "background_color",
          type: "Integer",
          required: true,
          description: "A color of the area background in the ARGB format",
        },
      ],
      example: {
        type: "example",
        temperature: 1,
        emoji: "🔥",
        background_color: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "SuccessfulPayment",
      href: "https://core.telegram.org/bots/api#successfulpayment",
      description:
        "This object contains basic information about a successful payment. Note that if the buyer initiates a chargeback with the relevant payment provider following this transaction, the funds may be debited from your balance. This is outside of Telegram's control.",
      fields: [
        {
          name: "currency",
          type: "String",
          required: true,
          description:
            'Three-letter ISO 4217 currency code, or "XTR" for payments in Telegram Stars',
        },
        {
          name: "total_amount",
          type: "Integer",
          required: true,
          description:
            "Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).",
        },
        {
          name: "invoice_payload",
          type: "String",
          required: true,
          description: "Bot-specified invoice payload",
        },
        {
          name: "subscription_expiration_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Expiration date of the subscription, in Unix time; for recurring payments only",
        },
        {
          name: "is_recurring",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the payment is a recurring payment for a subscription",
        },
        {
          name: "is_first_recurring",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the payment is the first payment for a subscription",
        },
        {
          name: "shipping_option_id",
          type: "String",
          required: false,
          description:
            "Optional. Identifier of the shipping option chosen by the user",
        },
        {
          name: "order_info",
          type: "OrderInfo",
          required: false,
          description: "Optional. Order information provided by the user",
        },
        {
          name: "telegram_payment_charge_id",
          type: "String",
          required: true,
          description: "Telegram payment identifier",
        },
        {
          name: "provider_payment_charge_id",
          type: "String",
          required: true,
          description: "Provider payment identifier",
        },
      ],
      example: {
        currency: "example",
        total_amount: 1,
        invoice_payload: "example",
        telegram_payment_charge_id: "example",
        provider_payment_charge_id: "example",
      },
      relatedTypes: ["OrderInfo"],
      usedByMethods: [],
    },
    {
      name: "SuggestedPostApprovalFailed",
      href: "https://core.telegram.org/bots/api#suggestedpostapprovalfailed",
      description:
        "Describes a service message about the failed approval of a suggested post. Currently, only caused by insufficient user funds at the time of approval.",
      fields: [
        {
          name: "suggested_post_message",
          type: "Message",
          required: false,
          description:
            "Optional. Message containing the suggested post whose approval has failed. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.",
        },
        {
          name: "price",
          type: "SuggestedPostPrice",
          required: true,
          description: "Expected price of the post",
        },
      ],
      example: {
        price: {},
      },
      relatedTypes: ["Message", "SuggestedPostPrice"],
      usedByMethods: [],
    },
    {
      name: "SuggestedPostApproved",
      href: "https://core.telegram.org/bots/api#suggestedpostapproved",
      description:
        "Describes a service message about the approval of a suggested post.",
      fields: [
        {
          name: "suggested_post_message",
          type: "Message",
          required: false,
          description:
            "Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.",
        },
        {
          name: "price",
          type: "SuggestedPostPrice",
          required: false,
          description: "Optional. Amount paid for the post",
        },
        {
          name: "send_date",
          type: "Integer",
          required: true,
          description: "Date when the post will be published",
        },
      ],
      example: {
        send_date: 1,
      },
      relatedTypes: ["Message", "SuggestedPostPrice"],
      usedByMethods: [],
    },
    {
      name: "SuggestedPostDeclined",
      href: "https://core.telegram.org/bots/api#suggestedpostdeclined",
      description:
        "Describes a service message about the rejection of a suggested post.",
      fields: [
        {
          name: "suggested_post_message",
          type: "Message",
          required: false,
          description:
            "Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.",
        },
        {
          name: "comment",
          type: "String",
          required: false,
          description: "Optional. Comment with which the post was declined",
        },
      ],
      example: {},
      relatedTypes: ["Message"],
      usedByMethods: [],
    },
    {
      name: "SuggestedPostInfo",
      href: "https://core.telegram.org/bots/api#suggestedpostinfo",
      description: "Contains information about a suggested post.",
      fields: [
        {
          name: "state",
          type: "String",
          required: true,
          description:
            'State of the suggested post. Currently, it can be one of "pending", "approved", "declined".',
        },
        {
          name: "price",
          type: "SuggestedPostPrice",
          required: false,
          description:
            "Optional. Proposed price of the post. If the field is omitted, then the post is unpaid.",
        },
        {
          name: "send_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Proposed send date of the post. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user or administrator who approves it.",
        },
      ],
      example: {
        state: "example",
      },
      relatedTypes: ["SuggestedPostPrice"],
      usedByMethods: [],
    },
    {
      name: "SuggestedPostPaid",
      href: "https://core.telegram.org/bots/api#suggestedpostpaid",
      description:
        "Describes a service message about a successful payment for a suggested post.",
      fields: [
        {
          name: "suggested_post_message",
          type: "Message",
          required: false,
          description:
            "Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.",
        },
        {
          name: "currency",
          type: "String",
          required: true,
          description:
            'Currency in which the payment was made. Currently, one of "XTR" for Telegram Stars or "TON" for toncoins',
        },
        {
          name: "amount",
          type: "Integer",
          required: false,
          description:
            "Optional. The amount of the currency that was received by the channel in nanotoncoins; for payments in toncoins only",
        },
        {
          name: "star_amount",
          type: "StarAmount",
          required: false,
          description:
            "Optional. The amount of Telegram Stars that was received by the channel; for payments in Telegram Stars only",
        },
      ],
      example: {
        currency: "example",
      },
      relatedTypes: ["Message", "StarAmount"],
      usedByMethods: [],
    },
    {
      name: "SuggestedPostParameters",
      href: "https://core.telegram.org/bots/api#suggestedpostparameters",
      description:
        "Contains parameters of a post that is being suggested by the bot.",
      fields: [
        {
          name: "price",
          type: "SuggestedPostPrice",
          required: false,
          description:
            "Optional. Proposed price for the post. If the field is omitted, then the post is unpaid.",
        },
        {
          name: "send_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Proposed send date of the post. If specified, then the date must be between 300 second and 2678400 seconds (30 days) in the future. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user who approves it.",
        },
      ],
      example: {},
      relatedTypes: ["SuggestedPostPrice"],
      usedByMethods: [
        "copyMessage",
        "forwardMessage",
        "sendAnimation",
        "sendAudio",
        "sendContact",
        "sendDice",
        "sendDocument",
        "sendInvoice",
        "sendLocation",
        "sendMessage",
        "sendPaidMedia",
        "sendPhoto",
        "sendSticker",
        "sendVenue",
        "sendVideo",
        "sendVideoNote",
        "sendVoice",
      ],
    },
    {
      name: "SuggestedPostPrice",
      href: "https://core.telegram.org/bots/api#suggestedpostprice",
      description: "Describes the price of a suggested post.",
      fields: [
        {
          name: "currency",
          type: "String",
          required: true,
          description:
            'Currency in which the post will be paid. Currently, must be one of "XTR" for Telegram Stars or "TON" for toncoins',
        },
        {
          name: "amount",
          type: "Integer",
          required: true,
          description:
            "The amount of the currency that will be paid for the post in the smallest units of the currency, i.e. Telegram Stars or nanotoncoins. Currently, price in Telegram Stars must be between 5 and 100000, and price in nanotoncoins must be between 10000000 and 10000000000000.",
        },
      ],
      example: {
        currency: "example",
        amount: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "SuggestedPostRefunded",
      href: "https://core.telegram.org/bots/api#suggestedpostrefunded",
      description:
        "Describes a service message about a payment refund for a suggested post.",
      fields: [
        {
          name: "suggested_post_message",
          type: "Message",
          required: false,
          description:
            "Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.",
        },
        {
          name: "reason",
          type: "String",
          required: true,
          description:
            'Reason for the refund. Currently, one of "post_deleted" if the post was deleted within 24 hours of being posted or removed from scheduled messages without being posted, or "payment_refunded" if the payer refunded their payment.',
        },
      ],
      example: {
        reason: "example",
      },
      relatedTypes: ["Message"],
      usedByMethods: [],
    },
    {
      name: "SwitchInlineQueryChosenChat",
      href: "https://core.telegram.org/bots/api#switchinlinequerychosenchat",
      description:
        "This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.",
      fields: [
        {
          name: "query",
          type: "String",
          required: false,
          description:
            "Optional. The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted",
        },
        {
          name: "allow_user_chats",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if private chats with users can be chosen",
        },
        {
          name: "allow_bot_chats",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if private chats with bots can be chosen",
        },
        {
          name: "allow_group_chats",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if group and supergroup chats can be chosen",
        },
        {
          name: "allow_channel_chats",
          type: "Boolean",
          required: false,
          description: "Optional. True, if channel chats can be chosen",
        },
      ],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "TextQuote",
      href: "https://core.telegram.org/bots/api#textquote",
      description:
        "This object contains information about the quoted part of a message that is replied to by the given message.",
      fields: [
        {
          name: "text",
          type: "String",
          required: true,
          description:
            "Text of the quoted part of a message that is replied to by the given message",
        },
        {
          name: "entities",
          type: "Array of MessageEntity",
          required: false,
          description:
            "Optional. Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, custom_emoji, and date_time entities are kept in quotes.",
        },
        {
          name: "position",
          type: "Integer",
          required: true,
          description:
            "Approximate quote position in the original message in UTF-16 code units as specified by the sender",
        },
        {
          name: "is_manual",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.",
        },
      ],
      example: {
        text: "Hello from Telegram Bot API Tester",
        position: 1,
      },
      relatedTypes: ["MessageEntity"],
      usedByMethods: [],
    },
    {
      name: "TransactionPartner",
      href: "https://core.telegram.org/bots/api#transactionpartner",
      description:
        "This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of\n\n- TransactionPartnerUser\n\n- TransactionPartnerChat\n\n- TransactionPartnerAffiliateProgram\n\n- TransactionPartnerFragment\n\n- TransactionPartnerTelegramAds\n\n- TransactionPartnerTelegramApi\n\n- TransactionPartnerOther",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "TransactionPartnerAffiliateProgram",
      href: "https://core.telegram.org/bots/api#transactionpartneraffiliateprogram",
      description:
        "Describes the affiliate program that issued the affiliate commission received via this transaction.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description:
            'Type of the transaction partner, always "affiliate_program"',
        },
        {
          name: "sponsor_user",
          type: "User",
          required: false,
          description:
            "Optional. Information about the bot that sponsored the affiliate program",
        },
        {
          name: "commission_per_mille",
          type: "Integer",
          required: true,
          description:
            "The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program sponsor from referred users",
        },
      ],
      example: {
        type: "example",
        commission_per_mille: 1,
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "TransactionPartnerChat",
      href: "https://core.telegram.org/bots/api#transactionpartnerchat",
      description: "Describes a transaction with a chat.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the transaction partner, always "chat"',
        },
        {
          name: "chat",
          type: "Chat",
          required: true,
          description: "Information about the chat",
        },
        {
          name: "gift",
          type: "Gift",
          required: false,
          description: "Optional. The gift sent to the chat by the bot",
        },
      ],
      example: {
        type: "example",
        chat: {},
      },
      relatedTypes: ["Chat", "Gift"],
      usedByMethods: [],
    },
    {
      name: "TransactionPartnerFragment",
      href: "https://core.telegram.org/bots/api#transactionpartnerfragment",
      description: "Describes a withdrawal transaction with Fragment.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the transaction partner, always "fragment"',
        },
        {
          name: "withdrawal_state",
          type: "RevenueWithdrawalState",
          required: false,
          description:
            "Optional. State of the transaction if the transaction is outgoing",
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: ["RevenueWithdrawalState"],
      usedByMethods: [],
    },
    {
      name: "TransactionPartnerOther",
      href: "https://core.telegram.org/bots/api#transactionpartnerother",
      description:
        "Describes a transaction with an unknown source or recipient.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the transaction partner, always "other"',
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "TransactionPartnerTelegramAds",
      href: "https://core.telegram.org/bots/api#transactionpartnertelegramads",
      description:
        "Describes a withdrawal transaction to the Telegram Ads platform.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the transaction partner, always "telegram_ads"',
        },
      ],
      example: {
        type: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "TransactionPartnerTelegramApi",
      href: "https://core.telegram.org/bots/api#transactionpartnertelegramapi",
      description:
        "Describes a transaction with payment for paid broadcasting.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the transaction partner, always "telegram_api"',
        },
        {
          name: "request_count",
          type: "Integer",
          required: true,
          description:
            "The number of successful requests that exceeded regular limits and were therefore billed",
        },
      ],
      example: {
        type: "example",
        request_count: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "TransactionPartnerUser",
      href: "https://core.telegram.org/bots/api#transactionpartneruser",
      description: "Describes a transaction with a user.",
      fields: [
        {
          name: "type",
          type: "String",
          required: true,
          description: 'Type of the transaction partner, always "user"',
        },
        {
          name: "transaction_type",
          type: "String",
          required: true,
          description:
            'Type of the transaction, currently one of "invoice_payment" for payments via invoices, "paid_media_payment" for payments for paid media, "gift_purchase" for gifts sent by the bot, "premium_purchase" for Telegram Premium subscriptions gifted by the bot, "business_account_transfer" for direct transfers from managed business accounts',
        },
        {
          name: "user",
          type: "User",
          required: true,
          description: "Information about the user",
        },
        {
          name: "affiliate",
          type: "AffiliateInfo",
          required: false,
          description:
            'Optional. Information about the affiliate that received a commission via this transaction. Can be available only for "invoice_payment" and "paid_media_payment" transactions.',
        },
        {
          name: "invoice_payload",
          type: "String",
          required: false,
          description:
            'Optional. Bot-specified invoice payload. Can be available only for "invoice_payment" transactions.',
        },
        {
          name: "subscription_period",
          type: "Integer",
          required: false,
          description:
            'Optional. The duration of the paid subscription. Can be available only for "invoice_payment" transactions.',
        },
        {
          name: "paid_media",
          type: "Array of PaidMedia",
          required: false,
          description:
            'Optional. Information about the paid media bought by the user; for "paid_media_payment" transactions only',
        },
        {
          name: "paid_media_payload",
          type: "String",
          required: false,
          description:
            'Optional. Bot-specified paid media payload. Can be available only for "paid_media_payment" transactions.',
        },
        {
          name: "gift",
          type: "Gift",
          required: false,
          description:
            'Optional. The gift sent to the user by the bot; for "gift_purchase" transactions only',
        },
        {
          name: "premium_subscription_duration",
          type: "Integer",
          required: false,
          description:
            'Optional. Number of months the gifted Telegram Premium subscription will be active for; for "premium_purchase" transactions only',
        },
      ],
      example: {
        type: "example",
        transaction_type: "example",
        user: {},
      },
      relatedTypes: ["AffiliateInfo", "Gift", "PaidMedia", "User"],
      usedByMethods: [],
    },
    {
      name: "UniqueGift",
      href: "https://core.telegram.org/bots/api#uniquegift",
      description:
        "This object describes a unique gift that was upgraded from a regular gift.",
      fields: [
        {
          name: "gift_id",
          type: "String",
          required: true,
          description:
            "Identifier of the regular gift from which the gift was upgraded",
        },
        {
          name: "base_name",
          type: "String",
          required: true,
          description:
            "Human-readable name of the regular gift from which this unique gift was upgraded",
        },
        {
          name: "name",
          type: "String",
          required: true,
          description:
            "Unique name of the gift. This name can be used in https://t.me/nft/... links and story areas",
        },
        {
          name: "number",
          type: "Integer",
          required: true,
          description:
            "Unique number of the upgraded gift among gifts upgraded from the same regular gift",
        },
        {
          name: "model",
          type: "UniqueGiftModel",
          required: true,
          description: "Model of the gift",
        },
        {
          name: "symbol",
          type: "UniqueGiftSymbol",
          required: true,
          description: "Symbol of the gift",
        },
        {
          name: "backdrop",
          type: "UniqueGiftBackdrop",
          required: true,
          description: "Backdrop of the gift",
        },
        {
          name: "is_premium",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the original regular gift was exclusively purchaseable by Telegram Premium subscribers",
        },
        {
          name: "is_burned",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift was used to craft another gift and isn't available anymore",
        },
        {
          name: "is_from_blockchain",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the gift is assigned from the TON blockchain and can't be resold or transferred in Telegram",
        },
        {
          name: "colors",
          type: "UniqueGiftColors",
          required: false,
          description:
            "Optional. The color scheme that can be used by the gift's owner for the chat's name, replies to messages and link previews; for business account gifts and gifts that are currently on sale only",
        },
        {
          name: "publisher_chat",
          type: "Chat",
          required: false,
          description:
            "Optional. Information about the chat that published the gift",
        },
      ],
      example: {
        gift_id: "example",
        base_name: "example",
        name: "example",
        number: 1,
        model: {},
        symbol: {},
        backdrop: {},
      },
      relatedTypes: [
        "Chat",
        "UniqueGiftBackdrop",
        "UniqueGiftColors",
        "UniqueGiftModel",
        "UniqueGiftSymbol",
      ],
      usedByMethods: [],
    },
    {
      name: "UniqueGiftBackdrop",
      href: "https://core.telegram.org/bots/api#uniquegiftbackdrop",
      description: "This object describes the backdrop of a unique gift.",
      fields: [
        {
          name: "name",
          type: "String",
          required: true,
          description: "Name of the backdrop",
        },
        {
          name: "colors",
          type: "UniqueGiftBackdropColors",
          required: true,
          description: "Colors of the backdrop",
        },
        {
          name: "rarity_per_mille",
          type: "Integer",
          required: true,
          description:
            "The number of unique gifts that receive this backdrop for every 1000 gifts upgraded",
        },
      ],
      example: {
        name: "example",
        colors: {},
        rarity_per_mille: 1,
      },
      relatedTypes: ["UniqueGiftBackdropColors"],
      usedByMethods: [],
    },
    {
      name: "UniqueGiftBackdropColors",
      href: "https://core.telegram.org/bots/api#uniquegiftbackdropcolors",
      description:
        "This object describes the colors of the backdrop of a unique gift.",
      fields: [
        {
          name: "center_color",
          type: "Integer",
          required: true,
          description: "The color in the center of the backdrop in RGB format",
        },
        {
          name: "edge_color",
          type: "Integer",
          required: true,
          description: "The color on the edges of the backdrop in RGB format",
        },
        {
          name: "symbol_color",
          type: "Integer",
          required: true,
          description: "The color to be applied to the symbol in RGB format",
        },
        {
          name: "text_color",
          type: "Integer",
          required: true,
          description: "The color for the text on the backdrop in RGB format",
        },
      ],
      example: {
        center_color: 1,
        edge_color: 1,
        symbol_color: 1,
        text_color: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "UniqueGiftColors",
      href: "https://core.telegram.org/bots/api#uniquegiftcolors",
      description:
        "This object contains information about the color scheme for a user's name, message replies and link previews based on a unique gift.",
      fields: [
        {
          name: "model_custom_emoji_id",
          type: "String",
          required: true,
          description: "Custom emoji identifier of the unique gift's model",
        },
        {
          name: "symbol_custom_emoji_id",
          type: "String",
          required: true,
          description: "Custom emoji identifier of the unique gift's symbol",
        },
        {
          name: "light_theme_main_color",
          type: "Integer",
          required: true,
          description: "Main color used in light themes; RGB format",
        },
        {
          name: "light_theme_other_colors",
          type: "Array of Integer",
          required: true,
          description:
            "List of 1-3 additional colors used in light themes; RGB format",
        },
        {
          name: "dark_theme_main_color",
          type: "Integer",
          required: true,
          description: "Main color used in dark themes; RGB format",
        },
        {
          name: "dark_theme_other_colors",
          type: "Array of Integer",
          required: true,
          description:
            "List of 1-3 additional colors used in dark themes; RGB format",
        },
      ],
      example: {
        model_custom_emoji_id: "🔥",
        symbol_custom_emoji_id: "🔥",
        light_theme_main_color: 1,
        light_theme_other_colors: [],
        dark_theme_main_color: 1,
        dark_theme_other_colors: [],
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "UniqueGiftInfo",
      href: "https://core.telegram.org/bots/api#uniquegiftinfo",
      description:
        "Describes a service message about a unique gift that was sent or received.",
      fields: [
        {
          name: "gift",
          type: "UniqueGift",
          required: true,
          description: "Information about the gift",
        },
        {
          name: "origin",
          type: "String",
          required: true,
          description:
            'Origin of the gift. Currently, either "upgrade" for gifts upgraded from regular gifts, "transfer" for gifts transferred from other users or channels, "resale" for gifts bought from other users, "gifted_upgrade" for upgrades purchased after the gift was sent, or "offer" for gifts bought or sold through gift purchase offers',
        },
        {
          name: "last_resale_currency",
          type: "String",
          required: false,
          description:
            'Optional. For gifts bought from other users, the currency in which the payment for the gift was done. Currently, one of "XTR" for Telegram Stars or "TON" for toncoins.',
        },
        {
          name: "last_resale_amount",
          type: "Integer",
          required: false,
          description:
            "Optional. For gifts bought from other users, the price paid for the gift in either Telegram Stars or nanotoncoins",
        },
        {
          name: "owned_gift_id",
          type: "String",
          required: false,
          description:
            "Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts",
        },
        {
          name: "transfer_star_count",
          type: "Integer",
          required: false,
          description:
            "Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift",
        },
        {
          name: "next_transfer_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now",
        },
      ],
      example: {
        gift: {},
        origin: "example",
      },
      relatedTypes: ["UniqueGift"],
      usedByMethods: [],
    },
    {
      name: "UniqueGiftModel",
      href: "https://core.telegram.org/bots/api#uniquegiftmodel",
      description: "This object describes the model of a unique gift.",
      fields: [
        {
          name: "name",
          type: "String",
          required: true,
          description: "Name of the model",
        },
        {
          name: "sticker",
          type: "Sticker",
          required: true,
          description: "The sticker that represents the unique gift",
        },
        {
          name: "rarity_per_mille",
          type: "Integer",
          required: true,
          description:
            "The number of unique gifts that receive this model for every 1000 gift upgrades. Always 0 for crafted gifts.",
        },
        {
          name: "rarity",
          type: "String",
          required: false,
          description:
            'Optional. Rarity of the model if it is a crafted model. Currently, can be "uncommon", "rare", "epic", or "legendary".',
        },
      ],
      example: {
        name: "example",
        sticker: {},
        rarity_per_mille: 1,
      },
      relatedTypes: ["Sticker"],
      usedByMethods: [],
    },
    {
      name: "UniqueGiftSymbol",
      href: "https://core.telegram.org/bots/api#uniquegiftsymbol",
      description:
        "This object describes the symbol shown on the pattern of a unique gift.",
      fields: [
        {
          name: "name",
          type: "String",
          required: true,
          description: "Name of the symbol",
        },
        {
          name: "sticker",
          type: "Sticker",
          required: true,
          description: "The sticker that represents the unique gift",
        },
        {
          name: "rarity_per_mille",
          type: "Integer",
          required: true,
          description:
            "The number of unique gifts that receive this model for every 1000 gifts upgraded",
        },
      ],
      example: {
        name: "example",
        sticker: {},
        rarity_per_mille: 1,
      },
      relatedTypes: ["Sticker"],
      usedByMethods: [],
    },
    {
      name: "Update",
      href: "https://core.telegram.org/bots/api#update",
      description:
        "This object represents an incoming update.\n\nAt most one of the optional parameters can be present in any given update.",
      fields: [
        {
          name: "update_id",
          type: "Integer",
          required: true,
          description:
            "The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.",
        },
        {
          name: "message",
          type: "Message",
          required: false,
          description:
            "Optional. New incoming message of any kind - text, photo, sticker, etc.",
        },
        {
          name: "edited_message",
          type: "Message",
          required: false,
          description:
            "Optional. New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.",
        },
        {
          name: "channel_post",
          type: "Message",
          required: false,
          description:
            "Optional. New incoming channel post of any kind - text, photo, sticker, etc.",
        },
        {
          name: "edited_channel_post",
          type: "Message",
          required: false,
          description:
            "Optional. New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.",
        },
        {
          name: "business_connection",
          type: "BusinessConnection",
          required: false,
          description:
            "Optional. The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot",
        },
        {
          name: "business_message",
          type: "Message",
          required: false,
          description:
            "Optional. New message from a connected business account",
        },
        {
          name: "edited_business_message",
          type: "Message",
          required: false,
          description:
            "Optional. New version of a message from a connected business account",
        },
        {
          name: "deleted_business_messages",
          type: "BusinessMessagesDeleted",
          required: false,
          description:
            "Optional. Messages were deleted from a connected business account",
        },
        {
          name: "message_reaction",
          type: "MessageReactionUpdated",
          required: false,
          description:
            'Optional. A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates. The update isn\'t received for reactions set by bots.',
        },
        {
          name: "message_reaction_count",
          type: "MessageReactionCountUpdated",
          required: false,
          description:
            'Optional. Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes.',
        },
        {
          name: "inline_query",
          type: "InlineQuery",
          required: false,
          description: "Optional. New incoming inline query",
        },
        {
          name: "chosen_inline_result",
          type: "ChosenInlineResult",
          required: false,
          description:
            "Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.",
        },
        {
          name: "callback_query",
          type: "CallbackQuery",
          required: false,
          description: "Optional. New incoming callback query",
        },
        {
          name: "shipping_query",
          type: "ShippingQuery",
          required: false,
          description:
            "Optional. New incoming shipping query. Only for invoices with flexible price",
        },
        {
          name: "pre_checkout_query",
          type: "PreCheckoutQuery",
          required: false,
          description:
            "Optional. New incoming pre-checkout query. Contains full information about checkout",
        },
        {
          name: "purchased_paid_media",
          type: "PaidMediaPurchased",
          required: false,
          description:
            "Optional. A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat",
        },
        {
          name: "poll",
          type: "Poll",
          required: false,
          description:
            "Optional. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot",
        },
        {
          name: "poll_answer",
          type: "PollAnswer",
          required: false,
          description:
            "Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.",
        },
        {
          name: "my_chat_member",
          type: "ChatMemberUpdated",
          required: false,
          description:
            "Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.",
        },
        {
          name: "chat_member",
          type: "ChatMemberUpdated",
          required: false,
          description:
            'Optional. A chat member\'s status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.',
        },
        {
          name: "chat_join_request",
          type: "ChatJoinRequest",
          required: false,
          description:
            "Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates.",
        },
        {
          name: "chat_boost",
          type: "ChatBoostUpdated",
          required: false,
          description:
            "Optional. A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.",
        },
        {
          name: "removed_chat_boost",
          type: "ChatBoostRemoved",
          required: false,
          description:
            "Optional. A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.",
        },
        {
          name: "managed_bot",
          type: "ManagedBotUpdated",
          required: false,
          description:
            "Optional. A new bot was created to be managed by the bot, or token or owner of a managed bot was changed",
        },
      ],
      example: {
        update_id: 1,
      },
      relatedTypes: [
        "BusinessConnection",
        "BusinessMessagesDeleted",
        "CallbackQuery",
        "ChatBoostRemoved",
        "ChatBoostUpdated",
        "ChatJoinRequest",
        "ChatMemberUpdated",
        "ChosenInlineResult",
        "InlineQuery",
        "ManagedBotUpdated",
        "Message",
        "MessageReactionCountUpdated",
        "MessageReactionUpdated",
        "PaidMediaPurchased",
        "Poll",
        "PollAnswer",
        "PreCheckoutQuery",
        "ShippingQuery",
      ],
      usedByMethods: ["getUpdates"],
    },
    {
      name: "User",
      href: "https://core.telegram.org/bots/api#user",
      description: "This object represents a Telegram user or bot.",
      fields: [
        {
          name: "id",
          type: "Integer",
          required: true,
          description:
            "Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.",
        },
        {
          name: "is_bot",
          type: "Boolean",
          required: true,
          description: "True, if this user is a bot",
        },
        {
          name: "first_name",
          type: "String",
          required: true,
          description: "User's or bot's first name",
        },
        {
          name: "last_name",
          type: "String",
          required: false,
          description: "Optional. User's or bot's last name",
        },
        {
          name: "username",
          type: "String",
          required: false,
          description: "Optional. User's or bot's username",
        },
        {
          name: "language_code",
          type: "String",
          required: false,
          description: "Optional. IETF language tag of the user's language",
        },
        {
          name: "is_premium",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if this user is a Telegram Premium user",
        },
        {
          name: "added_to_attachment_menu",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if this user added the bot to the attachment menu",
        },
        {
          name: "can_join_groups",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can be invited to groups. Returned only in getMe.",
        },
        {
          name: "can_read_all_group_messages",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if privacy mode is disabled for the bot. Returned only in getMe.",
        },
        {
          name: "supports_inline_queries",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot supports inline queries. Returned only in getMe.",
        },
        {
          name: "can_connect_to_business",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in getMe.",
        },
        {
          name: "has_main_web_app",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot has a main Web App. Returned only in getMe.",
        },
        {
          name: "has_topics_enabled",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot has forum topic mode enabled in private chats. Returned only in getMe.",
        },
        {
          name: "allows_users_to_create_topics",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the bot allows users to create and delete topics in private chats. Returned only in getMe.",
        },
        {
          name: "can_manage_bots",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if other bots can be created to be controlled by the bot. Returned only in getMe.",
        },
      ],
      example: {
        id: 1,
        is_bot: true,
        first_name: "example",
      },
      relatedTypes: [],
      usedByMethods: ["getMe"],
    },
    {
      name: "UserChatBoosts",
      href: "https://core.telegram.org/bots/api#userchatboosts",
      description:
        "This object represents a list of boosts added to a chat by a user.",
      fields: [
        {
          name: "boosts",
          type: "Array of ChatBoost",
          required: true,
          description: "The list of boosts added to the chat by the user",
        },
      ],
      example: {
        boosts: [],
      },
      relatedTypes: ["ChatBoost"],
      usedByMethods: ["getUserChatBoosts"],
    },
    {
      name: "UserProfileAudios",
      href: "https://core.telegram.org/bots/api#userprofileaudios",
      description:
        "This object represents the audios displayed on a user's profile.",
      fields: [
        {
          name: "total_count",
          type: "Integer",
          required: true,
          description: "Total number of profile audios for the target user",
        },
        {
          name: "audios",
          type: "Array of Audio",
          required: true,
          description: "Requested profile audios",
        },
      ],
      example: {
        total_count: 1,
        audios: [],
      },
      relatedTypes: ["Audio"],
      usedByMethods: ["getUserProfileAudios"],
    },
    {
      name: "UserProfilePhotos",
      href: "https://core.telegram.org/bots/api#userprofilephotos",
      description: "This object represent a user's profile pictures.",
      fields: [
        {
          name: "total_count",
          type: "Integer",
          required: true,
          description: "Total number of profile pictures the target user has",
        },
        {
          name: "photos",
          type: "Array of Array of PhotoSize",
          required: true,
          description: "Requested profile pictures (in up to 4 sizes each)",
        },
      ],
      example: {
        total_count: 1,
        photos: [],
      },
      relatedTypes: [],
      usedByMethods: ["getUserProfilePhotos"],
    },
    {
      name: "UserRating",
      href: "https://core.telegram.org/bots/api#userrating",
      description:
        "This object describes the rating of a user based on their Telegram Star spendings.",
      fields: [
        {
          name: "level",
          type: "Integer",
          required: true,
          description:
            "Current level of the user, indicating their reliability when purchasing digital goods and services. A higher level suggests a more trustworthy customer; a negative level is likely reason for concern.",
        },
        {
          name: "rating",
          type: "Integer",
          required: true,
          description:
            "Numerical value of the user's rating; the higher the rating, the better",
        },
        {
          name: "current_level_rating",
          type: "Integer",
          required: true,
          description: "The rating value required to get the current level",
        },
        {
          name: "next_level_rating",
          type: "Integer",
          required: false,
          description:
            "Optional. The rating value required to get to the next level; omitted if the maximum level was reached",
        },
      ],
      example: {
        level: 1,
        rating: 1,
        current_level_rating: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "UsersShared",
      href: "https://core.telegram.org/bots/api#usersshared",
      description:
        "This object contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.",
      fields: [
        {
          name: "request_id",
          type: "Integer",
          required: true,
          description: "Identifier of the request",
        },
        {
          name: "users",
          type: "Array of SharedUser",
          required: true,
          description: "Information about users shared with the bot.",
        },
      ],
      example: {
        request_id: 1,
        users: [],
      },
      relatedTypes: ["SharedUser"],
      usedByMethods: [],
    },
    {
      name: "Venue",
      href: "https://core.telegram.org/bots/api#venue",
      description: "This object represents a venue.",
      fields: [
        {
          name: "location",
          type: "Location",
          required: true,
          description: "Venue location. Can't be a live location",
        },
        {
          name: "title",
          type: "String",
          required: true,
          description: "Name of the venue",
        },
        {
          name: "address",
          type: "String",
          required: true,
          description: "Address of the venue",
        },
        {
          name: "foursquare_id",
          type: "String",
          required: false,
          description: "Optional. Foursquare identifier of the venue",
        },
        {
          name: "foursquare_type",
          type: "String",
          required: false,
          description:
            'Optional. Foursquare type of the venue. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)',
        },
        {
          name: "google_place_id",
          type: "String",
          required: false,
          description: "Optional. Google Places identifier of the venue",
        },
        {
          name: "google_place_type",
          type: "String",
          required: false,
          description:
            "Optional. Google Places type of the venue. (See supported types.)",
        },
      ],
      example: {
        location: {},
        title: "Example title",
        address: "example",
      },
      relatedTypes: ["Location"],
      usedByMethods: [],
    },
    {
      name: "Video",
      href: "https://core.telegram.org/bots/api#video",
      description: "This object represents a video file.",
      fields: [
        {
          name: "file_id",
          type: "String",
          required: true,
          description:
            "Identifier for this file, which can be used to download or reuse the file",
        },
        {
          name: "file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "width",
          type: "Integer",
          required: true,
          description: "Video width as defined by the sender",
        },
        {
          name: "height",
          type: "Integer",
          required: true,
          description: "Video height as defined by the sender",
        },
        {
          name: "duration",
          type: "Integer",
          required: true,
          description:
            "Duration of the video in seconds as defined by the sender",
        },
        {
          name: "thumbnail",
          type: "PhotoSize",
          required: false,
          description: "Optional. Video thumbnail",
        },
        {
          name: "cover",
          type: "Array of PhotoSize",
          required: false,
          description:
            "Optional. Available sizes of the cover of the video in the message",
        },
        {
          name: "start_timestamp",
          type: "Integer",
          required: false,
          description:
            "Optional. Timestamp in seconds from which the video will play in the message",
        },
        {
          name: "qualities",
          type: "Array of VideoQuality",
          required: false,
          description: "Optional. List of available qualities of the video",
        },
        {
          name: "file_name",
          type: "String",
          required: false,
          description: "Optional. Original filename as defined by the sender",
        },
        {
          name: "mime_type",
          type: "String",
          required: false,
          description:
            "Optional. MIME type of the file as defined by the sender",
        },
        {
          name: "file_size",
          type: "Integer",
          required: false,
          description:
            "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.",
        },
      ],
      example: {
        file_id: "example",
        file_unique_id: "example",
        width: 1,
        height: 1,
        duration: 1,
      },
      relatedTypes: ["PhotoSize", "VideoQuality"],
      usedByMethods: [],
    },
    {
      name: "VideoChatEnded",
      href: "https://core.telegram.org/bots/api#videochatended",
      description:
        "This object represents a service message about a video chat ended in the chat.",
      fields: [
        {
          name: "duration",
          type: "Integer",
          required: true,
          description: "Video chat duration in seconds",
        },
      ],
      example: {
        duration: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "VideoChatParticipantsInvited",
      href: "https://core.telegram.org/bots/api#videochatparticipantsinvited",
      description:
        "This object represents a service message about new members invited to a video chat.",
      fields: [
        {
          name: "users",
          type: "Array of User",
          required: true,
          description: "New members that were invited to the video chat",
        },
      ],
      example: {
        users: [],
      },
      relatedTypes: ["User"],
      usedByMethods: [],
    },
    {
      name: "VideoChatScheduled",
      href: "https://core.telegram.org/bots/api#videochatscheduled",
      description:
        "This object represents a service message about a video chat scheduled in the chat.",
      fields: [
        {
          name: "start_date",
          type: "Integer",
          required: true,
          description:
            "Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator",
        },
      ],
      example: {
        start_date: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "VideoChatStarted",
      href: "https://core.telegram.org/bots/api#videochatstarted",
      description:
        "This object represents a service message about a video chat started in the chat. Currently holds no information.",
      fields: [],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "VideoNote",
      href: "https://core.telegram.org/bots/api#videonote",
      description:
        "This object represents a video message (available in Telegram apps as of v.4.0).",
      fields: [
        {
          name: "file_id",
          type: "String",
          required: true,
          description:
            "Identifier for this file, which can be used to download or reuse the file",
        },
        {
          name: "file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "length",
          type: "Integer",
          required: true,
          description:
            "Video width and height (diameter of the video message) as defined by the sender",
        },
        {
          name: "duration",
          type: "Integer",
          required: true,
          description:
            "Duration of the video in seconds as defined by the sender",
        },
        {
          name: "thumbnail",
          type: "PhotoSize",
          required: false,
          description: "Optional. Video thumbnail",
        },
        {
          name: "file_size",
          type: "Integer",
          required: false,
          description: "Optional. File size in bytes",
        },
      ],
      example: {
        file_id: "example",
        file_unique_id: "example",
        length: 1,
        duration: 1,
      },
      relatedTypes: ["PhotoSize"],
      usedByMethods: [],
    },
    {
      name: "VideoQuality",
      href: "https://core.telegram.org/bots/api#videoquality",
      description: "This object represents a video file of a specific quality.",
      fields: [
        {
          name: "file_id",
          type: "String",
          required: true,
          description:
            "Identifier for this file, which can be used to download or reuse the file",
        },
        {
          name: "file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "width",
          type: "Integer",
          required: true,
          description: "Video width",
        },
        {
          name: "height",
          type: "Integer",
          required: true,
          description: "Video height",
        },
        {
          name: "codec",
          type: "String",
          required: true,
          description:
            'Codec that was used to encode the video, for example, "h264", "h265", or "av01"',
        },
        {
          name: "file_size",
          type: "Integer",
          required: false,
          description:
            "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.",
        },
      ],
      example: {
        file_id: "example",
        file_unique_id: "example",
        width: 1,
        height: 1,
        codec: "example",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "Voice",
      href: "https://core.telegram.org/bots/api#voice",
      description: "This object represents a voice note.",
      fields: [
        {
          name: "file_id",
          type: "String",
          required: true,
          description:
            "Identifier for this file, which can be used to download or reuse the file",
        },
        {
          name: "file_unique_id",
          type: "String",
          required: true,
          description:
            "Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
        },
        {
          name: "duration",
          type: "Integer",
          required: true,
          description:
            "Duration of the audio in seconds as defined by the sender",
        },
        {
          name: "mime_type",
          type: "String",
          required: false,
          description:
            "Optional. MIME type of the file as defined by the sender",
        },
        {
          name: "file_size",
          type: "Integer",
          required: false,
          description:
            "Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.",
        },
      ],
      example: {
        file_id: "example",
        file_unique_id: "example",
        duration: 1,
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "WebAppData",
      href: "https://core.telegram.org/bots/api#webappdata",
      description: "Describes data sent from a Web App to the bot.",
      fields: [
        {
          name: "data",
          type: "String",
          required: true,
          description:
            "The data. Be aware that a bad client can send arbitrary data in this field.",
        },
        {
          name: "button_text",
          type: "String",
          required: true,
          description:
            "Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.",
        },
      ],
      example: {
        data: "example",
        button_text: "Hello from Telegram Bot API Tester",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "WebAppInfo",
      href: "https://core.telegram.org/bots/api#webappinfo",
      description: "Describes a Web App.",
      fields: [
        {
          name: "url",
          type: "String",
          required: true,
          description:
            "An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps",
        },
      ],
      example: {
        url: "https://example.com",
      },
      relatedTypes: [],
      usedByMethods: [],
    },
    {
      name: "WebhookInfo",
      href: "https://core.telegram.org/bots/api#webhookinfo",
      description: "Describes the current status of a webhook.",
      fields: [
        {
          name: "url",
          type: "String",
          required: true,
          description: "Webhook URL, may be empty if webhook is not set up",
        },
        {
          name: "has_custom_certificate",
          type: "Boolean",
          required: true,
          description:
            "True, if a custom certificate was provided for webhook certificate checks",
        },
        {
          name: "pending_update_count",
          type: "Integer",
          required: true,
          description: "Number of updates awaiting delivery",
        },
        {
          name: "ip_address",
          type: "String",
          required: false,
          description: "Optional. Currently used webhook IP address",
        },
        {
          name: "last_error_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook",
        },
        {
          name: "last_error_message",
          type: "String",
          required: false,
          description:
            "Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook",
        },
        {
          name: "last_synchronization_error_date",
          type: "Integer",
          required: false,
          description:
            "Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters",
        },
        {
          name: "max_connections",
          type: "Integer",
          required: false,
          description:
            "Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery",
        },
        {
          name: "allowed_updates",
          type: "Array of String",
          required: false,
          description:
            "Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member",
        },
      ],
      example: {
        url: "https://example.com",
        has_custom_certificate: true,
        pending_update_count: 1,
      },
      relatedTypes: [],
      usedByMethods: ["getWebhookInfo"],
    },
    {
      name: "WriteAccessAllowed",
      href: "https://core.telegram.org/bots/api#writeaccessallowed",
      description:
        "This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.",
      fields: [
        {
          name: "from_request",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess",
        },
        {
          name: "web_app_name",
          type: "String",
          required: false,
          description:
            "Optional. Name of the Web App, if the access was granted when the Web App was launched from a link",
        },
        {
          name: "from_attachment_menu",
          type: "Boolean",
          required: false,
          description:
            "Optional. True, if the access was granted when the bot was added to the attachment or side menu",
        },
      ],
      example: {},
      relatedTypes: [],
      usedByMethods: [],
    },
  ].map((type) => [type.name, type]),
);
