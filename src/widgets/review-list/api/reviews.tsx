import { useOffsetParam } from '@/features/offset-param';
import { useOrderParam } from '@/features/order-param';
import { useSortForReviews } from '@/features/sort-for-reviews-param';
import { useTeacherParam } from '@/features/teacher-param/teacher-param';
import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export const useGetDisciplineReviews = () => {
  const { id } = useParams<{ id: string }>();
  const [teacherId] = useTeacherParam();
  const [page] = useOffsetParam();
  const [order] = useOrderParam();
  const [sort] = useSortForReviews();

  if (!id) {
    return { data: null, isLoading: false, isError: false };
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reviews', id, teacherId, sort, order, page],
    queryFn: () =>
      api.review.get(
        { id },
        {
          teacher_id: teacherId,
          page,
          sort_by: sort,
          sort_order: order,
        },
      ),
  });

  return { data, isLoading, isError };
};
