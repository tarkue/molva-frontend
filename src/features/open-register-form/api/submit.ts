import { UserForms, useUser } from '@/entity/user';
import { api } from '@/shared/api';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';

export const useRegisterSubmit = () => {
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
      signIn(user);
      clear();
      navigate('profile');
    } catch (error) {
      toast({
        title: 'Пользователь с такой почтой уже существует',
        description:
          'Попробуйте авторизоваться или восстановить пароль',
        variant: 'destructive',
      });
    }
  };
};
