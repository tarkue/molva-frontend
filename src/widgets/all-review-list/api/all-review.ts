import { useOffsetParam } from '@/features/offset-param';
import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetAllReview = () => {
  const [offset] = useOffsetParam();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['all-reviews', offset],
    queryFn: () =>
      api.review.get(undefined, {
        page: offset,
      }),
  });

  return { data, isError, isLoading };
};
