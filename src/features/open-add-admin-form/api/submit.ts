import { AdminForms } from '@/entity/admin';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';
import { z } from 'zod';

export const useSubmit = () => {
  const { clear } = useModals();
  const refresh = useRefresh();
  return async (
    data: z.infer<typeof AdminForms.addAdminFormSchema>,
  ) => {
    try {
      await api.admin.add({
        id: data.id,
      });
      clear();
      refresh();
    } catch {
      toast({
        title: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        variant: 'destructive',
      });
    }
  };
};
