import { useOffsetParam } from '@/features/offset-param';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { useQuery } from '@tanstack/react-query';

export const useGetFavorites = () => {
  const [offset] = useOffsetParam();
  const { refreshState } = useRefresh();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['favorites', offset, refreshState],
    queryFn: () => api.discipline.favorite.get(offset),
  });

  return { data, isLoading, isError };
};
