import { TeacherForms } from '@/entity/teacher';
import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useAddTeacherSubmit = () => {
  return async (
    data: z.infer<typeof TeacherForms.addTeacherFormSchema>,
  ) => {
    try {
      await api.teacher.create(data);
    } catch (error) {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
