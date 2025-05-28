import { TeacherForms } from '@/entity/teacher';
import { api, Teacher } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import {
  ERROR_TOAST_BODY,
  SUCCESS_UPDATE_DATA_TOAST_BODY,
} from '@/shared/models/toast-body';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useUpdateTeacherSubmit = (teacher: Teacher) => {
  const refresh = useRefresh();
  const { clear } = useModals();
  return async (
    data: z.infer<typeof TeacherForms.updateTeacherFormSchema>,
  ) => {
    try {
      await api.teacher.update({
        id: teacher.id,
        ...data,
      });

      const new_disciplines = data.disciplines.filter(
        (e) => !teacher.disciplines.some((el) => el.id == e),
      );

      const removed_disciplines = teacher.disciplines.filter(
        (e) => !data.disciplines.some((el) => el == e.id),
      );

      removed_disciplines.map(
        async (e) =>
          await api.teacher.discipline.remove({
            id: teacher.id,
            discipline_id: e.id,
          }),
      );
      await api.teacher.discipline.appoint({
        id: teacher.id,
        discipline_ids: new_disciplines,
      });

      refresh();
      toast(SUCCESS_UPDATE_DATA_TOAST_BODY);
      clear();
    } catch {
      toast(ERROR_TOAST_BODY);
    }
  };
};
