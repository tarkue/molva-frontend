import { useOffsetParam } from '@/features/offset-param';
import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetReviewOnCheck = () => {
  const [offset] = useOffsetParam();

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
