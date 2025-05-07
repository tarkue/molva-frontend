import { api } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetReviewOnCheck = () => {
  const [offset] = useSearchParam<number>('offset');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reviews-on-check', offset],
    queryFn: () =>
      api.review.getForModerate({
        status: 'pending',
        page: offset,
      }),
  });

  return { data, isError, isLoading };
};
