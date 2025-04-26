import { UserForms } from '@/entity/user';
// import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useRecoveryPasswordSubmit = () => {
  return async (
    data: z.infer<
      typeof UserForms.recoveryPasswordFormSchemaThirdPart
    >,
  ) => {
    try {
      console.log(data);
      /* await api.auth.recoveryPassword({
       *  email: data.email,
       * });
       */
    } catch (error) {
      toast({
        title: 'Почта не найдена',
        description: 'Попробуйте другую почту',
        variant: 'destructive',
      });
    }
  };
};
