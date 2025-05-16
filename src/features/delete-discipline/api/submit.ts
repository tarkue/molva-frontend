import { api, Discipline } from '@/shared/api';
import { toast } from '@/shared/ui/toast';

export const useDeleteDisciplineSubmit = (discipline: Discipline) => {
  return async () => {
    try {
      await api.discipline.remove({ id: discipline.id });
    } catch {
      toast({
        title: 'Произошла ошибка при удалении',
        description: 'Дисциплина не найдена. Перезагрузите страницу.',
        variant: 'destructive',
      });
    }
  };
};
