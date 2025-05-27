import { api } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetAllReview = () => {
  const [offset] = useSearchParam<number>('offset');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['all-reviews', offset],
    queryFn: () =>
      api.review.getForModerate({
        status: 'published',
        page: offset,
      }),
  });

  return { data, isError, isLoading };
};
