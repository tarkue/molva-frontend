import { useOffsetParam } from '@/features/offset-param';
import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetOurReview = () => {
  const [offset] = useOffsetParam();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['ourReview', offset],
    queryFn: () => api.review.getMy({ page: offset }),
  });

  return { data, isError, isLoading };
};
