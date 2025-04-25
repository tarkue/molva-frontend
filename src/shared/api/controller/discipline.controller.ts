import client from '../base';
import {
  CreateDisciplineDTO,
  Discipline,
  OnlyDisciplineId,
  UpdateDisciplineDTO,
} from '../dto/discipline.dto';

const BASE_URL = '/discipline';

export const get = async (id: string) =>
  await client.get<Discipline>(`${BASE_URL}/${id}`).json();

export const getAll = async () =>
  await client
    .get<Discipline[]>(`${BASE_URL}/disciplines/get`)
    .json();

export const create = async (dto: CreateDisciplineDTO) =>
  await client.post(`${BASE_URL}/create`, {
    body: JSON.stringify(dto),
  });

export const update = async (dto: UpdateDisciplineDTO) =>
  await client.patch(`${BASE_URL}/update`, {
    body: JSON.stringify(dto),
  });

export const remove = async (dto: OnlyDisciplineId) =>
  await client.delete(`${BASE_URL}/remove/`, {
    body: JSON.stringify(dto),
  });

export const favorite = {
  add: async (dto: OnlyDisciplineId) =>
    await client.post(`${BASE_URL}/favorite/add`, {
      body: JSON.stringify(dto),
    }),

  remove: async (dto: OnlyDisciplineId) =>
    await client.delete(`${BASE_URL}/favorite/remove`, {
      body: JSON.stringify(dto),
    }),

  get: async () =>
    await client.get(`${BASE_URL}/favorite/my`).json<Discipline[]>(),
};
