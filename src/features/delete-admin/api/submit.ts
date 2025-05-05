import { api, User } from '@/shared/api';
import { toast } from '@/shared/ui/toast';

export const useDeleteAdminSubmit = (admin: User) => {
  return async () => {
    try {
      await api.admin.remove(admin);
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
