# AGENTS.md

## Purpose
- This repository is a Tauri v2 desktop app for testing Telegram Bot API methods.
- Frontend stack: React 18, TypeScript, Vite, Tailwind, shadcn/ui-style components.
- Backend stack: Rust + Tauri commands.
- Agents must preserve the existing UI and extend it incrementally.

## Rule Priority
- Follow direct user instructions first.
- Follow repository architecture and existing code patterns next.
- Do not invent large rewrites when a local refactor is enough.

## Mandatory Workflow Rules
- Do not run builds, tests, dev servers, or other verification commands unless the user explicitly asks.
- After every code change, format touched frontend `ts`, `tsx`, and `json` files with Prettier.
- After every Rust change, run `cargo fmt --manifest-path src-tauri/Cargo.toml`.
- If you did not run verification because the user did not ask, say so clearly in your final response.
- Do not regenerate the whole frontend; preserve layout, styling, and existing interaction patterns.

## Existing Agent Rule Files
- No `.cursor/rules/` directory was found.
- No `.cursorrules` file was found.
- No `.github/copilot-instructions.md` file was found.
- If any of those files are added later, treat them as required reading before editing.

## Repository Shape
- `src/` contains the React application.
- `src/components/app/` contains current app-shell UI pieces.
- `src/components/ui/` contains reusable UI primitives.
- `src/pages/` contains high-level screens like login and main app.
- `src/lib/` contains shared client utilities and integrations.
- `src/lib/sidebar-data.ts` and `src/lib/telegram-types.ts` are generated support files.
- `src/store/` contains app-level state shapes and helpers.
- `src/methods/` contains one frontend method definition per Telegram method.
- `src/types/` contains shared frontend TypeScript types.
- `src-tauri/src/commands/` contains Tauri command handlers.
- `src-tauri/src/telegram/` contains one Rust file per Telegram method.
- `src-tauri/src/storage/` contains local persistence helpers.
- `telegram-api-spec.json` is the local Bot API source used to generate method metadata.
- `scripts/generate-telegram-assets.mjs` regenerates method, type, and sidebar assets.

## Architecture Rules
- One Telegram method = one React method file + one Rust method file.
- Keep Telegram method file names in API naming style on the frontend, for example `sendMessage.tsx`.
- Keep Telegram method file names in snake_case on the Rust side, for example `send_message.rs`.
- Keep the method registry centralized rather than spreading method metadata across UI files.
- Keep network calls inside the Tauri backend, not directly in the React UI.
- Keep token persistence local through Tauri commands, not browser-only storage.
- Prefer updating the spec/generator when many Telegram method files need to change together.
- Preserve the visual `reply_markup` editor rather than reverting to JSON-only UX unless the user asks.

## Commands Reference
- These commands are for reference; do not execute them unless the user asks.
- Install dependencies: `npm install`
- Regenerate Telegram assets: `npm run generate:telegram`
- Frontend dev server: `npm run dev`
- Frontend development build: `npm run build:dev`
- Tauri dev app: `npm run tauri:dev`
- Frontend production build: `npm run build`
- Tauri production build: `npm run tauri:build`
- Raw Tauri CLI passthrough: `npm run tauri -- <args>`
- Frontend lint: `npm run lint`
- Frontend tests: `npm run test`
- Rust check: `cargo check --manifest-path src-tauri/Cargo.toml`
- Rust tests: `cargo test --manifest-path src-tauri/Cargo.toml`
- Rust format: `cargo fmt --manifest-path src-tauri/Cargo.toml`
- Utility sync script: `scripts\sync.bat`

## Single-Test Commands
- Run one Vitest file: `npx vitest run src/test/example.test.ts`
- Run tests matching a name: `npx vitest run -t "test name"`
- Run Vitest in a specific folder: `npx vitest run src/test`
- Run one Playwright spec: `npx playwright test path/to/spec.ts`
- Run Playwright tests by grep: `npx playwright test --grep "scenario name"`
- Playwright is installed, but no committed spec folder exists yet; add spec paths as needed.
- Run one Rust test by name: `cargo test test_name --manifest-path src-tauri/Cargo.toml`
- Run Rust tests in one module: `cargo test module_name --manifest-path src-tauri/Cargo.toml`

## Formatting Commands
- Format touched frontend source files: `npx prettier --write <files...>`
- Typical frontend scope: `npx prettier --write "src/**/*.{ts,tsx}" "*.json" "src-tauri/tauri.conf.json"`
- Format Rust code: `cargo fmt --manifest-path src-tauri/Cargo.toml`
- Prefer formatting only touched files on the frontend when practical.

