import { api, Teacher } from '@/shared/api';
import { toast } from '@/shared/ui/toast';

export const useDeleteTeacherSubmit = (teacher: Teacher) => {
  return async () => {
    try {
      api.teacher.remove(teacher);
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
