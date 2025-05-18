import { Review, api } from '@/shared/api';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';

export const useComplainSubmit = (review: Review) => {
  const { clear } = useModals();

  return async () => {
    await api.review.complaints.add(review);
    clear();
    toast({
      title: 'Жалоба отправлена',
      description: 'Мы рассмотрим ее в ближайшее время',
    });
  };
};
