import { api, User } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { toast } from '@/shared/ui/toast';

export const useDeleteUserSubmit = (user: User) => {
  const refresh = useRefresh();

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
  };
};
