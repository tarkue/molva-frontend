import { useOffsetParam } from '@/features/offset-param';
import { useQueryParam } from '@/features/query-param';
import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetTeacherList = () => {
  const [query] = useQueryParam();
  const [offset] = useOffsetParam();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['teachers', query, offset],
    queryFn: () =>
      api.teacher.getAll(query, offset),
  });

  return { data, isError, isLoading };
};
