import { TeacherForms } from '@/entity/teacher';
import { api, Teacher } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
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

      teacher.disciplines.map(
        async (e) =>
          await api.teacher.discipline.remove({
            id: teacher.id,
            discipline_id: e.id,
          }),
      );
      await api.teacher.discipline.appoint({
        id: teacher.id,
        discipline_ids: data.disciplines,
      });

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
