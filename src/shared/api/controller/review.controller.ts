import client from '../base';
import {
  CreateReviewDTO,
  GetReviewOptions,
  ResolveComplaintDTO,
  Review,
  Status,
  UpdateReviewDTO,
  VoteReviewDTO,
} from '../dto/review.dto';
import { OnlyId } from '../dto/shared.dto';
import { GetResponse } from '../types/GetResponse';
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

export const remove = async (dto: OnlyId) =>
  await client.delete(`${BASE_URL}/review/delete`, {
    body: JSON.stringify(dto),
  });

export const vote = async (dto: VoteReviewDTO) =>
  await client.post(`${BASE_URL}/review/vote`, {
    body: JSON.stringify(dto),
  });

export const get = async (dto: OnlyId, options: GetReviewOptions) => {
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
    .json<GetResponse<Review[]>>();
};

export const getMy = async (options: PageOffsetOptions) => {
  const searchParams = Object.fromEntries(
    Object.entries(options).filter(([_, v]) => v != null),
  );

  return await client
    .get(`${BASE_URL}/my`, { searchParams })
    .json<GetResponse<Review[]>>();
};

export const getForModerate = async (
  options: Partial<Status> & PageOffsetOptions = {},
) => {
  const searchParams = Object.fromEntries(
    Object.entries(options).filter(([_, v]) => v != null),
  );

  return await client
    .get(`${BASE_URL}/review/admin/moderation`, { searchParams })
    .json<GetResponse<Review[]>>();
};

export const complaints = {
  get: async (options: PageOffsetOptions) => {
    const searchParams = Object.fromEntries(
      Object.entries(options).filter(([_, v]) => v != null),
    );

    return await client
      .get(`${BASE_URL}/admin/complaints/get`, { searchParams })
      .json<GetResponse<Review[]>>();
  },
  add: async (dto: OnlyId) =>
    await client.post(`${BASE_URL}/review/complaint/add`, {
      body: JSON.stringify(dto),
    }),
  resolve: async (dto: ResolveComplaintDTO) =>
    await client.post(
      `${BASE_URL}/admin/complaints/complaint/review/resolve`,
      {
        body: JSON.stringify(dto),
      },
    ),
};
