import { api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

const useGetDiscipline = () => {
  const params = useParams();
  const { refreshState } = useRefresh();

  const id = params.id;

  if (!id) {
    return { data: null, isLoading: false, isError: false };
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['discipline', id, refreshState],
    queryFn: () => api.discipline.get(id),
  });

  return { data, isLoading, isError };
};

export { useGetDiscipline };
