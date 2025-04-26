import { UserForms } from '@/entity/user';
// import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';
import { useOpenRecoveryPasswordThirdPart } from '../hooks/open-third-part';

export const useRecoveryPasswordSubmitSecondPart = () => {
  return async (
    data: z.infer<
      typeof UserForms.recoveryPasswordFormSchemaSecondPart
    >,
  ) => {
    const open = useOpenRecoveryPasswordThirdPart();
    try {
      console.log(data.code);
      open();
    } catch (error) {
      toast({
        title: 'Почта не найдена',
        description: 'Попробуйте другую почту',
        variant: 'destructive',
      });
    }
  };
};
