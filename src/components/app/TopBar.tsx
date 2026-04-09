import { RotateCcw, Copy, Play } from "lucide-react";
import { useApp } from "@/lib/app-context";

export default function TopBar() {
  const { currentView, methodActions } = useApp();

  const breadcrumb =
    currentView.kind === "empty"
      ? "Home"
      : currentView.kind === "method"
        ? `Methods / ${currentView.name}`
        : `Types / ${currentView.name}`;

  const isBusy = Boolean(methodActions?.isBusy);

  return (
    <div className="h-10 flex items-center justify-between gap-3 px-3 border-b border-border bg-card/50 shrink-0">
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground font-mono">
          {breadcrumb}
        </span>
      </div>
      {currentView.kind === "method" && (
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
          <button
            onClick={() => methodActions?.reset?.()}
            disabled={isBusy || !methodActions?.reset}
            className="h-7 px-2.5 whitespace-nowrap flex items-center gap-1.5 rounded-md text-xs text-muted-foreground hover:bg-accent hover:text-foreground transition border border-border disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
          <button
            onClick={() => void methodActions?.copyJson?.()}
            disabled={isBusy || !methodActions?.copyJson}
            className="h-7 px-2.5 whitespace-nowrap flex items-center gap-1.5 rounded-md text-xs text-muted-foreground hover:bg-accent hover:text-foreground transition border border-border disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Copy className="w-3 h-3" /> Copy JSON
          </button>
          <button
            onClick={() => void methodActions?.submit?.()}
            disabled={isBusy || !methodActions?.submit}
            className="h-7 px-2.5 whitespace-nowrap flex items-center gap-1.5 rounded-md text-xs bg-primary text-primary-foreground hover:bg-primary/90 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Play className="w-3 h-3" /> Test Request
          </button>
        </div>
      )}
    </div>
  );
}
