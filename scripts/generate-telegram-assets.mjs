import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const specPath = path.join(root, "telegram-api-spec.json");
const methodsDir = path.join(root, "src", "methods");
const rustTelegramDir = path.join(root, "src-tauri", "src", "telegram");
const sidebarPath = path.join(root, "src", "lib", "sidebar-data.ts");
const typeDataPath = path.join(root, "src", "lib", "telegram-types.ts");

const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));

const MULTILINE_PARAM_NAMES = new Set([
  "text",
  "caption",
  "description",
  "bio",
  "question",
  "explanation",
  "quote",
  "payload",
  "url",
  "message_text",
  "business_intro",
  "reason",
]);

const GETTING_UPDATES_METHODS = [
  "getUpdates",
  "setWebhook",
  "deleteWebhook",
  "getWebhookInfo",
];

const UPDATING_MESSAGES_METHODS = [
  "editMessageText",
  "editMessageCaption",
  "editMessageMedia",
  "editMessageLiveLocation",
  "stopMessageLiveLocation",
  "editMessageReplyMarkup",
  "editMessageChecklist",
  "stopPoll",
  "deleteMessage",
  "deleteMessages",
  "approveSuggestedPost",
  "declineSuggestedPost",
];

const STICKER_METHODS = [
  "sendSticker",
  "getStickerSet",
  "getCustomEmojiStickers",
  "uploadStickerFile",
  "createNewStickerSet",
  "addStickerToSet",
  "setStickerPositionInSet",
  "deleteStickerFromSet",
  "replaceStickerInSet",
  "setStickerEmojiList",
  "setStickerKeywords",
  "setStickerMaskPosition",
  "setStickerSetTitle",
  "setStickerSetThumbnail",
  "setCustomEmojiStickerSetThumbnail",
  "deleteStickerSet",
];

const INLINE_MODE_METHODS = [
  "answerInlineQuery",
  "answerWebAppQuery",
  "savePreparedInlineMessage",
  "savePreparedKeyboardButton",
];

const PAYMENT_METHODS = [
  "sendInvoice",
  "createInvoiceLink",
  "answerShippingQuery",
  "answerPreCheckoutQuery",
];

const PASSPORT_METHODS = ["setPassportDataErrors"];

const GAME_METHODS = ["sendGame", "setGameScore", "getGameHighScores"];

const OFFICIAL_METHOD_SECTIONS = [
  { label: "Getting updates", methods: GETTING_UPDATES_METHODS },
  { label: "Updating messages", methods: UPDATING_MESSAGES_METHODS },
  { label: "Stickers", methods: STICKER_METHODS },
  { label: "Inline mode", methods: INLINE_MODE_METHODS },
  { label: "Payments", methods: PAYMENT_METHODS },
  { label: "Telegram Passport", methods: PASSPORT_METHODS },
  { label: "Games", methods: GAME_METHODS },
];

const SIDEBAR_METHOD_SECTIONS = OFFICIAL_METHOD_SECTIONS;

function toSnakeCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2")
    .toLowerCase();
}

function isBooleanType(type) {
  return type === "Boolean" || type === "True";
}

function isNumberType(type) {
  return type === "Integer" || type === "Float" || type === "Int";
}

function isArrayType(type) {
  return type.startsWith("Array of ");
}

function isInputFileType(type) {
  return type === "InputFile";
}

function isSimpleStringType(type) {
  return type === "String";
}

function isScalarUnion(types) {
  return types.every(
    (type) =>
      isNumberType(type) || isSimpleStringType(type) || isInputFileType(type),
  );
}

function shouldUseTextarea(field, types) {
  if (types.some((type) => isArrayType(type))) {
    return true;
  }

  if (
    types.some(
      (type) =>
        !isNumberType(type) &&
        !isBooleanType(type) &&
        !isSimpleStringType(type) &&
        !isInputFileType(type),
    )
  ) {
    return true;
  }

  return MULTILINE_PARAM_NAMES.has(field.name);
}

function buildUnionTypes(types) {
  return types.map((type) => ({
    label: type,
    inputType: isNumberType(type)
      ? "number"
      : isInputFileType(type)
        ? "file"
        : "text",
  }));
}

