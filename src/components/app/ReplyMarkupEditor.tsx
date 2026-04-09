import { useEffect, useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

type ReplyMarkupMode =
  | "none"
  | "inlineKeyboard"
  | "replyKeyboard"
  | "removeKeyboard"
  | "forceReply";

type ButtonStyle = "" | "primary" | "success" | "danger";
type OptionalBoolean = "" | "true" | "false";

type InlineButtonAction =
  | "url"
  | "callback_data"
  | "web_app"
  | "login_url"
  | "switch_inline_query"
  | "switch_inline_query_current_chat"
  | "switch_inline_query_chosen_chat"
  | "copy_text"
  | "callback_game"
  | "pay";

type ReplyButtonAction =
  | "text"
  | "web_app"
  | "request_contact"
  | "request_location"
  | "request_poll";

interface InlineButtonDraft {
  text: string;
  iconCustomEmojiId: string;
  style: ButtonStyle;
  action: InlineButtonAction;
  url: string;
  callbackData: string;
  webAppUrl: string;
  loginUrl: string;
  loginForwardText: string;
  loginBotUsername: string;
  loginRequestWriteAccess: boolean;
  switchInlineQuery: string;
  switchInlineQueryCurrentChat: string;
  chosenChatQuery: string;
  allowUserChats: boolean;
  allowBotChats: boolean;
  allowGroupChats: boolean;
  allowChannelChats: boolean;
  copyText: string;
}

interface ReplyButtonDraft {
  text: string;
  iconCustomEmojiId: string;
  style: ButtonStyle;
  action: ReplyButtonAction;
  webAppUrl: string;
  requestPollType: "" | "quiz" | "regular";
}

interface ReplyMarkupDraft {
  mode: ReplyMarkupMode;
  inlineKeyboard: InlineButtonDraft[][];
  replyKeyboard: ReplyButtonDraft[][];
  isPersistent: boolean;
  resizeKeyboard: boolean;
  oneTimeKeyboard: boolean;
  inputFieldPlaceholder: string;
  selective: boolean;
}

function inputClassName() {
  return "h-9 px-3 bg-input border border-border rounded-md text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition w-full";
}

function selectClassName() {
  return `${inputClassName()} font-mono`;
}

function cardClassName() {
  return "rounded-lg border border-border bg-muted/20 p-3 space-y-3";
}

function createInlineButtonDraft(): InlineButtonDraft {
  return {
    text: "",
    iconCustomEmojiId: "",
    style: "",
    action: "callback_data",
    url: "",
    callbackData: "",
    webAppUrl: "",
    loginUrl: "",
    loginForwardText: "",
    loginBotUsername: "",
    loginRequestWriteAccess: false,
    switchInlineQuery: "",
    switchInlineQueryCurrentChat: "",
    chosenChatQuery: "",
    allowUserChats: false,
    allowBotChats: false,
    allowGroupChats: true,
    allowChannelChats: false,
    copyText: "",
  };
}

function createReplyButtonDraft(): ReplyButtonDraft {
  return {
    text: "",
    iconCustomEmojiId: "",
    style: "",
    action: "text",
    webAppUrl: "",
    requestPollType: "",
  };
}

function createReplyMarkupDraft(): ReplyMarkupDraft {
  return {
    mode: "none",
    inlineKeyboard: [[createInlineButtonDraft()]],
    replyKeyboard: [[createReplyButtonDraft()]],
    isPersistent: false,
    resizeKeyboard: true,
    oneTimeKeyboard: false,
    inputFieldPlaceholder: "",
    selective: false,
  };
}

function parseObject(value: unknown): Record<string, unknown> | null {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }

  if (typeof value === "string" && value.trim()) {
    try {
      const parsed = JSON.parse(value);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      return null;
    }
  }

  return null;
}

