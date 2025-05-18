import { api, Discipline } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';

export const useDeleteDisciplineSubmit = (discipline: Discipline) => {
  const refresh = useRefresh();
  const { clear } = useModals();

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
    clear();
  };
};
