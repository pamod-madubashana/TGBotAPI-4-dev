import { invoke } from "@tauri-apps/api/core";
import {
  AppSettings,
  RemoveSavedBotResult,
  RequestHistoryEntry,
  SavedBotAccount,
  SavedPreset,
  TelegramMethodExecutionResult,
  TokenValidationResult,
} from "@/types/telegram";

export async function getAppSettings() {
  return invoke<AppSettings>("get_settings");
}

export async function saveAppSettings(settings: AppSettings) {
  return invoke<AppSettings>("save_settings", { settings });
}

export async function getSavedToken() {
  return invoke<string | null>("get_saved_token");
}

export async function getSavedBots() {
  return invoke<SavedBotAccount[]>("get_saved_bots");
}

export async function saveBotToken(
  token: string,
  profile: Record<string, unknown>,
) {
  return invoke<void>("save_bot_token", { token, profile });
}

export async function removeSavedBot(token: string) {
  return invoke<RemoveSavedBotResult>("remove_saved_bot", { token });
}

export async function clearSavedToken() {
  return invoke<void>("clear_saved_token");
}

export async function validateBotToken(token: string) {
  return invoke<TokenValidationResult>("validate_bot_token", { token });
}

export async function executeTelegramMethod(
  method: string,
  params: Record<string, unknown>,
  token?: string,
) {
  return invoke<TelegramMethodExecutionResult>("execute_telegram_method", {
    method,
    params,
    token,
  });
}

export async function savePreset(
  name: string,
  method: string,
  payload: Record<string, unknown>,
) {
  return invoke<SavedPreset>("save_preset", { name, method, payload });
}

export async function getPresets() {
  return invoke<SavedPreset[]>("get_presets");
}

export async function getRequestHistory() {
  return invoke<RequestHistoryEntry[]>("get_request_history");
}
