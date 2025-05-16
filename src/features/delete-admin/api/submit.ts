import { api, User } from '@/shared/api';
import { toast } from '@/shared/ui/toast';

export const useDeleteAdminSubmit = (admin: User) => {
  return async () => {
    try {
      await api.admin.remove({ id: admin.id });
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
