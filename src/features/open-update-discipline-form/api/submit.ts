import { DisciplineForms } from '@/entity/discipline';
import { api, Discipline } from '@/shared/api';
import {
  ERROR_TOAST_BODY,
  SUCCESS_UPDATE_DATA_TOAST_BODY,
} from '@/shared/models/toast-body';
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
      toast(SUCCESS_UPDATE_DATA_TOAST_BODY);
    } catch {
      toast(ERROR_TOAST_BODY);
    }
  };
};
