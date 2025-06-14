import { useOffsetParam } from '@/features/offset-param';
import { api } from '@/shared/api';
import { useRefresh } from '@/shared/models/refresh-store';
import { useQuery } from '@tanstack/react-query';

export const useGetComplaints = () => {
  const [offset] = useOffsetParam();
  const { refreshState } = useRefresh();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['complaints', offset, refreshState],
    queryFn: () =>
      api.review.complaints.get({
        page: offset,
      }),
  });

  return { data, isError, isLoading };
};
