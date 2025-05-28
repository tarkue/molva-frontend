import { api, User } from '@/shared/api';
import { useRefresh } from '@/shared/lib/refresh';
import {
  FAILED_REMOVE_TOAST_BODY,
  SUCCESS_REMOVE_TOAST_BODY,
} from '@/shared/models/toast-body';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';

export const useDeleteAdminSubmit = (admin: User) => {
  const refresh = useRefresh();
  const { clear } = useModals();

  return async () => {
    try {
      await api.admin.remove({ id: admin.id });
      refresh();
      toast(SUCCESS_REMOVE_TOAST_BODY.ADMIN);
    } catch {
      toast(FAILED_REMOVE_TOAST_BODY);
    }
    clear();
  };
};
