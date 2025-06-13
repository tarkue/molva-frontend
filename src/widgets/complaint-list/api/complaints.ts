import { useOffsetParam } from '@/features/offset-param';
import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetComplaints = () => {
  const [offset] = useOffsetParam();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['complaints', offset],
    queryFn: () =>
      api.review.complaints.get({
        page: offset,
      }),
  });

  return { data, isError, isLoading };
};
