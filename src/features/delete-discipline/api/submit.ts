import { api, Discipline } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import {
  FAILED_REMOVE_TOAST_BODY,
  SUCCESS_REMOVE_TOAST_BODY,
} from '@/shared/models/toast-body';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';

export const useDeleteDisciplineSubmit = (discipline: Discipline) => {
  const { refresh } = useRefresh();
  const { clear } = useModals();

  return async () => {
    try {
      await api.discipline.remove(discipline);
      await api.admin.module.remove(discipline.module);
      refresh();
      toast(SUCCESS_REMOVE_TOAST_BODY.DISCIPLINE);
    } catch {
      toast(FAILED_REMOVE_TOAST_BODY);
    }
    clear();
  };
};
