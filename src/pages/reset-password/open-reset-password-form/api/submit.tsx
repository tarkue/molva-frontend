import { api } from '@/shared/api';
import { UserForms } from '@/entity/user';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';
import { useSearchParam } from '@/shared/models/search-params';
import { useModals } from '@/shared/ui/modal';

export const useResetPasswordSubmit = () => {
  const [token, setToken] = useSearchParam<string>('token');
  const { clear } = useModals();

  return async (
    data: z.infer<typeof UserForms.resetPasswordFormSchema>,
  ) => {
    if (!token) {
      toast({
        title: 'Восстановление пароля невозможно',
        description: 'Перейдите по ссылке из письма',
        variant: 'destructive',
      });
      return;
    }

    try {
      await api.auth.resetPassword({
        token: token,
        new_password: data.password,
      });
      toast({
        title: 'Пароль успешно изменен',
      });
    } catch {
      toast({
        title: 'Ссылка недействительна',
        description: 'Попробуйте восстановить пароль ещё раз',
        variant: 'destructive',
      });
    }
    clear();
    setToken(undefined);
  };
};
