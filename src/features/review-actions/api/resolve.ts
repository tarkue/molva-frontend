import { ResolveAction, Review, api } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { toast } from '@/shared/ui/toast';

export const useComplaintResolveSubmit = (
  review: Review,
  action: ResolveAction,
) => {
  const refresh = useRefresh();

  return async () => {
    try {
      await api.review.complaints.resolve({
        id: review.id,
        action: action,
      });
      refresh();
      toast({
        title:
          action === ResolveAction.Dismiss
            ? 'Отзыв опубликован'
            : 'Отзыв удален',
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

export const useResolveSubmit = (review: Review, action: ResolveAction) => {
  const refresh = useRefresh();

  return async () => {
    try {
      await api.review.edit({
        id: review.id,
        status: action === ResolveAction.Dismiss ? 'published' : 'rejected',
      });
      refresh();
      toast({
        title:
          action === ResolveAction.Dismiss
            ? 'Отзыв опубликован'
            : 'Отзыв удален',
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