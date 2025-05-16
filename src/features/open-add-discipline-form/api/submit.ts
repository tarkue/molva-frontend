import { DisciplineForms } from '@/entity/discipline';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useAddDisciplineSubmit = () => {
  const refresh = useRefresh();
  const { clear } = useModals();

  return async (
    data: z.infer<typeof DisciplineForms.addDisciplineFormSchema>,
  ) => {
    try {
      const module = await api.admin.module.add({
        name: data.module,
      });
      await api.discipline.create({ ...data, module_id: module.id });
      refresh();
      clear();
    } catch {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
