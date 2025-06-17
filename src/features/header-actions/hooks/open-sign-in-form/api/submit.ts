import { UserForms, useUser } from '@/entity/user';
import { api } from '@/shared/api';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';

export const useSignInSubmit = (form: UseFormReturn<any>) => {
  const navigate = useNavigate();
  const { signIn } = useUser();
  const { clear } = useModals();

  return async (data: z.infer<typeof UserForms.signInFormSchema>) => {
    try {
      const user = await api.auth.login(data);
      signIn(user);
      form.reset();
      clear();
      navigate('profile');
    } catch {
      toast({
        title: 'Неправильная почта или пароль',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
