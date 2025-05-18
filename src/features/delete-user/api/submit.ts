import { api, User } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';

export const useDeleteUserSubmit = (user: User) => {
  const refresh = useRefresh();
  const { clear } = useModals();

  return async () => {
    try {
      await api.user.remove({ id: user.id });
      refresh();
    } catch {
      toast({
        title: 'Произошла ошибка при удалении',
        description:
          'Пользователь не найден. Перезагрузите страницу.',
        variant: 'destructive',
      });
    }
    clear();
  };
};
