import { UserForms } from '@/entity/user';
import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';
import { useModals } from '@/shared/ui/modal';

export const useForgotPasswordSubmitFirstPart = () => {
  const { clear } = useModals();

  return async (
    data: z.infer<typeof UserForms.forgotPasswordFormSchemaFirstPart>,
  ) => {
    try {
      await api.auth.forgotPassword({
        email: data.email,
      });
      clear();
      toast({
        title: 'Письмо отправлено',
        description: 'Не забудьте проверить спам',
      });
    } catch {
      toast({
        title: 'Почта не найдена',
        description: 'Попробуйте другую почту',
        variant: 'destructive',
      });
    }
  };
};
