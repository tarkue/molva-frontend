import { z } from 'zod';

const basePassword = (name: string = '') =>
  z
    .string({ message: `${name} обязателен` })
    .min(8, { message: 'Пароль должен быть не менее 8 символов' })
    .max(20, { message: 'Пароль должен быть не более 20 символов' })
    .refine(
      (value) =>
        /[A-Z]+/.test(value) &&
        /[a-z]+/.test(value) &&
        /[0-9]+/.test(value),
      {
        message:
          'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру',
      },
    );

export const email = z
  .string({ message: 'Почта обязательна' })
  .email('Неверная почта');

export const password = basePassword('Пароль');
export const oldPassword = basePassword('Старый пароль');
export const confirmPassword = basePassword('Подтверждение пароля');

export const firstName = z.string({ message: 'Имя обязательно' });
export const surname = z.string({ message: 'Фамилия обязательна' });
export const patronymic = z.optional(z.string());

export const code = z.string({ message: 'Код обязателен' });
