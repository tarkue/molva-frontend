import { api } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetAdminList = () => {
  const [q] = useSearchParam<string>('q');
  const [offset] = useSearchParam<number>('offset');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['admins', q, offset],
    queryFn: () => api.admin.getAll(q ? q : '', offset ? offset : 1),
  });

  return { data, isError, isLoading };
};
