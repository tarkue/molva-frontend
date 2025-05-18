import { DisciplineForms } from '@/entity/discipline';
import { api, Discipline } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useUpdateDisciplineSubmit = (discipline: Discipline) => {
  return async (
    data: z.infer<typeof DisciplineForms.updateDisciplineFormSchema>,
  ) => {
    try {
      await api.discipline.update({
        id: discipline.id,
        ...data,
      });
    } catch {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
