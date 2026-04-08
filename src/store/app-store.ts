import { AppView, TelegramMethodExecutionResult } from "@/types/telegram";

export type ResponseState = "idle" | "loading" | "success" | "error";

export interface MethodToolbarActions {
  submit?: () => Promise<void>;
  reset?: () => void;
  loadExample?: () => void;
  copyJson?: () => Promise<void>;
  savePreset?: () => Promise<void>;
  isBusy?: boolean;
}

export interface AppState {
  token: string;
  botProfile: Record<string, unknown> | null;
  isLoggedIn: boolean;
  isInitializing: boolean;
  sidebarCollapsed: boolean;
  currentView: AppView;
  responseState: ResponseState;
  lastResponse: TelegramMethodExecutionResult | null;
}

export const initialAppState: AppState = {
  token: "",
  botProfile: null,
  isLoggedIn: false,
  isInitializing: true,
  sidebarCollapsed: false,
  currentView: { kind: "empty" },
  responseState: "idle",
  lastResponse: null,
};
