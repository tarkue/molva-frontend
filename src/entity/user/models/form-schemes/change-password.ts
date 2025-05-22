import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { scheme } from '@/shared/api';

const changePasswordFormSchema = z
  .object({
    oldPassword: scheme.user.oldPassword,
    password: scheme.user.password,
    confirmPassword: scheme.user.confirmPassword,
  })
  .refine((data) => data.password == data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Пароли не совпадают',
  });

const useChangePasswordForm = () =>
  useForm<z.infer<typeof changePasswordFormSchema>>({
    resolver: zodResolver(changePasswordFormSchema),
    defaultValues: {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    },
  });

export { useChangePasswordForm, changePasswordFormSchema };
