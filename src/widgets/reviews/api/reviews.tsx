import { Review } from '@/entity/reviews';
import { api } from '@/shared/api';
import { useParam } from '@/shared/models/search-params';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const useGetDisciplineReviews = () => {
  const { id } = useParams<{ id: string }>();
  const [teacherId] = useParam<string>('teacher_id');
  const [sort] = useParam<string>('sort');

  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      api.review.get(id, { teacherId, sort }).then(setReviews);
      setIsLoading(false);
    }
  }, [id, teacherId, sort]);

  return { reviews, isLoading };
};
