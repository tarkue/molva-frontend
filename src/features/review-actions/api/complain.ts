import { Review, api } from '@/shared/api';

export const useComplainSubmit = (review: Review) => {
  return async () => {
    await api.review.complaints.add(review);
  };
};