function parseInlineButton(button: Record<string, unknown>): InlineButtonDraft {
  const draft = createInlineButtonDraft();

  draft.text = typeof button.text === "string" ? button.text : "";
  draft.iconCustomEmojiId =
    typeof button.icon_custom_emoji_id === "string"
      ? button.icon_custom_emoji_id
      : "";
  draft.style =
    button.style === "primary" ||
    button.style === "success" ||
    button.style === "danger"
      ? button.style
      : "";

  if (typeof button.url === "string") {
    draft.action = "url";
    draft.url = button.url;
  } else if (typeof button.callback_data === "string") {
    draft.action = "callback_data";
    draft.callbackData = button.callback_data;
  } else if (parseObject(button.web_app)) {
    draft.action = "web_app";
    draft.webAppUrl =
      typeof parseObject(button.web_app)?.url === "string"
        ? String(parseObject(button.web_app)?.url)
        : "";
  } else if (parseObject(button.login_url)) {
    draft.action = "login_url";
    const loginUrl = parseObject(button.login_url);
    draft.loginUrl = typeof loginUrl?.url === "string" ? loginUrl.url : "";
    draft.loginForwardText =
      typeof loginUrl?.forward_text === "string" ? loginUrl.forward_text : "";
    draft.loginBotUsername =
      typeof loginUrl?.bot_username === "string" ? loginUrl.bot_username : "";
    draft.loginRequestWriteAccess = loginUrl?.request_write_access === true;
  } else if (typeof button.switch_inline_query === "string") {
    draft.action = "switch_inline_query";
    draft.switchInlineQuery = button.switch_inline_query;
  } else if (typeof button.switch_inline_query_current_chat === "string") {
    draft.action = "switch_inline_query_current_chat";
    draft.switchInlineQueryCurrentChat =
      button.switch_inline_query_current_chat;
  } else if (parseObject(button.switch_inline_query_chosen_chat)) {
    draft.action = "switch_inline_query_chosen_chat";
    const chosenChat = parseObject(button.switch_inline_query_chosen_chat);
    draft.chosenChatQuery =
      typeof chosenChat?.query === "string" ? chosenChat.query : "";
    draft.allowUserChats = chosenChat?.allow_user_chats === true;
    draft.allowBotChats = chosenChat?.allow_bot_chats === true;
    draft.allowGroupChats = chosenChat?.allow_group_chats === true;
    draft.allowChannelChats = chosenChat?.allow_channel_chats === true;
  } else if (parseObject(button.copy_text)) {
    draft.action = "copy_text";
    draft.copyText =
      typeof parseObject(button.copy_text)?.text === "string"
        ? String(parseObject(button.copy_text)?.text)
        : "";
  } else if (
    parseObject(button.callback_game) ||
    button.callback_game === null
  ) {
    draft.action = "callback_game";
  } else if (button.pay === true) {
    draft.action = "pay";
  }

  return draft;
}

function parseReplyButton(button: Record<string, unknown>): ReplyButtonDraft {
  const draft = createReplyButtonDraft();

  draft.text = typeof button.text === "string" ? button.text : "";
  draft.iconCustomEmojiId =
    typeof button.icon_custom_emoji_id === "string"
      ? button.icon_custom_emoji_id
      : "";
  draft.style =
    button.style === "primary" ||
    button.style === "success" ||
    button.style === "danger"
      ? button.style
      : "";

  if (parseObject(button.web_app)) {
    draft.action = "web_app";
    draft.webAppUrl =
      typeof parseObject(button.web_app)?.url === "string"
        ? String(parseObject(button.web_app)?.url)
        : "";
  } else if (button.request_contact === true) {
    draft.action = "request_contact";
  } else if (button.request_location === true) {
    draft.action = "request_location";
  } else if (parseObject(button.request_poll)) {
    draft.action = "request_poll";
    const requestPoll = parseObject(button.request_poll);
    draft.requestPollType =
      requestPoll?.type === "quiz" || requestPoll?.type === "regular"
        ? requestPoll.type
        : "";
  }

  return draft;
}

