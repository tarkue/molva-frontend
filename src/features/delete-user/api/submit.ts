import { api, User } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import {
  FAILED_REMOVE_TOAST_BODY,
  SUCCESS_REMOVE_TOAST_BODY,
} from '@/shared/models/toast-body';
import { useModals } from '@/shared/ui/modal';
import { toast } from '@/shared/ui/toast';

export const useDeleteUserSubmit = (user: User) => {
  const { refresh } = useRefresh();
  const { clear } = useModals();

  return async () => {
    try {
      await api.user.remove(user);
      toast(SUCCESS_REMOVE_TOAST_BODY.USER);
      refresh();
    } catch {
      toast(FAILED_REMOVE_TOAST_BODY);
    }
    clear();
  };
};
