import { ResolveAction, Review, api } from '@/shared/api';

export const useComplaintResolveSubmit = (
  review: Review,
  action: ResolveAction,
) => {
  return async () => {
    await api.review.complaints.resolve({
      id: review.id,
      action: action,
    });
  };
};
