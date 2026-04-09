import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Copy,
  FileJson,
  BookOpen,
  Loader2,
  ExternalLink,
  Play,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import ReplyMarkupEditor from "@/components/app/ReplyMarkupEditor";
import { useApp } from "@/lib/app-context";
import { executeTelegramMethod } from "@/lib/telegram";
import { implementedMethods, methodRegistry } from "@/methods";
import {
  TelegramMethod,
  TelegramMethodExecutionResult,
  TelegramParam,
} from "@/types/telegram";

type FormValues = Record<string, unknown>;

interface UnionValue {
  variantIndex: number;
  value: string;
}

function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "destructive";
}) {
  const cls = {
    default: "bg-secondary text-secondary-foreground",
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    destructive: "bg-destructive/10 text-destructive",
  }[variant];
  return (
    <span
      className={`inline-flex items-center h-5 px-2 rounded text-[10px] font-medium ${cls}`}
    >
      {children}
    </span>
  );
}

function isUnionValue(value: unknown): value is UnionValue {
  return (
    Boolean(value) &&
    typeof value === "object" &&
    "variantIndex" in value &&
    "value" in value
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function createEmptyValue(param: TelegramParam): unknown {
  if (param.inputType === "boolean") {
    return false;
  }

  if (param.inputType === "union") {
    return {
      variantIndex: 0,
      value: "",
    } satisfies UnionValue;
  }

  return "";
}

function getNumberUnionVariantIndex(param: TelegramParam) {
  return param.unionTypes?.findIndex(
    (unionType) => unionType.inputType === "number",
  );
}

function isChatIdUnionParam(param: TelegramParam) {
  return param.inputType === "union" && param.name.endsWith("chat_id");
}

function getInitialUnionValue(
  param: TelegramParam,
  incoming: unknown,
): UnionValue {
  const numberVariantIndex = getNumberUnionVariantIndex(param);
  const hasNumberVariant =
    numberVariantIndex !== undefined && numberVariantIndex >= 0;

  if (typeof incoming === "number") {
    return {
      variantIndex: hasNumberVariant ? numberVariantIndex : 0,
      value: String(incoming),
    } satisfies UnionValue;
  }

  if (isChatIdUnionParam(param) && hasNumberVariant) {
    return {
      variantIndex: numberVariantIndex,
      value: "",
    } satisfies UnionValue;
  }

  return {
    variantIndex: 1,
    value: incoming === undefined || incoming === null ? "" : String(incoming),
  } satisfies UnionValue;
}

function hasParamValue(param: TelegramParam, value: unknown) {
  if (param.inputType === "boolean") {
    return value === true;
  }

  if (param.inputType === "union" && isUnionValue(value)) {
    return value.value.trim() !== "";
  }

  return typeof value === "string" ? value.trim() !== "" : value != null;
}

function getConditionalRequiredParams(
  method: TelegramMethod,
  values: FormValues,
) {
  const chatIdParam = method.parameters.find(
    (param) => param.name === "chat_id",
  );
  const messageIdParam = method.parameters.find(
    (param) => param.name === "message_id",
  );
  const inlineMessageIdParam = method.parameters.find(
    (param) => param.name === "inline_message_id",
  );

  if (!chatIdParam || !messageIdParam || !inlineMessageIdParam) {
    return new Set<string>();
  }

  if (hasParamValue(inlineMessageIdParam, values.inline_message_id)) {
    return new Set<string>();
  }

  return new Set(["chat_id", "message_id"]);
}

function createFormState(
  method: TelegramMethod,
  payload?: Record<string, unknown>,
): FormValues {
  return method.parameters.reduce<FormValues>((acc, param) => {
    const incoming = payload?.[param.name];

    if (param.inputType === "union") {
      acc[param.name] = getInitialUnionValue(param, incoming);
      return acc;
    }

    if (param.inputType === "boolean") {
      acc[param.name] = Boolean(incoming);
      return acc;
    }

    if (param.valueMode === "json" && incoming !== undefined) {
      acc[param.name] = JSON.stringify(incoming, null, 2);
      return acc;
    }

    acc[param.name] =
      incoming === undefined || incoming === null
        ? createEmptyValue(param)
        : String(incoming);
    return acc;
  }, {});
}

function buildPayload(
  method: TelegramMethod,
  values: FormValues,
  strict = true,
) {
  const payload: Record<string, unknown> = {};
  const conditionalRequiredParams = getConditionalRequiredParams(
    method,
    values,
  );

  if (strict) {
    for (const paramName of conditionalRequiredParams) {
      const param = method.parameters.find((item) => item.name === paramName);

      if (!param || hasParamValue(param, values[paramName])) {
        continue;
      }

      throw new Error(
        `${paramName} is required unless inline_message_id is provided.`,
      );
    }
  }

  for (const param of method.parameters) {
    const rawValue = values[param.name];

    if (param.inputType === "boolean") {
      if (rawValue === true) {
        payload[param.name] = true;
      }
      continue;
    }

    if (param.inputType === "union" && isUnionValue(rawValue)) {
      const variant =
        param.unionTypes?.[rawValue.variantIndex] ?? param.unionTypes?.[0];
      const trimmedValue = rawValue.value.trim();

      if (!trimmedValue) {
        if (param.required && strict) {
          throw new Error(`${param.name} is required.`);
        }
        continue;
      }

      if (variant?.inputType === "number") {
        const parsed = Number(trimmedValue);

        if (Number.isNaN(parsed)) {
          if (strict) {
            throw new Error(`${param.name} must be a valid number.`);
          }
          continue;
        }

        payload[param.name] = parsed;
        continue;
      }

      payload[param.name] = trimmedValue;
      continue;
    }

    const stringValue = typeof rawValue === "string" ? rawValue : "";
    const trimmedValue = stringValue.trim();

    if (!trimmedValue) {
      if (param.required && strict) {
        throw new Error(`${param.name} is required.`);
      }
      continue;
    }

    if (param.valueMode === "json") {
      try {
        payload[param.name] = JSON.parse(stringValue);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Invalid JSON payload.";
        throw new Error(`${param.name} must contain valid JSON. ${message}`);
      }
      continue;
    }

    if (param.inputType === "number") {
      const parsed = Number(trimmedValue);

      if (Number.isNaN(parsed)) {
        if (strict) {
          throw new Error(`${param.name} must be a valid number.`);
        }
        continue;
      }

      payload[param.name] = parsed;
      continue;
    }

    if (param.inputType === "select" && trimmedValue === "") {
      continue;
    }

    payload[param.name] = stringValue;
  }

  return payload;
}

function getResponseOkState(response: TelegramMethodExecutionResult | null) {
  if (!response || !isRecord(response.data)) {
    return null;
  }

  if (response.data.ok === true) {
    return true;
  }

  if (response.data.ok === false) {
    return false;
  }

  return null;
}

function ParamInput({
  param,
  value,
  onChange,
}: {
  param: TelegramParam;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  if (param.inputType === "boolean") {
    const checked = Boolean(value);

    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <div
          className={`relative w-9 h-5 rounded-full border transition ${checked ? "bg-primary border-primary/60" : "bg-input border-border"}`}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => onChange(event.target.checked)}
            className="sr-only"
          />
          <div
            className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full transition ${checked ? "translate-x-4 bg-primary-foreground" : "bg-muted-foreground/40"}`}
          />
        </div>
        <span className="text-xs text-muted-foreground">
          {checked ? "true" : "false"}
        </span>
      </label>
    );
  }

  if (param.inputType === "select" && param.options) {
    return (
      <select
        value={typeof value === "string" ? value : ""}
        onChange={(event) => onChange(event.target.value)}
        className="h-9 px-3 bg-input border border-border rounded-md text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition w-full max-w-xs"
      >
        {param.options.map((option) => (
          <option key={option || "empty"} value={option}>
            {option || "Select mode"}
          </option>
        ))}
      </select>
    );
  }

  if (param.inputType === "textarea") {
    if (param.name === "reply_markup") {
      return <ReplyMarkupEditor value={value} onChange={onChange} />;
    }

    return (
      <div className="w-full">
        <textarea
          value={typeof value === "string" ? value : ""}
          onChange={(event) => onChange(event.target.value)}
          placeholder={`Enter ${param.name}...`}
          className="w-full min-h-[80px] px-3 py-2 bg-input border border-border rounded-md text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition font-mono resize-y"
        />
        {param.valueMode === "json" ? (
          <p className="text-[10px] text-muted-foreground mt-1">
            Enter valid JSON.
          </p>
        ) : (
          <p className="text-[10px] text-muted-foreground mt-1">
            {typeof value === "string" ? value.length : 0} characters
          </p>
        )}
      </div>
    );
  }

  if (param.inputType === "file") {
    return (
      <div className="w-full max-w-2xl">
        <input
          type="text"
          value={typeof value === "string" ? value : ""}
          onChange={(event) => onChange(event.target.value)}
          placeholder={`Enter ${param.name} as a local file path, file_id, or URL...`}
          className="h-9 px-3 bg-input border border-border rounded-md text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition font-mono w-full"
        />
        <p className="text-[10px] text-muted-foreground mt-1">
          Local file paths upload with multipart form data. Telegram file IDs
          and URLs are sent as plain strings.
        </p>
      </div>
    );
  }

  if (param.inputType === "union" && param.unionTypes && isUnionValue(value)) {
    const activeType =
      param.unionTypes[value.variantIndex] ?? param.unionTypes[0];

    return (
      <div className="space-y-2 w-full">
        <div className="flex gap-1">
          {param.unionTypes.map((unionType, index) => (
            <button
              key={unionType.label}
              onClick={() =>
                onChange({ variantIndex: index, value: value.value })
              }
              className={`h-7 px-3 rounded-md text-[10px] font-medium transition border ${
                index === value.variantIndex
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "bg-secondary text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {unionType.label}
            </button>
          ))}
        </div>
        <input
          type={activeType.inputType === "number" ? "number" : "text"}
          value={value.value}
          onChange={(event) =>
            onChange({ ...value, value: event.target.value })
          }
          placeholder={activeType.label}
          className="h-9 px-3 bg-input border border-border rounded-md text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition font-mono w-full max-w-sm"
        />
      </div>
    );
  }

  if (param.inputType === "object") {
    return (
      <textarea
        value={typeof value === "string" ? value : ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder={`Enter ${param.name} as JSON...`}
        className="w-full min-h-[80px] px-3 py-2 bg-input border border-border rounded-md text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition font-mono resize-y"
      />
    );
  }

  return (
    <input
      type={param.inputType === "number" ? "number" : "text"}
      value={typeof value === "string" ? value : ""}
      onChange={(event) => onChange(event.target.value)}
      placeholder={`Enter ${param.name}...`}
      className="h-9 px-3 bg-input border border-border rounded-md text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition font-mono w-full max-w-sm"
    />
  );
}

