import type { TelegramMethod } from "@/types/telegram";

const modules = import.meta.glob<{ default: TelegramMethod }>("./*.tsx", {
  eager: true,
});

export const methodRegistry = Object.fromEntries(
  Object.values(modules)
    .map((module) => module.default)
    .sort((left, right) => left.name.localeCompare(right.name))
    .map((method) => [method.name, method]),
) as Record<string, TelegramMethod>;

export const implementedMethods = Object.values(methodRegistry);
