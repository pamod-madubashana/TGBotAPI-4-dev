export interface TelegramMethod {
  name: string;
  href?: string;
  category: string;
  description: string;
  returns?: string[];
  parameters: TelegramParam[];
  examplePayload?: Record<string, unknown>;
}

export interface TelegramParam {
  name: string;
  type: string;
  required: boolean;
  description: string;
  inputType:
    | "text"
    | "textarea"
    | "number"
    | "boolean"
    | "select"
    | "union"
    | "object"
    | "file";
  options?: string[];
  unionTypes?: {
    label: string;
    inputType: "text" | "number" | "object" | "file";
  }[];
  fields?: TelegramParam[];
  valueMode?: "text" | "json";
}

export interface TelegramType {
  name: string;
  href?: string;
  description: string;
  fields: TypeField[];
  example: Record<string, unknown>;
  relatedTypes: string[];
  usedByMethods: string[];
}

export interface TypeField {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export type AppView =
  | { kind: "empty" }
  | { kind: "method"; name: string }
  | { kind: "type"; name: string };

export interface TelegramMethodExecutionResult {
  method: string;
  statusCode: number | null;
  durationMs: number;
  data: unknown;
  request: Record<string, unknown>;
}

export interface TokenValidationResult {
  token: string;
  profile: Record<string, unknown>;
  response: TelegramMethodExecutionResult;
}

export interface AppSettings {
  sidebarCollapsed: boolean;
}

export interface SavedPreset {
  id: string;
  name: string;
  method: string;
  payload: Record<string, unknown>;
  createdAt: number;
}

export interface RequestHistoryEntry {
  id: string;
  method: string;
  request: Record<string, unknown>;
  response: unknown;
  statusCode: number | null;
  durationMs: number;
  createdAt: number;
}
