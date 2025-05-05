import { api } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetTeacherList = () => {
  const q = useSearchParam('q');
  const offset = useSearchParam('offset');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['teachers', q, offset],
    queryFn: () => api.teacher.getAll(),
  });

  return { data, isError, isLoading };
};
