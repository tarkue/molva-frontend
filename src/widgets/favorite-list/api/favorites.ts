import { api } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetFavorites = () => {
  const [offset] = useSearchParam<number>('offset');
  const { data, isLoading, isError } = useQuery({
    queryKey: ['favorites', offset],
    queryFn: () => api.discipline.favorite.get(offset ? offset : 1),
  });

  return { data, isLoading, isError };
};