function parseReplyMarkupDraft(value: unknown): ReplyMarkupDraft {
  const fallback = createReplyMarkupDraft();
  const parsed = parseObject(value);

  if (!parsed) {
    return fallback;
  }

  if (Array.isArray(parsed.inline_keyboard)) {
    return {
      ...fallback,
      mode: "inlineKeyboard",
      inlineKeyboard: parsed.inline_keyboard
        .map((row) =>
          Array.isArray(row)
            ? (row
                .map((button) =>
                  parseObject(button)
                    ? parseInlineButton(
                        parseObject(button) as Record<string, unknown>,
                      )
                    : null,
                )
                .filter(Boolean) as InlineButtonDraft[])
            : [],
        )
        .filter((row) => row.length > 0),
    };
  }

  if (Array.isArray(parsed.keyboard)) {
    return {
      ...fallback,
      mode: "replyKeyboard",
      replyKeyboard: parsed.keyboard
        .map((row) =>
          Array.isArray(row)
            ? (row
                .map((button) => {
                  if (typeof button === "string") {
                    return { ...createReplyButtonDraft(), text: button };
                  }
                  const object = parseObject(button);
                  return object ? parseReplyButton(object) : null;
                })
                .filter(Boolean) as ReplyButtonDraft[])
            : [],
        )
        .filter((row) => row.length > 0),
      isPersistent: parsed.is_persistent === true,
      resizeKeyboard: parsed.resize_keyboard === true,
      oneTimeKeyboard: parsed.one_time_keyboard === true,
      inputFieldPlaceholder:
        typeof parsed.input_field_placeholder === "string"
          ? parsed.input_field_placeholder
          : "",
      selective: parsed.selective === true,
    };
  }

  if (parsed.remove_keyboard === true) {
    return {
      ...fallback,
      mode: "removeKeyboard",
      selective: parsed.selective === true,
    };
  }

  if (parsed.force_reply === true) {
    return {
      ...fallback,
      mode: "forceReply",
      inputFieldPlaceholder:
        typeof parsed.input_field_placeholder === "string"
          ? parsed.input_field_placeholder
          : "",
      selective: parsed.selective === true,
    };
  }

  return fallback;
}

function buildInlineButton(button: InlineButtonDraft): Record<string, unknown> {
  const next: Record<string, unknown> = {
    text: button.text,
  };

  if (button.iconCustomEmojiId.trim()) {
    next.icon_custom_emoji_id = button.iconCustomEmojiId.trim();
  }

  if (button.style) {
    next.style = button.style;
  }

  switch (button.action) {
    case "url":
      next.url = button.url;
      break;
    case "callback_data":
      next.callback_data = button.callbackData;
      break;
    case "web_app":
      next.web_app = { url: button.webAppUrl };
      break;
    case "login_url":
      next.login_url = {
        url: button.loginUrl,
        ...(button.loginForwardText.trim()
          ? { forward_text: button.loginForwardText.trim() }
          : {}),
        ...(button.loginBotUsername.trim()
          ? { bot_username: button.loginBotUsername.trim() }
          : {}),
        ...(button.loginRequestWriteAccess
          ? { request_write_access: true }
          : {}),
      };
      break;
    case "switch_inline_query":
      next.switch_inline_query = button.switchInlineQuery;
      break;
    case "switch_inline_query_current_chat":
      next.switch_inline_query_current_chat =
        button.switchInlineQueryCurrentChat;
      break;
    case "switch_inline_query_chosen_chat":
      next.switch_inline_query_chosen_chat = {
        ...(button.chosenChatQuery.trim()
          ? { query: button.chosenChatQuery.trim() }
          : {}),
        ...(button.allowUserChats ? { allow_user_chats: true } : {}),
        ...(button.allowBotChats ? { allow_bot_chats: true } : {}),
        ...(button.allowGroupChats ? { allow_group_chats: true } : {}),
        ...(button.allowChannelChats ? { allow_channel_chats: true } : {}),
      };
      break;
    case "copy_text":
      next.copy_text = { text: button.copyText };
      break;
    case "callback_game":
      next.callback_game = {};
      break;
    case "pay":
      next.pay = true;
      break;
  }

  return next;
}

function buildReplyButton(
  button: ReplyButtonDraft,
): Record<string, unknown> | string {
  if (
    !button.iconCustomEmojiId.trim() &&
    !button.style &&
    button.action === "text"
  ) {
    return button.text;
  }

  const next: Record<string, unknown> = {
    text: button.text,
  };

  if (button.iconCustomEmojiId.trim()) {
    next.icon_custom_emoji_id = button.iconCustomEmojiId.trim();
  }

  if (button.style) {
    next.style = button.style;
  }

  switch (button.action) {
    case "web_app":
      next.web_app = { url: button.webAppUrl };
      break;
    case "request_contact":
      next.request_contact = true;
      break;
    case "request_location":
      next.request_location = true;
      break;
    case "request_poll":
      next.request_poll = button.requestPollType
        ? { type: button.requestPollType }
        : {};
      break;
    default:
      break;
  }

  return next;
}

