import { useUser } from '@/entity/user';
import { api } from '@/shared/api';
import { useNavigate } from 'react-router';

export const useLogoutSubmit = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  return async () => {
    await api.auth.logout();
    navigate('/');
    setUser(undefined);
  };
};
