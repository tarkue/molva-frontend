import { useOffsetParam } from '@/features/offset-param';
import { useQueryParam } from '@/features/query-param';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { useQuery } from '@tanstack/react-query';

export const useGetAdminList = () => {
  const [query] = useQueryParam();
  const { refreshState } = useRefresh();
  const [offset] = useOffsetParam();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['admins', query, offset, refreshState],
    queryFn: () => api.admin.getAll(query, offset),
  });

  return { data, isError, isLoading };
};
