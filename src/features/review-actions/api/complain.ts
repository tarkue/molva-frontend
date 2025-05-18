import { Review, api } from '@/shared/api';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';

export const useComplainSubmit = (review: Review) => {
  const { clear } = useModals();

  return async () => {
    try {
      await api.review.complaints.add(review);
      toast({
        title: 'Жалоба отправлена',
        description: 'Мы рассмотрим ее в ближайшее время',
      });
    } catch {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз или перезагрузите страницу',
        variant: 'destructive',
      });
    }
    clear();
  };
};
