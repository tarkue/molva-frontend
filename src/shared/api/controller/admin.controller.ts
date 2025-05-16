import client from '../base';
import { Module } from '../dto/module.dto';
import { OnlyId } from '../dto/shared.dto';
import { SafeUser, User } from '../dto/user.dto';
import { GetResponse } from '../types/GetResponse';

const BASE_URL = 'admin';

export const add = async (dto: OnlyId) =>
  await client
    .patch(`${BASE_URL}/add`, {
      body: JSON.stringify(dto),
    })
    .json<SafeUser>();

export const remove = async (dto: OnlyId) =>
  await client.patch(`${BASE_URL}/remove`, {
    body: JSON.stringify(dto),
  });

export const getAll = async (search: string, page: number) =>
  await client
    .get(`${BASE_URL}/admins`, {
      searchParams: { search, page },
    })
    .json<GetResponse<User[]>>();

export const module = {
  get: async () =>
    await client
      .get(`${BASE_URL}/public/modules/get`)
      .json<Module[]>(),
  add: async (module: Pick<Module, 'name'>) =>
    await client
      .post(`${BASE_URL}/module/add`, {
        body: JSON.stringify(module),
      })
      .json<Module>(),
};
