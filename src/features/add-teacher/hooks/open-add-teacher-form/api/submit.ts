import { TeacherForms } from '@/entity/teacher';
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

export const useAddTeacherSubmit = (form: UseFormReturn<any>) => {
  const { refresh } = useRefresh();
  const { clear } = useModals();

  return async (
    data: z.infer<typeof TeacherForms.addTeacherFormSchema>,
  ) => {
    try {
      const teacher = await api.teacher.create(data);

      if (data.disciplines && data.disciplines.length > 0) {
        await api.teacher.discipline.appoint({
          id: teacher.id,
          discipline_ids: data.disciplines,
        });
      }

      refresh();
      toast(SUCCESS_ADD_TOAST_BODY.TEACHER);
      form.reset();
      clear();
    } catch {
      toast(ERROR_TOAST_BODY);
    }
  };
};
