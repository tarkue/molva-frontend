import { api } from '@/shared/api';
import { useParam } from '@/shared/models/search-params';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export const useGetDisciplineReviews = () => {
  const { id } = useParams<{ id: string }>();
  const [teacherId] = useParam<string>('teacher_id');
  const [sort] = useParam<string>('sort');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reviews', id, teacherId, sort],
    queryFn: () =>
      id ? api.review.get(id, { teacherId, sort }) : [],
  });

  return { data, isLoading, isError };
};
