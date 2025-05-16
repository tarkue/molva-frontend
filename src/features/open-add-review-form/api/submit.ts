import { ReviewForms } from '@/entity/review';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useAddReviewSubmit = () => {
  return async (
    data: z.infer<typeof ReviewForms.addReviewFormSchema>,
  ) => {
    const refresh = useRefresh();
    const { clear } = useModals();
    try {
      await api.review.add(data);
      refresh();
      clear();
    } catch (error) {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
