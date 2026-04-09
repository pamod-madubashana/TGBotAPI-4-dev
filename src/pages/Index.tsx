import { useApp } from "@/lib/app-context";
import appIcon from "../../src-tauri/icons/icon.png";
import Login from "./Login";
import MainApp from "./MainApp";

export default function Index() {
  const { isLoggedIn, isInitializing } = useApp();

  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-primary/3 blur-3xl" />
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <img
            src={appIcon}
            alt="Telegram Bot API Tester"
            className="mb-6 h-28 w-28 drop-shadow-[0_18px_40px_rgba(59,130,246,0.18)]"
          />
          <h1 className="text-center text-3xl font-semibold tracking-tight text-foreground">
            Telegram Bot API Tester
          </h1>
        </div>
      </div>
    );
  }

  return isLoggedIn ? <MainApp /> : <Login />;
}
