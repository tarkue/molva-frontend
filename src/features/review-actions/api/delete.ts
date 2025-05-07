import { Review, api } from '@/shared/api';

export const useDeleteReviewSubmit = (review: Review) => {
  return async () => {
    await api.review.remove(review);
  };
};
