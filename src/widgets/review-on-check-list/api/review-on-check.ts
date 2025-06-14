import { useOffsetParam } from '@/features/offset-param';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { useQuery } from '@tanstack/react-query';

export const useGetReviewOnCheck = () => {
  const [offset] = useOffsetParam();
  const { refreshState } = useRefresh();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reviews-on-check', offset, refreshState],
    queryFn: () =>
      api.review.getForModerate({
        status: 'pending',
        page: offset,
      }),
  });

  return { data, isError, isLoading };
};
