import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { scheme } from '@/shared/api';

const changePasswordFormSchema = z.object({
  oldPassword: scheme.user.oldPasspword,
  password: scheme.user.password,
  confirmPassword: scheme.user.confirmPassword,
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
