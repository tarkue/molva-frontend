import { api } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetAdminList = () => {
  const q = useSearchParam('q');
  const offset = useSearchParam('offset');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['admins', q, offset],
    queryFn: () => api.admin.getAll(),
  });

  return { data, isError, isLoading };
};
