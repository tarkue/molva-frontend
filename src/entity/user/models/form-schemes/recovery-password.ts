import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { scheme } from '@/shared/api';

const forgotPasswordFormSchemaFirstPart = z.object({
  email: scheme.user.email,
});

const resetPasswordFormSchema = z
  .object({
    password: scheme.user.password,
    confirmPassword: scheme.user.confirmPassword,
  })
  .refine(
    (data) => {
      return data.password == data.confirmPassword;
    },
    {
      path: ['confirmPassword'],
      message: 'Пароли не совпадают',
    },
  );

const useForgotPasswordFormFirstPart = () =>
  useForm<z.infer<typeof forgotPasswordFormSchemaFirstPart>>({
    resolver: zodResolver(forgotPasswordFormSchemaFirstPart),
    defaultValues: {
      email: '',
    },
  });

const useResetPasswordForm = () =>
  useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

export {
  useForgotPasswordFormFirstPart,
  useResetPasswordForm,
  forgotPasswordFormSchemaFirstPart,
  resetPasswordFormSchema,
};
