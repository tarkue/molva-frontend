import { api } from '@/shared/api';

export const useLogoutSubmit = () => {
  return async () => {
    await api.auth.logout();
  };
};
