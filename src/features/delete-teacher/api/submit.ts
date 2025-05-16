import { api, Teacher } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { toast } from '@/shared/ui/toast';

export const useDeleteTeacherSubmit = (teacher: Teacher) => {
  const refresh = useRefresh();

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
  };
};
