import { Compass, Send, Bot, FileText } from 'lucide-react';
import { useApp } from '@/lib/app-context';

export default function EmptyState() {
  const { setCurrentView } = useApp();

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 text-primary/60" />
        </div>
        <h2 className="text-lg font-semibold text-foreground mb-2">Select a method or type</h2>
        <p className="text-sm text-muted-foreground mb-8">
          Choose an item from the left sidebar to view parameters, documentation, and testing options.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setCurrentView({ kind: 'method', name: 'sendMessage' })}
            className="h-9 px-4 flex items-center gap-2 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground hover:bg-accent transition border border-border"
          >
            <Send className="w-3.5 h-3.5" /> Open sendMessage
          </button>
          <button
            onClick={() => setCurrentView({ kind: 'method', name: 'getMe' })}
            className="h-9 px-4 flex items-center gap-2 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground hover:bg-accent transition border border-border"
          >
            <Bot className="w-3.5 h-3.5" /> Open getMe
          </button>
          <button
            onClick={() => setCurrentView({ kind: 'type', name: 'User' })}
            className="h-9 px-4 flex items-center gap-2 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground hover:bg-accent transition border border-border"
          >
            <FileText className="w-3.5 h-3.5" /> Browse Types
          </button>
        </div>
      </div>
    </div>
  );
}
