import { api } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetOurReview = () => {
  const [offset] = useSearchParam('offset');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['ourReview', offset],
    queryFn: () => api.review.get(''),
  });

  return { data, isError, isLoading };
};
