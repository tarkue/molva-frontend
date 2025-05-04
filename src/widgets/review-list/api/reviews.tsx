import { api } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

export const useGetDisciplineReviews = () => {
  const { id } = useSearchParams<{ id: string }>();
  const [teacherId] = useSearchParam<string>('teacher_id');
  const [sort] = useSearchParam<string>('sort');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reviews', id, teacherId, sort],
    queryFn: () =>
      id ? api.review.get(id, { teacherId, sort }) : [],
  });

  return { data, isLoading, isError };
};
