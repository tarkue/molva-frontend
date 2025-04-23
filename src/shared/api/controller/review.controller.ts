import { Review } from '@/entity/reviews';

interface GetOptions {
  teacherId?: string;
  sort?: string;
}

export const get = async (
  id: string,
  options: GetOptions = {},
): Promise<Review[]> => {
  return [];
};
