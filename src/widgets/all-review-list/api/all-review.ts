import { useOffsetParam } from '@/features/offset-param';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { useQuery } from '@tanstack/react-query';

export const useGetAllReview = () => {
  const [offset] = useOffsetParam();
  const { refreshState } = useRefresh();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['all-reviews', offset, refreshState],
    queryFn: () =>
      api.review.get(undefined, {
        page: offset,
      }),
  });

  return { data, isError, isLoading };
};
