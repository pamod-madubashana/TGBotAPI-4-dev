import { answerCallbackQueryMethod } from "./answerCallbackQuery";
import { editMessageTextMethod } from "./editMessageText";
import { getMeMethod } from "./getMe";
import { getUpdatesMethod } from "./getUpdates";
import { sendMessageMethod } from "./sendMessage";
import { sendPhotoMethod } from "./sendPhoto";

export const methodRegistry = {
  [getMeMethod.name]: getMeMethod,
  [getUpdatesMethod.name]: getUpdatesMethod,
  [sendMessageMethod.name]: sendMessageMethod,
  [sendPhotoMethod.name]: sendPhotoMethod,
  [editMessageTextMethod.name]: editMessageTextMethod,
  [answerCallbackQueryMethod.name]: answerCallbackQueryMethod,
};

export const implementedMethods = Object.values(methodRegistry);