function buildReplyMarkup(
  draft: ReplyMarkupDraft,
): Record<string, unknown> | null {
  if (draft.mode === "none") {
    return null;
  }

  if (draft.mode === "inlineKeyboard") {
    const inlineKeyboard = draft.inlineKeyboard
      .map((row) => row.filter((button) => button.text.trim()))
      .filter((row) => row.length > 0)
      .map((row) => row.map(buildInlineButton));

    return inlineKeyboard.length > 0
      ? { inline_keyboard: inlineKeyboard }
      : null;
  }

  if (draft.mode === "replyKeyboard") {
    const keyboard = draft.replyKeyboard
      .map((row) => row.filter((button) => button.text.trim()))
      .filter((row) => row.length > 0)
      .map((row) => row.map(buildReplyButton));

    return keyboard.length > 0
      ? {
          keyboard,
          ...(draft.isPersistent ? { is_persistent: true } : {}),
          ...(draft.resizeKeyboard ? { resize_keyboard: true } : {}),
          ...(draft.oneTimeKeyboard ? { one_time_keyboard: true } : {}),
          ...(draft.inputFieldPlaceholder.trim()
            ? { input_field_placeholder: draft.inputFieldPlaceholder.trim() }
            : {}),
          ...(draft.selective ? { selective: true } : {}),
        }
      : null;
  }

  if (draft.mode === "removeKeyboard") {
    return {
      remove_keyboard: true,
      ...(draft.selective ? { selective: true } : {}),
    };
  }

  return {
    force_reply: true,
    ...(draft.inputFieldPlaceholder.trim()
      ? { input_field_placeholder: draft.inputFieldPlaceholder.trim() }
      : {}),
    ...(draft.selective ? { selective: true } : {}),
  };
}

