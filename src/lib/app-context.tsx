import React, { createContext, useContext, useState, useCallback } from 'react';
import { AppView } from './types';

interface AppState {
  token: string;
  isLoggedIn: boolean;
  sidebarCollapsed: boolean;
  currentView: AppView;
  responseState: 'idle' | 'loading' | 'success' | 'error';
}

interface AppContextType extends AppState {
  login: (token: string) => void;
  loginSample: () => void;
  logout: () => void;
  toggleSidebar: () => void;
  setCurrentView: (view: AppView) => void;
  setResponseState: (state: AppState['responseState']) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>({
    token: '',
    isLoggedIn: false,
    sidebarCollapsed: false,
    currentView: { kind: 'empty' },
    responseState: 'idle',
  });

  const login = useCallback((token: string) => {
    setState(s => ({ ...s, token, isLoggedIn: true }));
  }, []);

  const loginSample = useCallback(() => {
    setState(s => ({ ...s, token: '000000000:SAMPLE_MODE', isLoggedIn: true }));
  }, []);

  const logout = useCallback(() => {
    setState({ token: '', isLoggedIn: false, sidebarCollapsed: false, currentView: { kind: 'empty' }, responseState: 'idle' });
  }, []);

  const toggleSidebar = useCallback(() => {
    setState(s => ({ ...s, sidebarCollapsed: !s.sidebarCollapsed }));
  }, []);

  const setCurrentView = useCallback((view: AppView) => {
    setState(s => ({ ...s, currentView: view, responseState: 'idle' }));
  }, []);

  const setResponseState = useCallback((responseState: AppState['responseState']) => {
    setState(s => ({ ...s, responseState }));
  }, []);

  return (
    <AppContext.Provider value={{ ...state, login, loginSample, logout, toggleSidebar, setCurrentView, setResponseState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
}
