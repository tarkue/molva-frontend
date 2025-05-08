import { UserForms, useUser } from '@/entity/user';
import { api } from '@/shared/api';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';

export const useSignInSubmit = () => {
  const navigate = useNavigate();
  const { signIn } = useUser();
  const { clear } = useModals();

  return async (data: z.infer<typeof UserForms.signInFormSchema>) => {
    try {
      const user = await api.auth.login(data);
      signIn(user);
      clear();
      navigate('profile');
    } catch (error) {
      toast({
        title: 'Неправильная почта или пароль',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
