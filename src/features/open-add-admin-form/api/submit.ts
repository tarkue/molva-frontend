import { AdminForms } from '@/entity/admin';
import { api } from '@/shared/api';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useSubmit = () => {
  return async (
    data: z.infer<typeof AdminForms.addAdminFormSchema>,
  ) => {
    try {
      await api.admin.add({
        target_user_id: data.userId,
      });
    } catch {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
