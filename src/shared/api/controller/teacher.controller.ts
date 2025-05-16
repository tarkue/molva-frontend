import client from '../base';
import {
  AppointDisciplineDTO,
  CreateTeacherDTO,
  RemoveDisciplineDTO,
  RemoveTeacherDTO,
  Teacher,
  UpdateTeacherDTO,
} from '../dto/teacher.dto';
import { GetResponse } from '../types/GetResponse';

const BASE_URL = 'teachers';

export const create = async (dto: CreateTeacherDTO) =>
  await client
    .post(`${BASE_URL}/admin/teacher/create`, {
      body: JSON.stringify(dto),
    })
    .json<Teacher>();

export const update = async (dto: UpdateTeacherDTO) =>
  await client
    .patch(`${BASE_URL}/admin/teacher/update`, {
      body: JSON.stringify(dto),
    })
    .json<Teacher>();

export const remove = async (dto: RemoveTeacherDTO) =>
  await client.delete(`${BASE_URL}/remove`, {
    body: JSON.stringify(dto),
  });

export const getAll = async () =>
  await client.get(`${BASE_URL}/get`).json<GetResponse<Teacher[]>>();

export const getByDiscipline = async (discipline_id: string) =>
  await client
    .get(`${BASE_URL}/discipline/${discipline_id}/get-by-discipline`)
    .json<GetResponse<Teacher[]>>();

export const discipline = {
  appoint: async (dto: AppointDisciplineDTO) =>
    await client.post(
      `${BASE_URL}/admin/teacher/discipline/appoint`,
      {
        body: JSON.stringify(dto),
      },
    ),
  remove: async (dto: RemoveDisciplineDTO) =>
    await client.delete(
      `${BASE_URL}/admin/teacher/discipline/remove`,
      {
        body: JSON.stringify(dto),
      },
    ),
};
