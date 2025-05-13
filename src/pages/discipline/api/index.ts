import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

const useGetDiscipline = () => {
  const params = useParams();
  const id = params.id;

  if (!id) {
    return { data: null, isLoading: false, isError: false };
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['discipline', id],
    queryFn: () => api.discipline.get(id),
  });

  return { data, isLoading, isError };
};

export { useGetDiscipline };
