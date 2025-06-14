import { useOffsetParam } from '@/features/offset-param';
import { useQueryParam } from '@/features/query-param';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { useQuery } from '@tanstack/react-query';

export const useGetTeacherList = () => {
  const [query] = useQueryParam();
  const [offset] = useOffsetParam();
  const { refreshState } = useRefresh();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['teachers', query, offset, refreshState],
    queryFn: () => api.teacher.getAll(query, offset),
  });

  return { data, isError, isLoading };
};
