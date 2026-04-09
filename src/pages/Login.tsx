import { useState } from "react";
import { Loader2, ArrowRight } from "lucide-react";
import { useApp } from "@/lib/app-context";
import { motion } from "framer-motion";
import appIcon from "../../src-tauri/icons/icon.png";

export default function Login() {
  const { login } = useApp();
  const [token, setToken] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async () => {
    if (!token.trim()) return;
    setLoading(true);
    setError("");

    try {
      await login(token.trim());
      setSuccess(true);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Unable to validate this bot token.";
      setError(message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-card border border-border rounded-xl p-8 shadow-2xl shadow-primary/5">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
              <img
                src={appIcon}
                alt="Telegram Bot API Tester"
                className="h-9 w-9 rounded-lg"
              />
            </div>
            <h1 className="text-xl font-semibold text-foreground tracking-tight">
              Telegram Bot API Tester
            </h1>
            <p className="text-sm text-muted-foreground mt-1 text-center">
              Connect your bot to start testing methods and types
            </p>
          </div>

          {/* Token input */}
          <div className="space-y-2 mb-4">
            <label className="text-sm font-medium text-foreground">
              Bot Token
            </label>
            <input
              type="text"
              placeholder="123456789:AAExampleBotTokenHere"
              value={token}
              onChange={(e) => {
                setToken(e.target.value);
                setError("");
                setSuccess(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full h-11 px-4 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition font-mono"
            />
          </div>

          {/* Status messages */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-destructive mb-4 px-1"
            >
              {error}
            </motion.p>
          )}
          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-success mb-4 px-1"
            >
              ✓ Token validated successfully
            </motion.p>
          )}

          {/* Helper text */}
          <p className="text-xs text-muted-foreground mb-6 px-1">
            Your token is validated with{" "}
            <span className="font-mono">getMe</span>, then stored locally so you
            can switch between saved bots later.
          </p>

          {/* Login button */}
          <button
            onClick={handleLogin}
            disabled={!token.trim() || loading}
            className="w-full h-11 bg-primary text-primary-foreground rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                Login <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="mt-4 text-center text-xs text-muted-foreground">
            Enter a real bot token to unlock live requests from this desktop
            app.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
