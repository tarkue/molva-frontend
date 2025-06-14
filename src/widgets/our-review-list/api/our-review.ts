import { useOffsetParam } from '@/features/offset-param';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { useQuery } from '@tanstack/react-query';

export const useGetOurReview = () => {
  const [offset] = useOffsetParam();
  const { refreshState } = useRefresh();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['ourReview', offset, refreshState],
    queryFn: () => api.review.getMy({ page: offset }),
  });

  return { data, isError, isLoading };
};
