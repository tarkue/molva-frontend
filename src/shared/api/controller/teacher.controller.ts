import client from '../base';
import {
  AppointDisciplineDTO,
  CreateTeacherDTO,
  RemoveDisciplineDTO,
  RemoveTeacherDTO,
  UpdateTeacherDTO,
} from '../dto/teacher.dto';

const BASE_URL = '/teacher';

export const getAll = async () =>
  await client.get(`${BASE_URL}/teachers/get`).json();

export const getByDiscipline = async (discipline_id: string) =>
  await client
    .get(`${BASE_URL}/by-discipline/${discipline_id}`)
    .json();

export const create = async (dto: CreateTeacherDTO) =>
  await client.post(`${BASE_URL}/create`, {
    body: JSON.stringify(dto),
  });

export const update = async (dto: UpdateTeacherDTO) =>
  await client.patch(`${BASE_URL}/update`, {
    body: JSON.stringify(dto),
  });

export const remove = async (dto: RemoveTeacherDTO) =>
  await client.delete(`${BASE_URL}/remove`, {
    body: JSON.stringify(dto),
  });

export const discipline = {
  appoint: async (dto: AppointDisciplineDTO) =>
    await client.post(`${BASE_URL}/discipline/appoint`, {
      body: JSON.stringify(dto),
    }),
  remove: async (dto: RemoveDisciplineDTO) =>
    await client.delete(`${BASE_URL}/discipline/remove`, {
      body: JSON.stringify(dto),
    }),
};
