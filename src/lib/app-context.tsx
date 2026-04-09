import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  clearSavedToken,
  getAppSettings,
  getSavedBots,
  getSavedToken,
  saveAppSettings,
  saveBotToken,
  validateBotToken,
} from "@/lib/telegram";
import { AppView, TelegramMethodExecutionResult } from "@/types/telegram";
import {
  AppState,
  initialAppState,
  MethodToolbarActions,
  ResponseState,
} from "@/store/app-store";

interface AppContextType extends AppState {
  login: (token: string) => Promise<void>;
  addBot: (token: string) => Promise<void>;
  switchBot: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  toggleSidebar: () => void;
  setCurrentView: (view: AppView) => void;
  setResponseState: (state: ResponseState) => void;
  setLastResponse: (response: TelegramMethodExecutionResult | null) => void;
  methodActions: MethodToolbarActions | null;
  registerMethodActions: (actions: MethodToolbarActions | null) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(initialAppState);
  const [methodActions, setMethodActions] =
    useState<MethodToolbarActions | null>(null);

  const persistValidatedBot = useCallback(
    async (token: string, profile: Record<string, unknown>) => {
      await saveBotToken(token, profile);
      return getSavedBots();
    },
    [],
  );

  useEffect(() => {
    let active = true;

    const restoreSession = async () => {
      try {
        const [settings, storedToken] = await Promise.all([
          getAppSettings(),
          getSavedToken(),
        ]);

        if (!active) {
          return;
        }

        if (!storedToken) {
          const savedBots = await getSavedBots();

          if (!active) {
            return;
          }

          setState((current) => ({
            ...current,
            isInitializing: false,
            savedBots,
            sidebarCollapsed: settings.sidebarCollapsed,
          }));
          return;
        }

        try {
          const validation = await validateBotToken(storedToken);
          const savedBots = await persistValidatedBot(
            storedToken,
            validation.profile,
          );

          if (!active) {
            return;
          }

          setState((current) => ({
            ...current,
            token: storedToken,
            botProfile: validation.profile,
            savedBots,
            isLoggedIn: true,
            isInitializing: false,
            sidebarCollapsed: settings.sidebarCollapsed,
          }));
        } catch {
          await clearSavedToken();

          if (!active) {
            return;
          }

          setState((current) => ({
            ...current,
            isInitializing: false,
            savedBots: [],
            sidebarCollapsed: settings.sidebarCollapsed,
          }));
        }
      } catch {
        if (!active) {
          return;
        }

        setState((current) => ({
          ...current,
          isInitializing: false,
        }));
      }
    };

    void restoreSession();

    return () => {
      active = false;
    };
  }, [persistValidatedBot]);

  const login = useCallback(
    async (token: string) => {
      const normalizedToken = token.trim();
      const validation = await validateBotToken(normalizedToken);
      const savedBots = await persistValidatedBot(
        normalizedToken,
        validation.profile,
      );

      setState((current) => ({
        ...current,
        token: normalizedToken,
        botProfile: validation.profile,
        savedBots,
        isLoggedIn: true,
        isInitializing: false,
        currentView: { kind: "method", name: "getMe" },
        responseState: "success",
        lastResponse: validation.response,
      }));
    },
    [persistValidatedBot],
  );

  const addBot = useCallback(
    async (token: string) => {
      const normalizedToken = token.trim();
      const validation = await validateBotToken(normalizedToken);
      const savedBots = await persistValidatedBot(
        normalizedToken,
        validation.profile,
      );

      setMethodActions(null);
      setState((current) => ({
        ...current,
        token: normalizedToken,
        botProfile: validation.profile,
        savedBots,
        isLoggedIn: true,
        isInitializing: false,
        responseState: "idle",
        lastResponse: null,
      }));
    },
    [persistValidatedBot],
  );

  const switchBot = useCallback(
    async (token: string) => {
      const normalizedToken = token.trim();

      if (!normalizedToken) {
        throw new Error("Bot token cannot be empty.");
      }

      const validation = await validateBotToken(normalizedToken);
      const savedBots = await persistValidatedBot(
        normalizedToken,
        validation.profile,
      );

      setMethodActions(null);
      setState((current) => ({
        ...current,
        token: normalizedToken,
        botProfile: validation.profile,
        savedBots,
        isLoggedIn: true,
        isInitializing: false,
        responseState: "idle",
        lastResponse: null,
      }));
    },
    [persistValidatedBot],
  );

  const logout = useCallback(async () => {
    await clearSavedToken();
    setMethodActions(null);
    setState((current) => ({
      ...initialAppState,
      isInitializing: false,
      sidebarCollapsed: current.sidebarCollapsed,
    }));
  }, []);

  const toggleSidebar = useCallback(() => {
    setState((current) => {
      const sidebarCollapsed = !current.sidebarCollapsed;
      void saveAppSettings({ sidebarCollapsed });

      return {
        ...current,
        sidebarCollapsed,
      };
    });
  }, []);

  const setCurrentView = useCallback((view: AppView) => {
    setMethodActions(null);
    setState((current) => ({
      ...current,
      currentView: view,
      responseState: "idle",
      lastResponse: null,
    }));
  }, []);

  const setResponseState = useCallback((responseState: ResponseState) => {
    setState((current) => ({ ...current, responseState }));
  }, []);

  const setLastResponse = useCallback(
    (lastResponse: TelegramMethodExecutionResult | null) => {
      setState((current) => ({ ...current, lastResponse }));
    },
    [],
  );

  const registerMethodActions = useCallback(
    (actions: MethodToolbarActions | null) => {
      setMethodActions(actions);
    },
    [],
  );

  const value = useMemo(
    () => ({
      ...state,
      login,
      addBot,
      switchBot,
      logout,
      toggleSidebar,
      setCurrentView,
      setResponseState,
      setLastResponse,
      methodActions,
      registerMethodActions,
    }),
    [
      addBot,
      login,
      logout,
      methodActions,
      registerMethodActions,
      setCurrentView,
      setLastResponse,
      setResponseState,
      state,
      switchBot,
      toggleSidebar,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
}
