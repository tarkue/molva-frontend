import { UserForms, useUser } from '@/entity/user';
import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useChangePasswordSubmit = () => {
  return async (
    data: z.infer<typeof UserForms.changePasswordFormSchema>,
  ) => {
    const { user } = useUser();
    try {
      await api.auth.changePassword({
        user_id: user?.user_id as string,
        old_password: data.oldPassword,
        password: data.password,
      });
    } catch (error) {
      toast({
        title: 'Неправильный старый пароль',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
