import { useOffsetParam } from '@/features/offset-param';
import { useQueryParam } from '@/features/query-param';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { useQuery } from '@tanstack/react-query';

export const useGetUserList = () => {
  const [offset] = useOffsetParam();
  const [query] = useQueryParam();
  const { refreshState } = useRefresh();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', offset, query, refreshState],
    queryFn: () => api.user.getAll(query, offset),
  });

  return { data, isLoading, isError };
};
