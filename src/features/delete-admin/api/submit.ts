import { api, User } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { toast } from '@/shared/ui/toast';

export const useDeleteAdminSubmit = (admin: User) => {
  const refresh = useRefresh();

  return async () => {
    try {
      await api.admin.remove({ id: admin.id });
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
