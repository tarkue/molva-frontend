import { UserForms } from '@/entity/user';
import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useSignInSubmit = () => {
  return async (data: z.infer<typeof UserForms.signInFormSchema>) => {
    try {
      await api.auth.login(data);
    } catch (error) {
      toast({
        title: 'Неправильная почта или пароль',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
