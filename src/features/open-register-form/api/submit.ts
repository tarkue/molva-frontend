import { UserForms } from '@/entity/user';
import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';

export const useRegisterSubmit = () => {
  const navigate = useNavigate();

  return async (
    data: z.infer<typeof UserForms.registerFormSchema>,
  ) => {
    try {
      await api.auth.register({
        email: data.email,
        password: data.password,
        first_name: data.firstName,
        surname: data.surname,
        patronymic: data.patronymic,
      });
      await api.auth.login({
        email: data.email,
        password: data.password,
      });
      navigate('/profile');
    } catch (error) {
      console.log(error);
      toast({
        title: 'Пользователь с такой почтой уже существует',
        description:
          'Попробуйте авторизоваться или восстановить пароль',
        variant: 'destructive',
      });
    }
  };
};
