import { useOffsetParam } from '@/features/offset-param';
import { useQueryParam } from '@/features/query-param';
import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetAdminList = () => {
  const [query] = useQueryParam();
  const [offset] = useOffsetParam();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['admins', query, offset],
    queryFn: () => api.admin.getAll(query, offset),
  });

  return { data, isError, isLoading };
};
