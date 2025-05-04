import { ReviewForms } from '@/entity/review';
import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useAddReviewSubmit = () => {
  return async (
    data: z.infer<typeof ReviewForms.addReviewFormSchema>,
  ) => {
    try {
      await api.review.create(data);
    } catch (error) {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
