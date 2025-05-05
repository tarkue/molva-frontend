import { UserForms } from '@/entity/user';
// import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';
import { useOpenRecoveryPasswordThirdPart } from '../hooks/open-third-part';

export const useRecoveryPasswordSubmitSecondPart = () => {
  const open = useOpenRecoveryPasswordThirdPart();
  return async (
    data: z.infer<
      typeof UserForms.recoveryPasswordFormSchemaSecondPart
    >,
  ) => {
    try {
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
