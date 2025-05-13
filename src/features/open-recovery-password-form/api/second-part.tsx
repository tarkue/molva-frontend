// import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { useOpenRecoveryPasswordThirdPart } from '../hooks/open-third-part';

export const useRecoveryPasswordSubmitSecondPart = () => {
  const open = useOpenRecoveryPasswordThirdPart();
  return async (email: string) =>
    /*data: z.infer<
     *typeof UserForms.recoveryPasswordFormSchemaSecondPart
     *>,
     */
    {
      try {
        console.log(email);
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
