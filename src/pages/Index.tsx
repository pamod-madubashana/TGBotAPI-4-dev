import { useApp } from "@/lib/app-context";
import { Loader2 } from "lucide-react";
import Login from "./Login";
import MainApp from "./MainApp";

export default function Index() {
  const { isLoggedIn, isInitializing } = useApp();

  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground shadow-xl">
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
          Restoring your bot session...
        </div>
      </div>
    );
  }

  return isLoggedIn ? <MainApp /> : <Login />;
}
