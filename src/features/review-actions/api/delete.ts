import { Review, api } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { useModals } from '@/shared/ui/modal';

export const useDeleteReviewSubmit = (review: Review) => {
  const refresh = useRefresh();
  const { clear } = useModals();
  return async () => {
    await api.review.remove(review);
    refresh();
    clear();
  };
};
