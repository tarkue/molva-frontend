import { DisciplineForms } from '@/entity/discipline';
import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useAddDisciplineSubmit = () => {
  return async (
    data: z.infer<typeof DisciplineForms.addDisciplineFormSchema>,
  ) => {
    try {
      await api.discipline.create(data);
    } catch (error) {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