function buildParam(field) {
  const types = field.types ?? ["String"];
  const typeLabel = types.join(" or ");
  const param = {
    name: field.name,
    type: typeLabel,
    required: Boolean(field.required),
    description: field.description,
  };

  if (types.length === 1) {
    const [type] = types;

    if (isBooleanType(type)) {
      return { ...param, inputType: "boolean" };
    }

    if (isNumberType(type)) {
      return { ...param, inputType: "number" };
    }

    if (isInputFileType(type)) {
      return { ...param, inputType: "file" };
    }

    if (isArrayType(type)) {
      return { ...param, inputType: "textarea", valueMode: "json" };
    }

    if (shouldUseTextarea(field, types)) {
      return {
        ...param,
        inputType: "textarea",
        valueMode: isSimpleStringType(type) ? "text" : "json",
      };
    }

    if (!isSimpleStringType(type)) {
      return { ...param, inputType: "textarea", valueMode: "json" };
    }

    return { ...param, inputType: "text" };
  }

  if (
    types.includes("InputFile") &&
    types.every((type) => type === "InputFile" || type === "String")
  ) {
    return { ...param, inputType: "file" };
  }

  if (
    isScalarUnion(types) &&
    types.some((type) => isNumberType(type)) &&
    types.some((type) => isSimpleStringType(type))
  ) {
    return {
      ...param,
      inputType: "union",
      unionTypes: buildUnionTypes(types),
    };
  }

  return {
    ...param,
    inputType: "textarea",
    valueMode: "json",
  };
}

function exampleString(fieldName) {
  if (fieldName.includes("url")) {
    return "https://example.com";
  }

  if (
    fieldName.includes("photo") ||
    fieldName.includes("thumbnail") ||
    fieldName.includes("sticker")
  ) {
    return "C:/path/to/file";
  }

  if (fieldName.includes("username")) {
    return "example_username";
  }

  if (fieldName.includes("chat_id")) {
    return "@your_channel";
  }

  if (fieldName.includes("token")) {
    return "123456789:ABCDEF_example_token";
  }

  if (fieldName.includes("title")) {
    return "Example title";
  }

  if (fieldName.includes("question")) {
    return "Example question";
  }

  if (fieldName.includes("caption")) {
    return "Sent from Telegram Bot API Tester";
  }

  if (fieldName.includes("description") || fieldName.includes("bio")) {
    return "Example description";
  }

  if (fieldName.includes("text")) {
    return "Hello from Telegram Bot API Tester";
  }

  if (fieldName.includes("emoji")) {
    return "🔥";
  }

  if (fieldName.includes("phone")) {
    return "+10000000000";
  }

  return "example";
}

function buildExampleValue(field) {
  const types = field.types ?? ["String"];

  if (types.includes("InputFile")) {
    return "C:/path/to/file";
  }

  if (
    types.length > 1 &&
    types.some((type) => isNumberType(type)) &&
    types.some((type) => isSimpleStringType(type))
  ) {
    return field.name === "chat_id" ? "@your_channel" : 1;
  }

  const [type] = types;

  if (isBooleanType(type)) {
    return true;
  }

  if (isNumberType(type)) {
    if (field.name.includes("latitude")) {
      return 37.7749;
    }

    if (field.name.includes("longitude")) {
      return -122.4194;
    }

    return 1;
  }

  if (isArrayType(type)) {
    if (field.name === "allowed_updates") {
      return ["message", "callback_query"];
    }

    return [];
  }

  if (!isSimpleStringType(type)) {
    return {};
  }

  return exampleString(field.name);
}

function buildExamplePayload(fields = []) {
  const examplePayload = {};

  for (const field of fields) {
    if (!field.required) {
      continue;
    }

    examplePayload[field.name] = buildExampleValue(field);
  }

  return examplePayload;
}

function extractReferencedTypes(typeLabels = []) {
  const references = new Set();

  for (const typeLabel of typeLabels) {
    const normalized = typeLabel.replace(/^Array of /, "");
    if (spec.types[normalized]) {
      references.add(normalized);
    }
  }

  return [...references];
}

function buildUsedByMethodsMap() {
  const usedBy = new Map();

  for (const typeName of Object.keys(spec.types)) {
    usedBy.set(typeName, []);
  }

  for (const [methodName, methodSpec] of Object.entries(spec.methods)) {
    const referenced = new Set();

    for (const field of methodSpec.fields ?? []) {
      for (const typeName of extractReferencedTypes(field.types ?? [])) {
        referenced.add(typeName);
      }
    }

    for (const typeName of extractReferencedTypes(methodSpec.returns ?? [])) {
      referenced.add(typeName);
    }

    for (const typeName of referenced) {
      usedBy.get(typeName)?.push(methodName);
    }
  }

  return usedBy;
}

