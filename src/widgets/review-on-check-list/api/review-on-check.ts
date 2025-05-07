import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetReviewOnCheck = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['complaints'],
    queryFn: () => api.review.get(''),
  });

  return { data, isError, isLoading };
};
