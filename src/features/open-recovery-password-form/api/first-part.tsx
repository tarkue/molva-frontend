import { UserForms } from '@/entity/user';
// import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';
import { useOpenRecoveryPasswordSecondPart } from '../hooks/open-second-part';

export const useRecoveryPasswordSubmitFirstPart = () => {
  const open = useOpenRecoveryPasswordSecondPart();
  return async (
    data: z.infer<
      typeof UserForms.recoveryPasswordFormSchemaFirstPart
    >,
  ) => {
    try {
      open(data.email);
    } catch (error) {
      toast({
        title: 'Почта не найдена',
        description: 'Попробуйте другую почту',
        variant: 'destructive',
      });
    }
  };
};
