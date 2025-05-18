import { TeacherForms } from '@/entity/teacher';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useAddTeacherSubmit = () => {
  const refresh = useRefresh();
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