function ParamRow({
  param,
  value,
  onChange,
}: {
  param: TelegramParam;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-mono font-medium text-foreground">
          {param.name}
        </span>
        <Badge>{param.type}</Badge>
        {param.required ? (
          <Badge variant="warning">Required</Badge>
        ) : (
          <Badge>Optional</Badge>
        )}
      </div>
      <p className="text-[11px] text-muted-foreground leading-relaxed">
        {param.description}
      </p>
      <ParamInput param={param} value={value} onChange={onChange} />
    </div>
  );
}

function ResponseViewer({
  state,
  execution,
  errorMessage,
}: {
  state: "idle" | "loading" | "success" | "error";
  execution: TelegramMethodExecutionResult | null;
  errorMessage: string;
}) {
  const [tab, setTab] = useState<"pretty" | "raw" | "summary">("pretty");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTab("pretty");
    setCopied(false);
  }, [execution]);

  const data = execution?.data ?? null;
  const okState = getResponseOkState(execution);

  const handleCopy = async () => {
    if (!execution) {
      return;
    }

    await navigator.clipboard.writeText(
      JSON.stringify(execution.data, null, 2),
    );
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-foreground">Response</span>
          {okState === true && (
            <Badge variant="success">{execution?.statusCode ?? 200} OK</Badge>
          )}
          {okState === false && (
            <Badge variant="destructive">
              {execution?.statusCode ?? "ERR"} Error
            </Badge>
          )}
          {state === "loading" && (
            <Loader2 className="w-3 h-3 animate-spin text-muted-foreground" />
          )}
          {execution && (
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <Clock className="w-3 h-3" /> {execution.durationMs}ms
            </span>
          )}
        </div>
        {execution && (
          <button
            onClick={() => void handleCopy()}
            className="h-6 px-2 flex items-center gap-1 rounded text-[10px] text-muted-foreground hover:text-foreground hover:bg-accent transition"
          >
            {copied ? (
              <Check className="w-3 h-3" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>

      {execution && (
        <div className="flex gap-1 px-4 pt-2">
          {(["pretty", "raw", "summary"] as const).map((nextTab) => (
            <button
              key={nextTab}
              onClick={() => setTab(nextTab)}
              className={`h-7 px-3 rounded-md text-[10px] font-medium transition ${tab === nextTab ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {nextTab === "pretty"
                ? "Pretty JSON"
                : nextTab === "raw"
                  ? "Raw"
                  : "Summary"}
            </button>
          ))}
        </div>
      )}

      <div className="p-4">
        {state === "idle" && (
          <p className="text-xs text-muted-foreground text-center py-4">
            Run a live request to see Telegram API output here.
          </p>
        )}

        {state === "loading" && (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
          </div>
        )}

        {state === "error" && !execution && (
          <p className="text-xs text-destructive text-center py-4">
            {errorMessage}
          </p>
        )}

        {execution && tab === "summary" && (
          <div className="space-y-4 rounded-md bg-muted/30 p-4 text-xs">
            <div className="grid gap-2 text-muted-foreground sm:grid-cols-2">
              <div>
                <span className="block text-[10px] uppercase tracking-wide">
                  Method
                </span>
                <span className="font-mono text-foreground">
                  {execution.method}
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wide">
                  Status
                </span>
                <span className="font-mono text-foreground">
                  {execution.statusCode ?? "n/a"}
                </span>
              </div>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wide text-muted-foreground mb-2">
                Request payload
              </span>
              <pre className="rounded-md bg-card p-3 font-mono text-[11px] text-foreground overflow-x-auto scrollbar-thin leading-relaxed">
                {JSON.stringify(execution.request, null, 2)}
              </pre>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wide text-muted-foreground mb-2">
                Telegram response
              </span>
              <pre className="rounded-md bg-card p-3 font-mono text-[11px] text-foreground overflow-x-auto scrollbar-thin leading-relaxed">
                {JSON.stringify(execution.data, null, 2)}
              </pre>
            </div>
          </div>
        )}

        {execution && tab === "pretty" && (
          <pre className="text-xs font-mono text-foreground bg-muted/50 rounded-md p-4 overflow-x-auto scrollbar-thin leading-relaxed">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}

        {execution && tab === "raw" && (
          <pre className="text-xs font-mono text-foreground bg-muted/50 rounded-md p-4 overflow-x-auto scrollbar-thin leading-relaxed whitespace-pre-wrap break-all">
            {JSON.stringify(data)}
          </pre>
        )}
      </div>
    </div>
  );
}

export default function MethodView({ name }: { name: string }) {
  const {
    lastResponse,
    registerMethodActions,
    responseState,
    setLastResponse,
    setResponseState,
  } = useApp();
  const method = methodRegistry[name as keyof typeof methodRegistry];
  const [optionalOpen, setOptionalOpen] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>(() =>
    method ? createFormState(method) : {},
  );
  const [localError, setLocalError] = useState("");

  useEffect(() => {
    if (!method) {
      return;
    }

    setFormValues(createFormState(method));
    setOptionalOpen(false);
    setLocalError("");
  }, [method]);

  const updateParamValue = useCallback((paramName: string, value: unknown) => {
    setFormValues((current) => ({
      ...current,
      [paramName]: value,
    }));
  }, []);

  const conditionalRequiredParams = useMemo(
    () =>
      method ? getConditionalRequiredParams(method, formValues) : new Set(),
    [formValues, method],
  );
  const requiredParams = useMemo(
    () =>
      method?.parameters.filter(
        (param) => param.required || conditionalRequiredParams.has(param.name),
      ) ?? [],
    [conditionalRequiredParams, method],
  );
  const optionalParams = useMemo(
    () =>
      method?.parameters.filter(
        (param) =>
          !param.required && !conditionalRequiredParams.has(param.name),
      ) ?? [],
    [conditionalRequiredParams, method],
  );

  const handleSubmit = useCallback(async () => {
    if (!method) {
      return;
    }

    try {
      const payload = buildPayload(method, formValues, true);
      setLocalError("");
      setResponseState("loading");

      const response = await executeTelegramMethod(method.name, payload);
      const okState = getResponseOkState(response);

      setLastResponse(response);
      setResponseState(okState === false ? "error" : "success");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Request failed.";
      setLocalError(message);
      setLastResponse(null);
      setResponseState("error");
      toast.error(message);
    }
  }, [formValues, method, setLastResponse, setResponseState]);

  const handleReset = useCallback(() => {
    if (!method) {
      return;
    }

    setFormValues(createFormState(method));
    setLocalError("");
    setLastResponse(null);
    setResponseState("idle");
  }, [method, setLastResponse, setResponseState]);

  const handleLoadExample = useCallback(() => {
    if (!method) {
      return;
    }

    setFormValues(createFormState(method, method.examplePayload));
    toast.success(`Loaded ${method.name} example payload.`);
  }, [method]);

  const handleCopyJson = useCallback(async () => {
    if (!method) {
      return;
    }

    try {
      const payload = buildPayload(method, formValues, false);
      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
      toast.success("Request JSON copied to clipboard.");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to copy request JSON.";
      toast.error(message);
    }
  }, [formValues, method]);

  useEffect(() => {
    if (!method) {
      registerMethodActions(null);
      return;
    }

    registerMethodActions({
      submit: handleSubmit,
      reset: handleReset,
      loadExample: handleLoadExample,
      copyJson: handleCopyJson,
      isBusy: responseState === "loading",
    });

    return () => registerMethodActions(null);
  }, [
    handleCopyJson,
    handleLoadExample,
    handleReset,
    handleSubmit,
    method,
    registerMethodActions,
    responseState,
  ]);

  if (!method) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <p className="text-sm font-mono text-foreground mb-1">{name}</p>
          <p className="text-xs text-muted-foreground mb-4">
            This method is still using the placeholder screen. The live registry
            currently wires{" "}
            {implementedMethods.map((item) => item.name).join(", ")}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin p-6 space-y-6">
      <div className="bg-card border border-border rounded-lg p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold font-mono text-foreground">
              {method.name}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {method.category}
            </p>
          </div>
          <div className="flex gap-1.5 flex-wrap justify-end">
            <Badge variant="primary">Method</Badge>
            <Badge variant="success">Live Request</Badge>
            <Badge>Telegram Bot API</Badge>
          </div>
        </div>
        <p className="text-sm text-foreground/80 mt-3 leading-relaxed">
          {method.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
          {method.returns && method.returns.length > 0 && (
            <span>
              Returns:{" "}
              <span className="font-mono text-foreground">
                {method.returns.join(" | ")}
              </span>
            </span>
          )}
          {method.href && (
            <a
              href={method.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition"
            >
              Official docs <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
        <div className="mt-3 px-3 py-2 bg-muted/50 rounded-md">
          <code className="text-xs font-mono text-muted-foreground">
            /bot&lt;TOKEN&gt;/
            <span className="text-primary">{method.name}</span>
          </code>
        </div>
      </div>

      {method.parameters.length === 0 && (
        <div className="rounded-lg border border-border bg-card px-5 py-4 text-xs text-muted-foreground">
          This method does not require parameters. You can run it immediately.
        </div>
      )}

      {method.parameters.length > 0 && (
        <div className="space-y-4">
          {requiredParams.length > 0 && (
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" /> Required
                Parameters
              </h3>
              <div className="space-y-5">
                {requiredParams.map((param) => (
                  <ParamRow
                    key={param.name}
                    param={param}
                    value={formValues[param.name]}
                    onChange={(value) => updateParamValue(param.name, value)}
                  />
                ))}
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
                  <span className="text-[10px] font-normal text-muted-foreground">
                    ({optionalParams.length})
                  </span>
                </h3>
                {optionalOpen ? (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              <AnimatePresence>
                {optionalOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 space-y-5 border-t border-border pt-5">
                      {optionalParams.map((param) => (
                        <ParamRow
                          key={param.name}
                          param={param}
                          value={formValues[param.name]}
                          onChange={(value) =>
                            updateParamValue(param.name, value)
                          }
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}

      {localError && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-xs text-destructive">
          {localError}
        </div>
      )}

      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => void handleSubmit()}
          disabled={responseState === "loading"}
          className="h-10 px-6 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary/90 disabled:opacity-50 transition"
        >
          {responseState === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Play className="w-4 h-4" />
          )}
          Submit Test
        </button>
        <button
          onClick={handleReset}
          className="h-10 px-4 bg-secondary text-secondary-foreground rounded-lg text-sm flex items-center gap-2 hover:bg-accent transition border border-border"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Form
        </button>
        <button
          onClick={handleLoadExample}
          className="h-10 px-4 bg-secondary text-secondary-foreground rounded-lg text-sm flex items-center gap-2 hover:bg-accent transition border border-border"
        >
          <BookOpen className="w-3.5 h-3.5" /> Load Example
        </button>
        <button
          onClick={() => void handleCopyJson()}
          className="h-10 px-4 bg-secondary text-secondary-foreground rounded-lg text-sm flex items-center gap-2 hover:bg-accent transition border border-border"
        >
          <FileJson className="w-3.5 h-3.5" /> Preview JSON
        </button>
      </div>

      <ResponseViewer
        state={responseState}
        execution={lastResponse}
        errorMessage={localError}
      />
    </div>
  );
}
