import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { scheme } from '@/shared/api';

const registerFormSchema = z
  .object({
    email: scheme.user.email,
    surname: scheme.user.surname,
    first_name: scheme.user.firstName,
    patronymic: scheme.user.patronymic,
    password: scheme.user.password,
    confirmPassword: scheme.user.confirmPassword,
  })
  .refine((data) => data.password == data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Пароли не совпадают',
  });

const useRegisterForm = () =>
  useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      first_name: '',
      surname: '',
      patronymic: '',
    },
  });

export { useRegisterForm, registerFormSchema };
