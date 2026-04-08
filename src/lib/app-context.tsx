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
          setState((current) => ({
            ...current,
            isInitializing: false,
            sidebarCollapsed: settings.sidebarCollapsed,
          }));
          return;
        }

        try {
          const validation = await validateBotToken(storedToken);

          if (!active) {
            return;
          }

          setState((current) => ({
            ...current,
            token: storedToken,
            botProfile: validation.profile,
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
  }, []);

  const login = useCallback(async (token: string) => {
    const validation = await validateBotToken(token);
    await saveBotToken(token);

    setState((current) => ({
      ...current,
      token,
      botProfile: validation.profile,
      isLoggedIn: true,
      isInitializing: false,
      currentView: { kind: "method", name: "getMe" },
      responseState: "success",
      lastResponse: validation.response,
    }));
  }, []);

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
      logout,
      toggleSidebar,
      setCurrentView,
      setResponseState,
      setLastResponse,
      methodActions,
      registerMethodActions,
    }),
    [
      login,
      logout,
      methodActions,
      registerMethodActions,
      setCurrentView,
      setLastResponse,
      setResponseState,
      state,
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
