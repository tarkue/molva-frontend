import { DisciplineForms } from '@/entity/discipline';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useAddDisciplineSubmit = () => {
  return async (
    data: z.infer<typeof DisciplineForms.addDisciplineFormSchema>,
  ) => {
    const refresh = useRefresh();
    const { clear } = useModals();
    try {
      await api.discipline.create(data);
      refresh();
      clear();
    } catch (error) {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
