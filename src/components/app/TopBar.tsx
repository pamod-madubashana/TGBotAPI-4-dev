import { Save, RotateCcw, Copy, Play } from 'lucide-react';
import { useApp } from '@/lib/app-context';

export default function TopBar() {
  const { currentView } = useApp();

  const breadcrumb = currentView.kind === 'empty'
    ? 'Home'
    : currentView.kind === 'method'
      ? `Methods / ${currentView.name}`
      : `Types / ${currentView.name}`;

  return (
    <div className="h-12 flex items-center justify-between px-4 border-b border-border bg-card/50 shrink-0">
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground font-mono">{breadcrumb}</span>
      </div>
      {currentView.kind === 'method' && (
        <div className="flex items-center gap-1.5">
          <button className="h-7 px-3 flex items-center gap-1.5 rounded-md text-xs text-muted-foreground hover:bg-accent hover:text-foreground transition border border-border">
            <Save className="w-3 h-3" /> Save Preset
          </button>
          <button className="h-7 px-3 flex items-center gap-1.5 rounded-md text-xs text-muted-foreground hover:bg-accent hover:text-foreground transition border border-border">
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
          <button className="h-7 px-3 flex items-center gap-1.5 rounded-md text-xs text-muted-foreground hover:bg-accent hover:text-foreground transition border border-border">
            <Copy className="w-3 h-3" /> Copy JSON
          </button>
          <button className="h-7 px-3 flex items-center gap-1.5 rounded-md text-xs bg-primary text-primary-foreground hover:bg-primary/90 transition">
            <Play className="w-3 h-3" /> Test Request
          </button>
        </div>
      )}
    </div>
  );
}