function buildTypeExample(typeSpec) {
  const example = {};

  for (const field of typeSpec.fields ?? []) {
    if (!field.required) {
      continue;
    }

    example[field.name] = buildExampleValue(field);
  }

  return example;
}

function buildTypeDefinition(typeName, typeSpec, usedByMethodsMap) {
  const fields = (typeSpec.fields ?? []).map((field) => ({
    name: field.name,
    type: (field.types ?? ["String"]).join(" or "),
    required: Boolean(field.required),
    description: field.description,
  }));
  const relatedTypes = new Set();

  for (const field of typeSpec.fields ?? []) {
    for (const relatedType of extractReferencedTypes(field.types ?? [])) {
      if (relatedType !== typeName) {
        relatedTypes.add(relatedType);
      }
    }
  }

  return {
    name: typeName,
    href: typeSpec.href,
    description: (typeSpec.description ?? []).join("\n\n"),
    fields,
    example: buildTypeExample(typeSpec),
    relatedTypes: [...relatedTypes].sort((left, right) =>
      left.localeCompare(right),
    ),
    usedByMethods: (usedByMethodsMap.get(typeName) ?? []).sort((left, right) =>
      left.localeCompare(right),
    ),
  };
}

function resolveCategory(methodName) {
  for (const section of OFFICIAL_METHOD_SECTIONS) {
    if (section.methods.includes(methodName)) {
      return section.label;
    }
  }

  return "Available methods";
}

function buildMethodDefinition(methodName, methodSpec) {
  return {
    name: methodName,
    href: methodSpec.href,
    category: resolveCategory(methodName),
    description: (methodSpec.description ?? []).join("\n\n"),
    returns: methodSpec.returns ?? [],
    parameters: (methodSpec.fields ?? []).map(buildParam),
    examplePayload: buildExamplePayload(methodSpec.fields),
  };
}

function writeFile(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents);
}

function clearGeneratedFiles(directory, extensions) {
  for (const entry of fs.readdirSync(directory)) {
    const filePath = path.join(directory, entry);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      continue;
    }

    if (extensions.some((extension) => entry.endsWith(extension))) {
      fs.unlinkSync(filePath);
    }
  }
}

function buildMethodFile(definition) {
  return `import type { TelegramMethod } from "@/types/telegram";\n\nconst method: TelegramMethod = ${JSON.stringify(definition, null, 2)};\n\nexport default method;\n`;
}

function buildRustMethodFile(methodName, methodSpec) {
  const fileFields = (methodSpec.fields ?? [])
    .filter((field) => (field.types ?? []).includes("InputFile"))
    .map((field) => `"${field.name}"`);

  return `use serde_json::Value;\n\nuse super::{RawTelegramResponse, TelegramClient};\n\npub async fn execute(client: &TelegramClient, params: Value) -> Result<RawTelegramResponse, String> {\n    client.post("${methodName}", params, &[${fileFields.join(", ")}]).await\n}\n`;
}

function buildMethodsIndex() {
  return `import type { TelegramMethod } from "@/types/telegram";\n\nconst modules = import.meta.glob<{ default: TelegramMethod }>("./*.tsx", { eager: true });\n\nexport const methodRegistry = Object.fromEntries(\n  Object.values(modules)\n    .map((module) => module.default)\n    .sort((left, right) => left.name.localeCompare(right.name))\n    .map((method) => [method.name, method]),\n) as Record<string, TelegramMethod>;\n\nexport const implementedMethods = Object.values(methodRegistry);\n`;
}

