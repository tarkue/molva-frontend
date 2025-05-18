import { Review, api } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';

export const useDeleteReviewSubmit = (review: Review) => {
  const refresh = useRefresh();
  const { clear } = useModals();
  return async () => {
    try {
      await api.review.remove(review);
      refresh();
    } catch {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
    clear();
  };
};
