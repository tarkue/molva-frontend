import client from '../base';
import {
  CreateReviewDTO,
  Review,
  Status,
  UpdateReviewDTO,
} from '../dto/review.dto';
import { OnlyId } from '../dto/shared.dto';
import { PageOffsetOptions } from '../types/page';

const BASE_URL = 'reviews';

export const add = async (dto: CreateReviewDTO) =>
  await client
    .post(`${BASE_URL}/add`, {
      body: JSON.stringify(dto),
    })
    .json<Review>();

export const edit = async (dto: UpdateReviewDTO) =>
  await client.patch(`${BASE_URL}/admin/review/status/edit`, {
    body: JSON.stringify(dto),
  });

export const get = async (
  dto: OnlyId,
  options: PageOffsetOptions,
) => {
  const cleanParams = Object.fromEntries(
    Object.entries(options).filter(([_, v]) => v != null),
  );

  return await client
    .get(`${BASE_URL}`, {
      searchParams: {
        discipline_id: dto.id,
        ...cleanParams,
      },
    })
    .json<Review[]>();
};

export const getForModerate = async (
  options: Partial<Status> & PageOffsetOptions,
) => {
  const cleanParams = Object.fromEntries(
    Object.entries(options).filter(([_, v]) => v != null),
  );

  return await client
    .get(`${BASE_URL}/review/admin/moderation`, {
      searchParams: cleanParams,
    })
    .json<Review[]>();
};
