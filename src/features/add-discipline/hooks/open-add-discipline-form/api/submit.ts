import { DisciplineForms } from '@/entity/discipline';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import {
  ERROR_TOAST_BODY,
  SUCCESS_ADD_TOAST_BODY,
} from '@/shared/models/toast-body';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

export const useAddDisciplineSubmit = (form: UseFormReturn<any>) => {
  const { refresh } = useRefresh();
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
      toast(SUCCESS_ADD_TOAST_BODY.DISCIPLINE);
      form.reset();
      clear();
    } catch {
      toast(ERROR_TOAST_BODY);
    }
  };
};
