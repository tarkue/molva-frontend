import { z } from 'zod';
import { Format } from '../types/format';

export const name = z.string().min(1, 'Название обязательно');
export const description = z.string().min(1, 'Описание обязательно');
export const format = z.nativeEnum(Format, {
  message: 'Формат обязателен',
});

export const presentationLink = z
  .string()
  .min(1, 'Ссылка на презентацию обязательна');

export const modeusLink = z
  .string()
  .min(1, 'Ссылка на Modeus обязательна');

export const module = z.string().min(1, 'Модуль обязателен');
