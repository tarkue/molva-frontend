import { api, Discipline } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { toast } from '@/shared/ui/toast';

export const useDeleteDisciplineSubmit = (discipline: Discipline) => {
  const refresh = useRefresh();

  return async () => {
    try {
      await api.discipline.remove({ id: discipline.id });
      refresh();
    } catch {
      toast({
        title: 'Произошла ошибка при удалении',
        description: 'Дисциплина не найдена. Перезагрузите страницу.',
        variant: 'destructive',
      });
    }
  };
};
