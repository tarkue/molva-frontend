import { UserForms } from '@/entity/user';
import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useChangePasswordSubmit = () => {
  return async (
    data: z.infer<typeof UserForms.changePasswordFormSchema>,
  ) => {
    try {
      await api.auth.changePassword(data);
    } catch (error) {
      toast({
        title: 'Неправильный старый пароль',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