function buildRustTelegramMod(methodNames) {
  const moduleLines = methodNames
    .map((methodName) => `pub mod ${toSnakeCase(methodName)};`)
    .join("\n");

  const matchLines = methodNames
    .map(
      (methodName) =>
        `        \"${methodName}\" => ${toSnakeCase(methodName)}::execute(&client, params).await?,`,
    )
    .join("\n");

  return `${moduleLines}\n\nuse reqwest::{multipart, Client};\nuse serde::{Deserialize, Serialize};\nuse serde_json::{Map, Value};\nuse std::path::PathBuf;\nuse std::time::Instant;\n\n#[derive(Debug, Clone)]\npub struct TelegramClient {\n    http: Client,\n    token: String,\n}\n\n#[derive(Debug, Clone)]\npub struct RawTelegramResponse {\n    pub status_code: Option<u16>,\n    pub request: Value,\n    pub body: Value,\n}\n\n#[derive(Debug, Clone, Serialize, Deserialize)]\n#[serde(rename_all = \"camelCase\")]\npub struct MethodExecutionResult {\n    pub method: String,\n    pub status_code: Option<u16>,\n    pub duration_ms: u64,\n    pub data: Value,\n    pub request: Value,\n}\n\nimpl TelegramClient {\n    pub fn new(token: String) -> Self {\n        Self {\n            http: Client::new(),\n            token,\n        }\n    }\n\n    pub async fn post(\n        &self,\n        method: &str,\n        payload: Value,\n        file_fields: &[&str],\n    ) -> Result<RawTelegramResponse, String> {\n        let request = ensure_object(payload);\n        let url = format!(\"https://api.telegram.org/bot{}/{}\", self.token, method);\n        let request_builder = self.http.post(url);\n        let response = if let Some(form) = maybe_build_multipart_form(&request, file_fields)? {\n            request_builder\n                .multipart(form)\n                .send()\n                .await\n                .map_err(|error| format!(\"request to Telegram failed: {error}\"))?\n        } else {\n            request_builder\n                .json(&request)\n                .send()\n                .await\n                .map_err(|error| format!(\"request to Telegram failed: {error}\"))?\n        };\n\n        let status_code = Some(response.status().as_u16());\n        let body = response\n            .json::<Value>()\n            .await\n            .map_err(|error| format!(\"failed to decode Telegram response: {error}\"))?;\n\n        Ok(RawTelegramResponse {\n            status_code,\n            request,\n            body,\n        })\n    }\n}\n\nfn ensure_object(value: Value) -> Value {\n    match value {\n        Value::Object(_) => value,\n        _ => Value::Object(Map::new()),\n    }\n}\n\nfn resolve_upload_path(raw: &str) -> Option<PathBuf> {\n    let trimmed = raw.trim();\n\n    if trimmed.is_empty() {\n        return None;\n    }\n\n    let normalized = if let Some(stripped) = trimmed.strip_prefix(\"file:///\") {\n        if cfg!(windows) {\n            stripped.replace('/', "\\\\")\n        } else {\n            format!(\"/{}\", stripped)\n        }\n    } else if let Some(stripped) = trimmed.strip_prefix(\"file://\") {\n        stripped.to_string()\n    } else {\n        trimmed.to_string()\n    };\n\n    let path = PathBuf::from(normalized);\n    if path.is_file() {\n        Some(path)\n    } else {\n        None\n    }\n}\n\nfn value_to_form_text(value: &Value) -> Result<String, String> {\n    match value {\n        Value::Null => Ok(String::new()),\n        Value::String(value) => Ok(value.clone()),\n        Value::Bool(value) => Ok(value.to_string()),\n        Value::Number(value) => Ok(value.to_string()),\n        _ => serde_json::to_string(value)\n            .map_err(|error| format!(\"failed to serialize multipart field: {error}\")),\n    }\n}\n\nfn maybe_build_multipart_form(\n    request: &Value,\n    file_fields: &[&str],\n) -> Result<Option<multipart::Form>, String> {\n    let object = match request {\n        Value::Object(object) => object,\n        _ => return Ok(None),\n    };\n\n    let mut has_upload = false;\n    let mut form = multipart::Form::new();\n\n    for (key, value) in object {\n        if value.is_null() {\n            continue;\n        }\n\n        if file_fields.contains(&key.as_str()) {\n            if let Some(raw_path) = value.as_str() {\n                if let Some(path) = resolve_upload_path(raw_path) {\n                    let file_name = path\n                        .file_name()\n                        .and_then(|name| name.to_str())\n                        .unwrap_or(\"upload.bin\")\n                        .to_string();\n                    let bytes = std::fs::read(&path)\n                        .map_err(|error| format!(\"failed to read {}: {error}\", path.display()))?;\n                    let part = multipart::Part::bytes(bytes).file_name(file_name);\n                    form = form.part(key.to_string(), part);\n                    has_upload = true;\n                    continue;\n                }\n            }\n        }\n\n        form = form.text(key.to_string(), value_to_form_text(value)?);\n    }\n\n    if has_upload {\n        Ok(Some(form))\n    } else {\n        Ok(None)\n    }\n}\n\npub async fn execute_method(\n    token: String,\n    method: String,\n    params: Value,\n) -> Result<MethodExecutionResult, String> {\n    let client = TelegramClient::new(token);\n    let started_at = Instant::now();\n\n    let result = match method.as_str() {\n${matchLines}\n        _ => return Err(format!(\"unsupported Telegram method: {method}\")),\n    };\n\n    Ok(MethodExecutionResult {\n        method,\n        status_code: result.status_code,\n        duration_ms: started_at.elapsed().as_millis() as u64,\n        data: result.body,\n        request: ensure_object(result.request),\n    })\n}\n`;
}

