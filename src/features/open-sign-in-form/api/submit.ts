import { UserForms } from '@/entity/user';
import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';

export const useSignInSubmit = () => {
  const navigate = useNavigate();

  return async (data: z.infer<typeof UserForms.signInFormSchema>) => {
    try {
      await api.auth.login(data);
      navigate('/profile');
    } catch (error) {
      console.log(error);
      toast({
        title: 'Неправильная почта или пароль',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
