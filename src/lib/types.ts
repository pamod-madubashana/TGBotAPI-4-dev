export interface TelegramMethod {
  name: string;
  category: string;
  description: string;
  parameters: TelegramParam[];
}

export interface TelegramParam {
  name: string;
  type: string;
  required: boolean;
  description: string;
  inputType: 'text' | 'textarea' | 'number' | 'boolean' | 'select' | 'union' | 'object';
  options?: string[];
  unionTypes?: { label: string; inputType: string }[];
  fields?: TelegramParam[];
}

export interface TelegramType {
  name: string;
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
  | { kind: 'empty' }
  | { kind: 'method'; name: string }
  | { kind: 'type'; name: string };
