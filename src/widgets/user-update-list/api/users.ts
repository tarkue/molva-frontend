import { api } from '@/shared/api';
import { useParam } from '@/shared/models/param';
import { useQuery } from '@tanstack/react-query';

export const useGetUserList = () => {
  const offset = useParam('offset');
  const q = useParam('q');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', offset, q],
    queryFn: () => api.user.getAll(),
  });

  return { data, isLoading, isError };
};
