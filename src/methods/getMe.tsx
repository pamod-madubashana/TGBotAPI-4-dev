import { TelegramMethod } from "@/types/telegram";

export const getMeMethod: TelegramMethod = {
  name: "getMe",
  category: "Available methods",
  description:
    "A simple method for testing your bot authentication token. Returns basic information about the connected bot as a User object.",
  parameters: [],
  examplePayload: {},
};
