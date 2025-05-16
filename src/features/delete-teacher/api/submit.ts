import { api, Teacher } from '@/shared/api';
import { toast } from '@/shared/ui/toast';

export const useDeleteTeacherSubmit = (teacher: Teacher) => {
  return async () => {
    try {
      await api.teacher.remove({ id: teacher.id });
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
