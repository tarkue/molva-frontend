import { api } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetUserList = () => {
  const [offset] = useSearchParam<number>('offset');
  const [q] = useSearchParam<string>('q');

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['users', offset, q],
    queryFn: () => api.user.getAll(q ? q : '', offset ? offset : 1),
  });

  return { data, isLoading, isError, refetch };
};
