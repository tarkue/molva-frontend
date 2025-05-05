import { TeacherForms } from '@/entity/teacher';
import { api, Teacher } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useUpdateTeacherSubmit = (teacher: Teacher) => {
  return async (
    data: z.infer<typeof TeacherForms.updateTeacherFormSchema>,
  ) => {
    try {
      await api.teacher.update({
        id: teacher.id,
        ...data,
      });
    } catch (error) {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
