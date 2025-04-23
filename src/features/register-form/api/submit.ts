import { UserForms } from '@/entity/user';
import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';

export const useRegisterSubmit = () => {
  return async (
    data: z.infer<typeof UserForms.registerFormSchema>,
  ) => {
    const navigate = useNavigate();
    try {
      await api.auth.register(data);
      await api.auth.login({
        email: data.email,
        password: data.password,
      });
      navigate('/profile');
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
