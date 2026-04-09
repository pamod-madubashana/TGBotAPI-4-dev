import { useApp } from "@/lib/app-context";
import { Bot } from "lucide-react";
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
        <div className="w-full max-w-md">
          <div className="rounded-xl border border-border bg-card p-8 shadow-2xl shadow-primary/5">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Bot className="h-7 w-7 text-primary" />
              </div>
              <h1 className="text-center text-xl font-semibold tracking-tight text-foreground">
                Telegram Bot API Tester
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return isLoggedIn ? <MainApp /> : <Login />;
}
