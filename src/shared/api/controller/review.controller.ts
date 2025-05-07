import client from '../base';
import {
  CreateReviewDTO,
  ResolveComplaintDTO,
  Review,
  Status,
  UpdateReviewDTO,
  VoteReviewDTO,
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

export const vote = async (dto: VoteReviewDTO) =>
  await client.patch(`${BASE_URL}/vote`, {
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

export const getMy = async (options: PageOffsetOptions) => {
  const searchParams = Object.fromEntries(
    Object.entries(options).filter(([_, v]) => v != null),
  );

  return await client
    .get(`${BASE_URL}/my`, { searchParams })
    .json<Review[]>();
};

export const getForModerate = async (
  options: Partial<Status> & PageOffsetOptions = {},
) => {
  const searchParams = Object.fromEntries(
    Object.entries(options).filter(([_, v]) => v != null),
  );

  return await client
    .get(`${BASE_URL}/review/admin/moderation`, { searchParams })
    .json<Review[]>();
};

export const complaints = {
  get: async (options: PageOffsetOptions) => {
    const searchParams = Object.fromEntries(
      Object.entries(options).filter(([_, v]) => v != null),
    );

    return await client
      .get(`${BASE_URL}/review/complaint/get`, { searchParams })
      .json<Review[]>();
  },
  add: async (dto: OnlyId) =>
    await client.post(`${BASE_URL}/review/complaint/add`, {
      body: JSON.stringify(dto),
    }),
  resolve: async (dto: ResolveComplaintDTO) =>
    await client.post(`${BASE_URL}/review/admin/moderation`, {
      body: JSON.stringify(dto),
    }),
};