function OptionalBooleanBadge({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs text-muted-foreground">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-3.5 w-3.5 accent-[hsl(var(--primary))]"
      />
      <span>{label}</span>
    </label>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="space-y-1 block">
      <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function ReplyMarkupModeButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`h-8 rounded-md px-3 text-xs font-medium transition ${
        active
          ? "bg-primary/10 text-primary border border-primary/30"
          : "bg-secondary text-muted-foreground border border-border hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export default function ReplyMarkupEditor({
  value,
  onChange,
}: {
  value: unknown;
  onChange: (value: string) => void;
}) {
  const [draft, setDraft] = useState<ReplyMarkupDraft>(() =>
    parseReplyMarkupDraft(value),
  );

  useEffect(() => {
    setDraft(parseReplyMarkupDraft(value));
  }, [value]);

  const serialized = useMemo(() => {
    const markup = buildReplyMarkup(draft);
    return markup ? JSON.stringify(markup, null, 2) : "";
  }, [draft]);

  useEffect(() => {
    onChange(serialized);
  }, [onChange, serialized]);

  const setMode = (mode: ReplyMarkupMode) => {
    setDraft((current) => ({ ...current, mode }));
  };

  const updateInlineRow = (
    rowIndex: number,
    buttonIndex: number,
    patch: Partial<InlineButtonDraft>,
  ) => {
    setDraft((current) => ({
      ...current,
      inlineKeyboard: current.inlineKeyboard.map((row, nextRowIndex) =>
        nextRowIndex !== rowIndex
          ? row
          : row.map((button, nextButtonIndex) =>
              nextButtonIndex !== buttonIndex
                ? button
                : { ...button, ...patch },
            ),
      ),
    }));
  };

  const updateReplyRow = (
    rowIndex: number,
    buttonIndex: number,
    patch: Partial<ReplyButtonDraft>,
  ) => {
    setDraft((current) => ({
      ...current,
      replyKeyboard: current.replyKeyboard.map((row, nextRowIndex) =>
        nextRowIndex !== rowIndex
          ? row
          : row.map((button, nextButtonIndex) =>
              nextButtonIndex !== buttonIndex
                ? button
                : { ...button, ...patch },
            ),
      ),
    }));
  };

  const addInlineRow = () => {
    setDraft((current) => ({
      ...current,
      inlineKeyboard: [...current.inlineKeyboard, [createInlineButtonDraft()]],
    }));
  };

  const addReplyRow = () => {
    setDraft((current) => ({
      ...current,
      replyKeyboard: [...current.replyKeyboard, [createReplyButtonDraft()]],
    }));
  };

  const addInlineButton = (rowIndex: number) => {
    setDraft((current) => ({
      ...current,
      inlineKeyboard: current.inlineKeyboard.map((row, nextRowIndex) =>
        nextRowIndex === rowIndex ? [...row, createInlineButtonDraft()] : row,
      ),
    }));
  };

  const addReplyButton = (rowIndex: number) => {
    setDraft((current) => ({
      ...current,
      replyKeyboard: current.replyKeyboard.map((row, nextRowIndex) =>
        nextRowIndex === rowIndex ? [...row, createReplyButtonDraft()] : row,
      ),
    }));
  };

  const removeInlineButton = (rowIndex: number, buttonIndex: number) => {
    setDraft((current) => ({
      ...current,
      inlineKeyboard: current.inlineKeyboard
        .map((row, nextRowIndex) =>
          nextRowIndex === rowIndex
            ? row.filter(
                (_, nextButtonIndex) => nextButtonIndex !== buttonIndex,
              )
            : row,
        )
        .filter((row) => row.length > 0),
    }));
  };

  const removeReplyButton = (rowIndex: number, buttonIndex: number) => {
    setDraft((current) => ({
      ...current,
      replyKeyboard: current.replyKeyboard
        .map((row, nextRowIndex) =>
          nextRowIndex === rowIndex
            ? row.filter(
                (_, nextButtonIndex) => nextButtonIndex !== buttonIndex,
              )
            : row,
        )
        .filter((row) => row.length > 0),
    }));
  };

  return (
    <div className="space-y-4 rounded-xl border border-border bg-card/60 p-4">
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          <ReplyMarkupModeButton
            active={draft.mode === "none"}
            onClick={() => setMode("none")}
          >
            None
          </ReplyMarkupModeButton>
          <ReplyMarkupModeButton
            active={draft.mode === "inlineKeyboard"}
            onClick={() => setMode("inlineKeyboard")}
          >
            Inline keyboard
          </ReplyMarkupModeButton>
          <ReplyMarkupModeButton
            active={draft.mode === "replyKeyboard"}
            onClick={() => setMode("replyKeyboard")}
          >
            Reply keyboard
          </ReplyMarkupModeButton>
          <ReplyMarkupModeButton
            active={draft.mode === "removeKeyboard"}
            onClick={() => setMode("removeKeyboard")}
          >
            Remove keyboard
          </ReplyMarkupModeButton>
          <ReplyMarkupModeButton
            active={draft.mode === "forceReply"}
            onClick={() => setMode("forceReply")}
          >
            Force reply
          </ReplyMarkupModeButton>
        </div>
        <p className="text-[10px] text-muted-foreground">
          Build reply markup visually. Button-only fields stay hidden until you
          choose a button action.
        </p>
      </div>

      {draft.mode === "none" && (
        <div className="rounded-lg border border-dashed border-border bg-muted/20 p-4 text-xs text-muted-foreground">
          No reply markup will be sent with this request.
        </div>
      )}

      {draft.mode === "inlineKeyboard" && (
        <div className="space-y-4">
          {draft.inlineKeyboard.map((row, rowIndex) => (
            <div key={`inline-row-${rowIndex}`} className={cardClassName()}>
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-foreground">
                  Row {rowIndex + 1}
                </p>
                <button
                  onClick={() => addInlineButton(rowIndex)}
                  className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground hover:text-foreground"
                >
                  <Plus className="h-3 w-3" /> Add button
                </button>
              </div>

              {row.map((button, buttonIndex) => (
                <div
                  key={`inline-button-${buttonIndex}`}
                  className={cardClassName()}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-foreground">
                      Button {buttonIndex + 1}
                    </p>
                    <button
                      onClick={() => removeInlineButton(rowIndex, buttonIndex)}
                      className="rounded-md p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <Field label="Text">
                      <input
                        value={button.text}
                        onChange={(event) =>
                          updateInlineRow(rowIndex, buttonIndex, {
                            text: event.target.value,
                          })
                        }
                        className={inputClassName()}
                        placeholder="Button text"
                      />
                    </Field>
                    <Field label="Action">
                      <select
                        value={button.action}
                        onChange={(event) =>
                          updateInlineRow(rowIndex, buttonIndex, {
                            action: event.target.value as InlineButtonAction,
                          })
                        }
                        className={selectClassName()}
                      >
                        <option value="url">URL</option>
                        <option value="callback_data">Callback data</option>
                        <option value="web_app">Web app</option>
                        <option value="login_url">Login URL</option>
                        <option value="switch_inline_query">
                          Switch inline query
                        </option>
                        <option value="switch_inline_query_current_chat">
                          Switch inline in current chat
                        </option>
                        <option value="switch_inline_query_chosen_chat">
                          Switch inline in chosen chat
                        </option>
                        <option value="copy_text">Copy text</option>
                        <option value="callback_game">Callback game</option>
                        <option value="pay">Pay button</option>
                      </select>
                    </Field>
                    <Field label="Icon custom emoji ID">
                      <input
                        value={button.iconCustomEmojiId}
                        onChange={(event) =>
                          updateInlineRow(rowIndex, buttonIndex, {
                            iconCustomEmojiId: event.target.value,
                          })
                        }
                        className={inputClassName()}
                        placeholder="Optional emoji id"
                      />
                    </Field>
                    <Field label="Style">
                      <select
                        value={button.style}
                        onChange={(event) =>
                          updateInlineRow(rowIndex, buttonIndex, {
                            style: event.target.value as ButtonStyle,
                          })
                        }
                        className={selectClassName()}
                      >
                        <option value="">Default</option>
                        <option value="primary">primary (blue)</option>
                        <option value="success">success (green)</option>
                        <option value="danger">danger (red)</option>
                      </select>
                    </Field>

                    {button.action === "url" && (
                      <Field label="URL">
                        <input
                          value={button.url}
                          onChange={(event) =>
                            updateInlineRow(rowIndex, buttonIndex, {
                              url: event.target.value,
                            })
                          }
                          className={inputClassName()}
                          placeholder="https://example.com"
                        />
                      </Field>
                    )}

                    {button.action === "callback_data" && (
                      <Field label="Callback data">
                        <input
                          value={button.callbackData}
                          onChange={(event) =>
                            updateInlineRow(rowIndex, buttonIndex, {
                              callbackData: event.target.value,
                            })
                          }
                          className={inputClassName()}
                          placeholder="action:confirm"
                        />
                      </Field>
                    )}

                    {button.action === "web_app" && (
                      <Field label="Web app URL">
                        <input
                          value={button.webAppUrl}
                          onChange={(event) =>
                            updateInlineRow(rowIndex, buttonIndex, {
                              webAppUrl: event.target.value,
                            })
                          }
                          className={inputClassName()}
                          placeholder="https://example.com/app"
                        />
                      </Field>
                    )}

                    {button.action === "login_url" && (
                      <>
                        <Field label="Login URL">
                          <input
                            value={button.loginUrl}
                            onChange={(event) =>
                              updateInlineRow(rowIndex, buttonIndex, {
                                loginUrl: event.target.value,
                              })
                            }
                            className={inputClassName()}
                            placeholder="https://example.com/login"
                          />
                        </Field>
                        <Field label="Forward text">
                          <input
                            value={button.loginForwardText}
                            onChange={(event) =>
                              updateInlineRow(rowIndex, buttonIndex, {
                                loginForwardText: event.target.value,
                              })
                            }
                            className={inputClassName()}
                            placeholder="Optional forwarded label"
                          />
                        </Field>
                        <Field label="Bot username">
                          <input
                            value={button.loginBotUsername}
                            onChange={(event) =>
                              updateInlineRow(rowIndex, buttonIndex, {
                                loginBotUsername: event.target.value,
                              })
                            }
                            className={inputClassName()}
                            placeholder="Optional bot username"
                          />
                        </Field>
                        <OptionalBooleanBadge
                          label="Request write access"
                          checked={button.loginRequestWriteAccess}
                          onChange={(checked) =>
                            updateInlineRow(rowIndex, buttonIndex, {
                              loginRequestWriteAccess: checked,
                            })
                          }
                        />
                      </>
                    )}

                    {button.action === "switch_inline_query" && (
                      <Field label="Inline query">
                        <input
                          value={button.switchInlineQuery}
                          onChange={(event) =>
                            updateInlineRow(rowIndex, buttonIndex, {
                              switchInlineQuery: event.target.value,
                            })
                          }
                          className={inputClassName()}
                          placeholder="Optional default query"
                        />
                      </Field>
                    )}

                    {button.action === "switch_inline_query_current_chat" && (
                      <Field label="Current chat query">
                        <input
                          value={button.switchInlineQueryCurrentChat}
                          onChange={(event) =>
                            updateInlineRow(rowIndex, buttonIndex, {
                              switchInlineQueryCurrentChat: event.target.value,
                            })
                          }
                          className={inputClassName()}
                          placeholder="Optional default query"
                        />
                      </Field>
                    )}

                    {button.action === "switch_inline_query_chosen_chat" && (
                      <>
                        <Field label="Chosen chat query">
                          <input
                            value={button.chosenChatQuery}
                            onChange={(event) =>
                              updateInlineRow(rowIndex, buttonIndex, {
                                chosenChatQuery: event.target.value,
                              })
                            }
                            className={inputClassName()}
                            placeholder="Optional default query"
                          />
                        </Field>
                        <div className="md:col-span-2 flex flex-wrap gap-2">
                          <OptionalBooleanBadge
                            label="Allow user chats"
                            checked={button.allowUserChats}
                            onChange={(checked) =>
                              updateInlineRow(rowIndex, buttonIndex, {
                                allowUserChats: checked,
                              })
                            }
                          />
                          <OptionalBooleanBadge
                            label="Allow bot chats"
                            checked={button.allowBotChats}
                            onChange={(checked) =>
                              updateInlineRow(rowIndex, buttonIndex, {
                                allowBotChats: checked,
                              })
                            }
                          />
                          <OptionalBooleanBadge
                            label="Allow group chats"
                            checked={button.allowGroupChats}
                            onChange={(checked) =>
                              updateInlineRow(rowIndex, buttonIndex, {
                                allowGroupChats: checked,
                              })
                            }
                          />
                          <OptionalBooleanBadge
                            label="Allow channel chats"
                            checked={button.allowChannelChats}
                            onChange={(checked) =>
                              updateInlineRow(rowIndex, buttonIndex, {
                                allowChannelChats: checked,
                              })
                            }
                          />
                        </div>
                      </>
                    )}

                    {button.action === "copy_text" && (
                      <Field label="Text to copy">
                        <input
                          value={button.copyText}
                          onChange={(event) =>
                            updateInlineRow(rowIndex, buttonIndex, {
                              copyText: event.target.value,
                            })
                          }
                          className={inputClassName()}
                          placeholder="Copied text"
                        />
                      </Field>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <button
            onClick={addInlineRow}
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <Plus className="h-3.5 w-3.5" /> Add row
          </button>
        </div>
      )}

      {draft.mode === "replyKeyboard" && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <OptionalBooleanBadge
              label="Persistent"
              checked={draft.isPersistent}
              onChange={(checked) =>
                setDraft((current) => ({ ...current, isPersistent: checked }))
              }
            />
            <OptionalBooleanBadge
              label="Resize keyboard"
              checked={draft.resizeKeyboard}
              onChange={(checked) =>
                setDraft((current) => ({ ...current, resizeKeyboard: checked }))
              }
            />
            <OptionalBooleanBadge
              label="One-time keyboard"
              checked={draft.oneTimeKeyboard}
              onChange={(checked) =>
                setDraft((current) => ({
                  ...current,
                  oneTimeKeyboard: checked,
                }))
              }
            />
            <OptionalBooleanBadge
              label="Selective"
              checked={draft.selective}
              onChange={(checked) =>
                setDraft((current) => ({ ...current, selective: checked }))
              }
            />
          </div>

          <Field label="Input field placeholder">
            <input
              value={draft.inputFieldPlaceholder}
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  inputFieldPlaceholder: event.target.value,
                }))
              }
              className={inputClassName()}
              placeholder="Optional placeholder"
            />
          </Field>

          {draft.replyKeyboard.map((row, rowIndex) => (
            <div key={`reply-row-${rowIndex}`} className={cardClassName()}>
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-foreground">
                  Row {rowIndex + 1}
                </p>
                <button
                  onClick={() => addReplyButton(rowIndex)}
                  className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground hover:text-foreground"
                >
                  <Plus className="h-3 w-3" /> Add button
                </button>
              </div>

              {row.map((button, buttonIndex) => (
                <div
                  key={`reply-button-${buttonIndex}`}
                  className={cardClassName()}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-foreground">
                      Button {buttonIndex + 1}
                    </p>
                    <button
                      onClick={() => removeReplyButton(rowIndex, buttonIndex)}
                      className="rounded-md p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <Field label="Text">
                      <input
                        value={button.text}
                        onChange={(event) =>
                          updateReplyRow(rowIndex, buttonIndex, {
                            text: event.target.value,
                          })
                        }
                        className={inputClassName()}
                        placeholder="Button text"
                      />
                    </Field>
                    <Field label="Action">
                      <select
                        value={button.action}
                        onChange={(event) =>
                          updateReplyRow(rowIndex, buttonIndex, {
                            action: event.target.value as ReplyButtonAction,
                          })
                        }
                        className={selectClassName()}
                      >
                        <option value="text">Plain text</option>
                        <option value="web_app">Web app</option>
                        <option value="request_contact">Request contact</option>
                        <option value="request_location">
                          Request location
                        </option>
                        <option value="request_poll">Request poll</option>
                      </select>
                    </Field>
                    <Field label="Icon custom emoji ID">
                      <input
                        value={button.iconCustomEmojiId}
                        onChange={(event) =>
                          updateReplyRow(rowIndex, buttonIndex, {
                            iconCustomEmojiId: event.target.value,
                          })
                        }
                        className={inputClassName()}
                        placeholder="Optional emoji id"
                      />
                    </Field>
                    <Field label="Style">
                      <select
                        value={button.style}
                        onChange={(event) =>
                          updateReplyRow(rowIndex, buttonIndex, {
                            style: event.target.value as ButtonStyle,
                          })
                        }
                        className={selectClassName()}
                      >
                        <option value="">Default</option>
                        <option value="primary">primary (blue)</option>
                        <option value="success">success (green)</option>
                        <option value="danger">danger (red)</option>
                      </select>
                    </Field>

                    {button.action === "web_app" && (
                      <Field label="Web app URL">
                        <input
                          value={button.webAppUrl}
                          onChange={(event) =>
                            updateReplyRow(rowIndex, buttonIndex, {
                              webAppUrl: event.target.value,
                            })
                          }
                          className={inputClassName()}
                          placeholder="https://example.com/app"
                        />
                      </Field>
                    )}

                    {button.action === "request_poll" && (
                      <Field label="Poll type">
                        <select
                          value={button.requestPollType}
                          onChange={(event) =>
                            updateReplyRow(rowIndex, buttonIndex, {
                              requestPollType: event.target
                                .value as ReplyButtonDraft["requestPollType"],
                            })
                          }
                          className={selectClassName()}
                        >
                          <option value="">Any poll</option>
                          <option value="quiz">Quiz</option>
                          <option value="regular">Regular</option>
                        </select>
                      </Field>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <button
            onClick={addReplyRow}
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <Plus className="h-3.5 w-3.5" /> Add row
          </button>
        </div>
      )}

      {(draft.mode === "removeKeyboard" || draft.mode === "forceReply") && (
        <div className={cardClassName()}>
          <div className="flex flex-wrap gap-2">
            <OptionalBooleanBadge
              label="Selective"
              checked={draft.selective}
              onChange={(checked) =>
                setDraft((current) => ({ ...current, selective: checked }))
              }
            />
          </div>

          {draft.mode === "forceReply" && (
            <Field label="Input field placeholder">
              <input
                value={draft.inputFieldPlaceholder}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    inputFieldPlaceholder: event.target.value,
                  }))
                }
                className={inputClassName()}
                placeholder="Optional placeholder"
              />
            </Field>
          )}
        </div>
      )}
    </div>
  );
}
