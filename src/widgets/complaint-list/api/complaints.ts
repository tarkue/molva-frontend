import { api } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';

export const useGetComplaints = () => {
  const [offset] = useSearchParam<number>('offset');
  const { data, isLoading, isError } = useQuery({
    queryKey: ['complaints', offset],
    queryFn: () =>
      api.review.complaints.get({
        page: offset,
      }),
  });

  return { data, isError, isLoading };
};
