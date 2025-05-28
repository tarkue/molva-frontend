import { api, SortForDiscipline, SortOrder } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export const useGetDisciplineReviews = () => {
  const { id } = useParams<{ id: string }>();
  const [teacherId] = useSearchParam<string>('teacher_id');
  const [page] = useSearchParam<number>('offset');
  const [order] = useSearchParam<SortOrder>('order');
  const [sort] = useSearchParam<SortForDiscipline>('sort');

  if (!id) {
    return { data: null, isLoading: false, isError: false };
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reviews', id, teacherId, sort, order, page],
    queryFn: () =>
      api.review.get(
        { id },
        {
          teacher_id: teacherId || undefined,
          page,
          sort_by: sort,
          sort_order: order,
        },
      ),
  });

  return { data, isLoading, isError };
};
