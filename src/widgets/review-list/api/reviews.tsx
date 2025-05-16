import { api } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export const useGetDisciplineReviews = () => {
  const { id } = useParams<{ id: string }>();
  const [teacherId] = useSearchParam<string>('teacher_id');
  const [page] = useSearchParam<number>('offset');
  const [sort] = useSearchParam<string>('sort');

  if (!id) {
    return { data: null, isLoading: false, isError: false };
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reviews', id, teacherId, sort],
    queryFn: () =>
      api.review.get(
        { id },
        {
          teacher_id: teacherId,
          page,
          sort,
        },
      ),
  });

  return { data, isLoading, isError };
};
