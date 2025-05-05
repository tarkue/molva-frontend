import { api } from '@/shared/api';
import { useParam } from '@/shared/models/param';
import { useQuery } from '@tanstack/react-query';

export const useGetFavorites = () => {
  const [offset] = useParam('offset');
  const { data, isLoading, isError } = useQuery({
    queryKey: ['favorites', offset],
    queryFn: () => api.discipline.favorite.get(),
  });

  return { data, isLoading, isError };
};
