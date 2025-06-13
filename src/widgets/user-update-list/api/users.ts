import { useOffsetParam } from '@/features/offset-param';
import { useQueryParam } from '@/features/query-param';
import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetUserList = () => {
  const [offset] = useOffsetParam();
  const [query] = useQueryParam();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['users', offset, query],
    queryFn: () => api.user.getAll(query, offset),
  });

  return { data, isLoading, isError, refetch };
};
