import client from '../base';
import { CreateReviewDTO, Review } from '../dto/review.dto';

interface GetOptions {
  teacherId?: string;
  sort?: string;
}

export const get = async (
  id: string,
  options: GetOptions = {},
): Promise<Review[]> => {
  const searchParams = new URLSearchParams();

  searchParams.set('teacher_id', options.teacherId || '');
  searchParams.set('sort', options.sort || '');

  return await client
    .get(`/reviews/${id}`, {
      searchParams,
    })
    .json<Review[]>();
};

export const create = async (dto: CreateReviewDTO) =>
  await client.post(`/reviews/create`, {
    body: JSON.stringify(dto),
  });
