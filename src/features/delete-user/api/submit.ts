import { api, User } from '@/shared/api';
import { toast } from '@/shared/ui/toast';

export const useDeleteUserSubmit = (user: User) => {
  return async () => {
    try {
      await api.user.remove({ id: user.id });
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
