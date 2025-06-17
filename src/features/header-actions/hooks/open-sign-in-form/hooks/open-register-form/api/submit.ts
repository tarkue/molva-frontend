import { UserForms, useUser } from '@/entity/user';
import { api } from '@/shared/api';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';

export const useRegisterSubmit = (form: UseFormReturn<any>) => {
  const { signIn } = useUser();
  const { clear } = useModals();
  const navigate = useNavigate();

  return async (
    data: z.infer<typeof UserForms.registerFormSchema>,
  ) => {
    if (data.password != data.confirmPassword) {
      toast({
        title: 'Пароли не совпадают',
        description: 'Попробуйте ещё раз',
        variant: 'destructive',
      });
      return;
    }
    try {
      const user = await api.auth.register(data);
      await api.auth.login({
        email: data.email,
        password: data.password,
      });
      signIn(user);
      form.reset();
      clear();
      navigate('profile');
    } catch {
      toast({
        title: 'Пользователь с такой почтой уже существует',
        description:
          'Попробуйте авторизоваться или восстановить пароль',
        variant: 'destructive',
      });
    }
  };
};
