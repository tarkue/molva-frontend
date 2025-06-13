import { useOffsetParam } from '@/features/offset-param';
import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetFavorites = () => {
  const [offset] = useOffsetParam();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['favorites', offset],
    queryFn: () => api.discipline.favorite.get(offset),
  });

  return { data, isLoading, isError };
};
