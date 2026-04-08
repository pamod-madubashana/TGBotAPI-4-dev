import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, RotateCcw, FileJson, BookOpen, Copy, Check, Clock, Loader2 } from 'lucide-react';
import { useApp } from '@/lib/app-context';
import { mockMethods, mockSuccessResponse, mockErrorResponse } from '@/lib/mock-data';
import { TelegramParam } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive' }) {
  const cls = {
    default: 'bg-secondary text-secondary-foreground',
    primary: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    destructive: 'bg-destructive/10 text-destructive',
  }[variant];
  return <span className={`inline-flex items-center h-5 px-2 rounded text-[10px] font-medium ${cls}`}>{children}</span>;
}

function ParamInput({ param }: { param: TelegramParam }) {
  const [unionIdx, setUnionIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);

  if (param.inputType === 'boolean') {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <div className="relative w-9 h-5 bg-input rounded-full border border-border transition peer-checked:bg-primary">
          <input type="checkbox" className="peer sr-only" />
          <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-muted-foreground/30 rounded-full transition peer-checked:translate-x-4 peer-checked:bg-primary" />
        </div>
        <span className="text-xs text-muted-foreground">false</span>
      </label>
    );
  }

  if (param.inputType === 'select' && param.options) {
    return (
      <select className="h-9 px-3 bg-input border border-border rounded-md text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition w-full max-w-xs">
        {param.options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    );
  }

  if (param.inputType === 'textarea') {
    return (
      <div className="w-full">
        <textarea
          placeholder={`Enter ${param.name}...`}
          className="w-full min-h-[80px] px-3 py-2 bg-input border border-border rounded-md text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition font-mono resize-y"
        />
        <p className="text-[10px] text-muted-foreground mt-1">0 / 4096 characters</p>
      </div>
    );
  }

  if (param.inputType === 'union' && param.unionTypes) {
    return (
      <div className="space-y-2 w-full">
        <div className="flex gap-1">
          {param.unionTypes.map((ut, i) => (
            <button
              key={ut.label}
              onClick={() => setUnionIdx(i)}
              className={`h-7 px-3 rounded-md text-[10px] font-medium transition border ${
                i === unionIdx ? 'bg-primary/10 text-primary border-primary/30' : 'bg-secondary text-muted-foreground border-border hover:text-foreground'
              }`}
            >
              {ut.label}
            </button>
          ))}
        </div>
        <input
          type={param.unionTypes[unionIdx].inputType === 'number' ? 'number' : 'text'}
          placeholder={param.unionTypes[unionIdx].label}
          className="h-9 px-3 bg-input border border-border rounded-md text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition font-mono w-full max-w-sm"
        />
      </div>
    );
  }

  if (param.inputType === 'object') {
    return (
      <div className="w-full">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 h-8 px-3 rounded-md text-xs bg-secondary text-secondary-foreground hover:bg-accent transition border border-border"
        >
          {expanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          {param.type}
          <span className="text-muted-foreground text-[10px] ml-1">• Edit as JSON</span>
        </button>
        <AnimatePresence>
          {expanded && param.fields && param.fields.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="overflow-hidden"
            >
              <div className="mt-2 pl-4 border-l-2 border-border space-y-3">
                {param.fields.map(f => (
                  <ParamRow key={f.name} param={f} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <input
      type={param.inputType === 'number' ? 'number' : 'text'}
      placeholder={`Enter ${param.name}...`}
      className="h-9 px-3 bg-input border border-border rounded-md text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition font-mono w-full max-w-sm"
    />
  );
}

function ParamRow({ param }: { param: TelegramParam }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-mono font-medium text-foreground">{param.name}</span>
        <Badge>{param.type}</Badge>
        {param.required ? <Badge variant="warning">Required</Badge> : <Badge>Optional</Badge>}
      </div>
      <p className="text-[11px] text-muted-foreground leading-relaxed">{param.description}</p>
      <ParamInput param={param} />
    </div>
  );
}

function ResponseViewer({ state }: { state: 'idle' | 'loading' | 'success' | 'error' }) {
  const [tab, setTab] = useState<'pretty' | 'raw' | 'summary'>('pretty');
  const [copied, setCopied] = useState(false);

  const data = state === 'success' ? mockSuccessResponse : state === 'error' ? mockErrorResponse : null;

  const handleCopy = () => {
    if (data) {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-foreground">Response</span>
          {state === 'success' && <Badge variant="success">200 OK</Badge>}
          {state === 'error' && <Badge variant="destructive">400 Error</Badge>}
          {state === 'loading' && <Loader2 className="w-3 h-3 animate-spin text-muted-foreground" />}
          {(state === 'success' || state === 'error') && (
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <Clock className="w-3 h-3" /> 234ms
            </span>
          )}
        </div>
        {data && (
          <button onClick={handleCopy} className="h-6 px-2 flex items-center gap-1 rounded text-[10px] text-muted-foreground hover:text-foreground hover:bg-accent transition">
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        )}
      </div>

      {data && (
        <div className="flex gap-1 px-4 pt-2">
          {(['pretty', 'raw', 'summary'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} className={`h-7 px-3 rounded-md text-[10px] font-medium transition ${tab === t ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              {t === 'pretty' ? 'Pretty JSON' : t === 'raw' ? 'Raw' : 'Summary'}
            </button>
          ))}
        </div>
      )}

      <div className="p-4">
        {state === 'idle' && (
          <p className="text-xs text-muted-foreground text-center py-4">Run a test request to see Telegram API output here.</p>
        )}
        {state === 'loading' && (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
          </div>
        )}
        {data && (
          <pre className="text-xs font-mono text-foreground bg-muted/50 rounded-md p-4 overflow-x-auto scrollbar-thin leading-relaxed">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

export default function MethodView({ name }: { name: string }) {
  const { responseState, setResponseState } = useApp();
  const method = mockMethods[name];
  const [optionalOpen, setOptionalOpen] = useState(false);

  const handleSubmit = async () => {
    setResponseState('loading');
    await new Promise(r => setTimeout(r, 1500));
    setResponseState(Math.random() > 0.3 ? 'success' : 'error');
  };

  if (!method) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm font-mono text-foreground mb-1">{name}</p>
          <p className="text-xs text-muted-foreground">Method details coming soon. Select sendMessage or getMe for a full demo.</p>
        </div>
      </div>
    );
  }

  const requiredParams = method.parameters.filter(p => p.required);
  const optionalParams = method.parameters.filter(p => !p.required);

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin p-6 space-y-6">
      {/* Header */}
      <div className="bg-card border border-border rounded-lg p-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold font-mono text-foreground">{method.name}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">{method.category}</p>
          </div>
          <div className="flex gap-1.5">
            <Badge variant="primary">Method</Badge>
            <Badge variant="success">Supports Testing</Badge>
            <Badge>Telegram Bot API</Badge>
          </div>
        </div>
        <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{method.description}</p>
        <div className="mt-3 px-3 py-2 bg-muted/50 rounded-md">
          <code className="text-xs font-mono text-muted-foreground">/bot&lt;TOKEN&gt;/<span className="text-primary">{method.name}</span></code>
        </div>
      </div>

      {/* Parameters */}
      {method.parameters.length > 0 && (
        <div className="space-y-4">
          {requiredParams.length > 0 && (
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" /> Required Parameters
              </h3>
              <div className="space-y-5">
                {requiredParams.map(p => <ParamRow key={p.name} param={p} />)}
              </div>
            </div>
          )}

          {optionalParams.length > 0 && (
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOptionalOpen(!optionalOpen)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  Optional Parameters
                  <span className="text-[10px] font-normal text-muted-foreground">({optionalParams.length})</span>
                </h3>
                {optionalOpen ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
              </button>
              <AnimatePresence>
                {optionalOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 space-y-5 border-t border-border pt-5">
                      {optionalParams.map(p => <ParamRow key={p.name} param={p} />)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleSubmit}
          disabled={responseState === 'loading'}
          className="h-10 px-6 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary/90 disabled:opacity-50 transition"
        >
          {responseState === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
          Submit Test
        </button>
        <button className="h-10 px-4 bg-secondary text-secondary-foreground rounded-lg text-sm flex items-center gap-2 hover:bg-accent transition border border-border">
          <RotateCcw className="w-3.5 h-3.5" /> Reset Form
        </button>
        <button className="h-10 px-4 bg-secondary text-secondary-foreground rounded-lg text-sm flex items-center gap-2 hover:bg-accent transition border border-border">
          <BookOpen className="w-3.5 h-3.5" /> Load Example
        </button>
        <button className="h-10 px-4 bg-secondary text-secondary-foreground rounded-lg text-sm flex items-center gap-2 hover:bg-accent transition border border-border">
          <FileJson className="w-3.5 h-3.5" /> Preview JSON
        </button>
      </div>

      {/* Response */}
      <ResponseViewer state={responseState} />
    </div>
  );
}
