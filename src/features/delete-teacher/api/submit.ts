import { api, Teacher } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';

export const useDeleteTeacherSubmit = (teacher: Teacher) => {
  const refresh = useRefresh();
  const { clear } = useModals();

  return async () => {
    try {
      await api.teacher.remove({ id: teacher.id });
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