function buildSidebarFile(methodNames) {
  const typeNames = Object.keys(spec.types).sort((left, right) =>
    left.localeCompare(right),
  );
  const officialMethodNames = new Set(
    OFFICIAL_METHOD_SECTIONS.flatMap((section) => section.methods),
  );
  const availableMethods = methodNames.filter(
    (method) => !officialMethodNames.has(method),
  );
  const sections = [
    {
      label: "Getting updates",
      items: [
        { name: "Update", kind: "type" },
        ...gettingUpdatesMethods
          .filter((method) => methodNames.includes(method))
          .map((name) => ({ name, kind: "method" })),
        { name: "WebhookInfo", kind: "type" },
      ],
    },
    {
      label: "Available types",
      items: typeNames.map((name) => ({ name, kind: "type" })),
    },
    {
      label: "Available methods",
      items: availableMethods.map((name) => ({ name, kind: "method" })),
    },
    {
      label: "Updating messages",
      items: updatingMessagesMethods.map((name) => ({
        name,
        kind: "method",
      })),
    },
    {
      label: "Stickers",
      items: stickerMethods.map((name) => ({ name, kind: "method" })),
    },
    {
      label: "Inline mode",
      items: inlineModeMethods.map((name) => ({ name, kind: "method" })),
    },
    {
      label: "Payments",
      items: paymentMethods.map((name) => ({ name, kind: "method" })),
    },
    {
      label: "Telegram Passport",
      items: telegramPassportMethods.map((name) => ({
        name,
        kind: "method",
      })),
    },
    {
      label: "Games",
      items: gameMethods.map((name) => ({ name, kind: "method" })),
    },
  ];

  return `import { implementedMethods } from "@/methods";\n\nexport const sidebarGroups = {\n  sections: ${JSON.stringify(sections, null, 2)},\n};\n\nexport const completeMethodNames = implementedMethods.map((method) => method.name);\n`;
}

function buildTypeDataFile() {
  const usedByMethodsMap = buildUsedByMethodsMap();
  const types = Object.keys(spec.types)
    .sort((left, right) => left.localeCompare(right))
    .map((typeName) =>
      buildTypeDefinition(typeName, spec.types[typeName], usedByMethodsMap),
    );

  return `import type { TelegramType } from "@/types/telegram";\n\nexport const telegramTypes: Record<string, TelegramType> = Object.fromEntries(\n  ${JSON.stringify(types, null, 2)}.map((type) => [type.name, type]),\n);\n`;
}

const methodNames = Object.keys(spec.methods).sort((left, right) =>
  left.localeCompare(right),
);

clearGeneratedFiles(methodsDir, [".tsx", ".ts"]);
clearGeneratedFiles(rustTelegramDir, [".rs"]);

for (const methodName of methodNames) {
  const definition = buildMethodDefinition(
    methodName,
    spec.methods[methodName],
  );
  const frontendFilePath = path.join(methodsDir, `${methodName}.tsx`);
  const rustFilePath = path.join(
    rustTelegramDir,
    `${toSnakeCase(methodName)}.rs`,
  );

  writeFile(frontendFilePath, buildMethodFile(definition));
  writeFile(
    rustFilePath,
    buildRustMethodFile(methodName, spec.methods[methodName]),
  );
}

writeFile(path.join(methodsDir, "index.ts"), buildMethodsIndex());
writeFile(
  path.join(rustTelegramDir, "mod.rs"),
  buildRustTelegramMod(methodNames),
);
writeFile(sidebarPath, buildSidebarFile(methodNames));
writeFile(typeDataPath, buildTypeDataFile());

console.log(
  `Generated ${methodNames.length} frontend method files and ${methodNames.length} Rust method files.`,
);
