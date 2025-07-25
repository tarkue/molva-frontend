import { AdminForms } from '@/entity/admin';
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

export const useSubmit = (form: UseFormReturn<any>) => {
  const { clear } = useModals();
  const { refresh } = useRefresh();
  return async (
    data: z.infer<typeof AdminForms.addAdminFormSchema>,
  ) => {
    try {
      await api.admin.add({
        id: data.id,
      });
      clear();
      refresh();
      form.reset();
      toast(SUCCESS_ADD_TOAST_BODY.ADMIN);
    } catch {
      toast(ERROR_TOAST_BODY);
    }
  };
};