## TypeScript Style
- Use TypeScript everywhere in the frontend; do not add plain JavaScript files for new logic.
- Prefer explicit types at app boundaries, command payloads, and shared state.
- Prefer `unknown` over `any`.
- Narrow unknown values with type guards before use.
- Keep method payloads typed through shared interfaces.
- Use discriminated unions for view state when helpful.
- Re-export shared types from central type modules when that reduces duplication.

## React Style
- Use function components and hooks.
- Keep components focused; extract helpers when logic starts to crowd rendering.
- Keep presentational styling aligned with existing Tailwind usage.
- Do not replace the current app shell, sidebar, top bar, or page composition without a strong reason.
- Prefer controlled inputs for live Telegram method forms.
- Use `@/` path aliases for imports from `src/`.
- Keep page-level orchestration in `src/pages/` or app-context/store layers, not deep inside primitives.
- Preserve the desktop-oriented UX choices already in the app, such as disabled context menu and reduced browser-like behavior.

## Import Conventions
- Put third-party imports before local imports.
- Group imports in this order: React/framework, third-party packages, alias imports, relative imports.
- Prefer named imports unless a module is clearly default-export oriented.
- Keep import lists stable and avoid duplicate import paths.
- Use the `@/` alias instead of long relative parent chains when importing from `src/`.

## Naming Conventions
- React components: PascalCase.
- Hooks: camelCase beginning with `use`.
- Utility functions: camelCase.
- Tauri commands exposed to the frontend: snake_case Rust functions, invoked by the same command name.
- Rust modules and files: snake_case.
- Telegram method names shown to users: keep official Telegram casing.
- Shared constants: `UPPER_SNAKE_CASE` only when they are true constants.

## Error Handling
- Never silently swallow request or parsing failures.
- Return readable error strings from Tauri commands using `Result<T, String>`.
- Validate required form fields before making Telegram requests.
- Preserve Telegram error payloads when possible so the UI can display real API feedback.
- Show user-facing errors in the existing response area or existing notification pattern.
- Avoid panic-based error handling in Rust for expected failures.

## State Management
- Reuse the existing app context and store helpers before adding a new state library.
- Keep persisted settings and token state in Tauri-backed storage.
- Keep transient request state in the React layer unless the backend truly owns it.
- Reset response state intentionally when switching methods or logging out.

## Tauri and Rust Guidelines
- Keep HTTP access inside `src-tauri/src/telegram/`.
- Keep persistence logic inside `src-tauri/src/storage/` and command wrappers in `src-tauri/src/commands/`.
- Use `serde` derives for command payloads and responses.
- Use `#[serde(rename_all = "camelCase")]` when matching frontend TypeScript shapes.
- Prefer small, method-specific request structs instead of giant untyped payload maps.
- Keep shared backend helpers in modules, not duplicated across Telegram method files.

## UI and UX Guidelines
- Preserve the existing visual design.
- Avoid replacing bespoke UI with generic boilerplate.
- Keep dark visual language, spacing, and typography consistent with current screens.
- When wiring real data, keep placeholders, empty states, and response panels visually intact.
- Prefer additive changes that make the current UI functional rather than visually different.
- For complex Telegram structures like `reply_markup`, prefer guided visual editors over raw JSON inputs when practical.

## Testing Guidance
- Add or update tests when behavior changes in a meaningful, testable way.
- Keep tests focused on behavior, not implementation details.
- Prefer small unit tests for helpers and state logic.
- If tests are not run because the user did not request them, document that explicitly.

## Lint and Quality Notes
- ESLint is configured for TypeScript, React hooks, and react-refresh.
- `react-refresh/only-export-components` is a warning; avoid mixing many non-component exports into component files.
- `@typescript-eslint/no-unused-vars` is disabled, but do not rely on that as permission for dead code.
- Keep files clean and remove temporary debug code before finishing.

## Git Guidance
- Do not revert unrelated user changes.
- Keep commits scoped to one logical step when the user asks for stepwise commits.
- Do not amend commits unless the user explicitly requests it.
- Do not push unless the user has asked for push.

## When Adding New Code
- Check whether a matching pattern already exists before introducing a new abstraction.
- Prefer extending the method registry over hardcoding behavior inside UI components.
- Prefer shared frontend/backed type alignment over ad hoc JSON handling.
- Keep changes small, traceable, and easy to review.

## Final Response Expectations
- Summarize what changed and where.
- Mention formatting performed after the edit.
- Mention any commands intentionally not run because the user did not request them.
- Suggest the next logical step only when it is useful.
