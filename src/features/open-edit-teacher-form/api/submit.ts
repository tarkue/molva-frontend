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
