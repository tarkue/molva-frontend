import { Review, api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { ERROR_TOAST_BODY } from '@/shared/models/toast-body';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';

export const useDeleteReviewSubmit = (review: Review) => {
  const { refresh } = useRefresh();
  const { clear } = useModals();
  return async () => {
    try {
      await api.review.remove(review);
      refresh();
    } catch {
      toast(ERROR_TOAST_BODY);
    }
    clear();
  };
};
