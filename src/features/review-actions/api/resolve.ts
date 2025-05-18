import { ResolveAction, Review, api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';

export const useComplaintResolveSubmit = (
  review: Review,
  action: ResolveAction,
) => {
  return async () => {
    try {
      await api.review.complaints.resolve({
        id: review.id,
        action: action,
      });
    } catch {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз или перезагрузите страницу',
        variant: 'destructive',
      });
    }
  };
};
