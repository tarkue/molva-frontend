import { z } from 'zod';

const basePassword = (name: string = '') =>
  z
    .string({ message: `${name} обязателен` })
    .min(8, 'Пароль должен быть не менее 8 символов')
    .max(20, 'Пароль должен быть не более 20 символов')
    .refine(
      (value) =>
        /\[A-Za-z0-9]/.test(value) &&
        /[A-Z]/.test(value) &&
        /[a-z]/.test(value) &&
        /[0-9]/.test(value),
      {
        message:
          'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру',
      },
    );

export const email = z
  .string({ message: 'Почта обязательна' })
  .email('Неверная почта');

export const password = basePassword('Пароль');
export const oldPasspword = basePassword('Старый пароль');
export const newPasswpord = basePassword('Новый пароль');
export const confirmPassword = basePassword('Подтверждение пароля');

export const name = z.string({ message: 'Имя обязательно' });
export const surname = z.string({ message: 'Фамилия обязательна' });
export const patronymic = z.optional(z.string());
