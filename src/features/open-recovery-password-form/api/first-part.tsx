import { UserForms } from '@/entity/user';
// import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';
import { useOpenRecoveryPasswordSecondPart } from '../hooks/open-second-part';

export const useRecoveryPasswordSubmitFirstPart = () => {
  return async (
    data: z.infer<
      typeof UserForms.recoveryPasswordFormSchemaFirstPart
    >,
  ) => {
    const open = useOpenRecoveryPasswordSecondPart();
    try {
      console.log(data.email);
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
