import { useApp } from '@/lib/app-context';
import { mockTypes } from '@/lib/mock-data';
import { FileText, ExternalLink } from 'lucide-react';

function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'primary' }) {
  return (
    <span className={`inline-flex items-center h-5 px-2 rounded text-[10px] font-medium ${variant === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary text-secondary-foreground'}`}>
      {children}
    </span>
  );
}

export default function TypeView({ name }: { name: string }) {
  const { setCurrentView } = useApp();
  const type = mockTypes[name];

  if (!type) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm font-mono text-foreground mb-1">{name}</p>
          <p className="text-xs text-muted-foreground">Type details coming soon. Select MessageEntity or User for a full demo.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin p-6 space-y-6">
      {/* Header */}
      <div className="bg-card border border-border rounded-lg p-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold font-mono text-foreground">{type.name}</h2>
            <p className="text-sm text-foreground/80 mt-2 leading-relaxed">{type.description}</p>
          </div>
          <Badge variant="primary">Type</Badge>
        </div>
      </div>

      {/* Fields table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-3 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" /> Fields
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Field</th>
                <th className="text-left px-5 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Type</th>
                <th className="text-left px-5 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Required</th>
                <th className="text-left px-5 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody>
              {type.fields.map((f, i) => (
                <tr key={f.name} className={`border-b border-border/50 ${i % 2 === 0 ? '' : 'bg-muted/20'}`}>
                  <td className="px-5 py-3 text-xs font-mono font-medium text-foreground">{f.name}</td>
                  <td className="px-5 py-3"><Badge>{f.type}</Badge></td>
                  <td className="px-5 py-3 text-xs">{f.required ? <span className="text-warning text-[10px] font-medium">Yes</span> : <span className="text-muted-foreground text-[10px]">No</span>}</td>
                  <td className="px-5 py-3 text-xs text-muted-foreground leading-relaxed max-w-md">{f.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Example JSON */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-3 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground">Example JSON</h3>
        </div>
        <pre className="p-5 text-xs font-mono text-foreground leading-relaxed overflow-x-auto scrollbar-thin">
          {JSON.stringify(type.example, null, 2)}
        </pre>
      </div>

      {/* Related */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="text-sm font-semibold text-foreground mb-3">Related Types</h3>
          <div className="flex flex-wrap gap-1.5">
            {type.relatedTypes.map(t => (
              <button
                key={t}
                onClick={() => setCurrentView({ kind: 'type', name: t })}
                className="h-7 px-3 flex items-center gap-1.5 rounded-md text-xs font-mono bg-secondary text-secondary-foreground hover:bg-accent transition border border-border"
              >
                {t} <ExternalLink className="w-2.5 h-2.5" />
              </button>
            ))}
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="text-sm font-semibold text-foreground mb-3">Used by Methods</h3>
          <div className="flex flex-wrap gap-1.5">
            {type.usedByMethods.map(m => (
              <button
                key={m}
                onClick={() => setCurrentView({ kind: 'method', name: m })}
                className="h-7 px-3 flex items-center gap-1.5 rounded-md text-xs font-mono bg-primary/10 text-primary hover:bg-primary/20 transition border border-primary/20"
              >
                {m} <ExternalLink className="w-2.5 h-2.5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
