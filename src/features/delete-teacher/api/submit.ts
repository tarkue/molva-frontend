import { api, Teacher } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import {
  FAILED_REMOVE_TOAST_BODY,
  SUCCESS_REMOVE_TOAST_BODY,
} from '@/shared/models/toast-body';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';

export const useDeleteTeacherSubmit = (teacher: Teacher) => {
  const { refresh } = useRefresh();
  const { clear } = useModals();

  return async () => {
    try {
      await api.teacher.remove({ id: teacher.id });
      refresh();
      toast(SUCCESS_REMOVE_TOAST_BODY.TEACHER);
    } catch {
      toast(FAILED_REMOVE_TOAST_BODY);
    }
    clear();
  };
};
