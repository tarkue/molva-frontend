import { UserForms, useUser } from '@/entity/user';
import { api } from '@/shared/api';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useChangePasswordSubmit = () => {
  const { user } = useUser();
  const { clear } = useModals();
  return async (
    data: z.infer<typeof UserForms.changePasswordFormSchema>,
  ) => {
    try {
      await api.auth.changePassword({
        id: user?.id as string,
        old_password: data.oldPassword,
        new_password: data.password,
      });
      clear();
    } catch (error) {
      toast({
        title: 'Неправильный старый пароль',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
