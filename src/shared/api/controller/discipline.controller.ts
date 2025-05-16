import client from '../base';
import {
  CreateDisciplineDTO,
  Discipline,
  UpdateDisciplineDTO,
} from '../dto/discipline.dto';
import { OnlyId } from '../dto/shared.dto';
import { GetResponse } from '../types/GetResponse';
import { DisciplineSearchOptions } from '../types/search';

const BASE_URL = 'disciplines';

export const create = async (dto: CreateDisciplineDTO) =>
  await client
    .post(`${BASE_URL}/admin/discipline/create`, {
      body: JSON.stringify(dto),
    })
    .json<Discipline>();

export const update = async (dto: UpdateDisciplineDTO) =>
  await client
    .patch(`${BASE_URL}/admin/discipline/update`, {
      body: JSON.stringify(dto),
    })
    .json<Discipline>();

export const remove = async (dto: OnlyId) =>
  await client.delete(`${BASE_URL}/admin/discipline/delete`, {
    body: JSON.stringify(dto),
  });

export const get = async (id: string) =>
  await client
    .get<Discipline>(`${BASE_URL}/discipline/${id}`)
    .json<Discipline>();

export const getAll = async () =>
  await client.get<Discipline[]>(`${BASE_URL}/get`).json();

export const search = async (params: DisciplineSearchOptions) => {
  params.sort_by;
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([_, v]) => v != null),
  );
  return await client
    .get(`${BASE_URL}/search`, { searchParams: cleanParams })
    .json<GetResponse<Discipline[]>>();
};

export const favorite = {
  add: async (dto: OnlyId) =>
    await client
      .post(`${BASE_URL}/favorite/add`, {
        body: JSON.stringify(dto),
      })
      .json<Discipline>(),

  remove: async (dto: OnlyId) =>
    await client
      .delete(`${BASE_URL}/favorite/remove`, {
        body: JSON.stringify(dto),
      })
      .json<Discipline>(),

  get: async (page: number) =>
    await client
      .get(`${BASE_URL}/favorite/my`, {
        searchParams: { page },
      })
      .json<GetResponse<Discipline[]>>(),
};
