import client from '../base';
import { Module } from '../dto/module.dto';
import { OnlyId } from '../dto/shared.dto';
import { SafeUser, User } from '../dto/user.dto';

const BASE_URL = 'admin';

export const add = async (dto: OnlyId) =>
  await client
    .patch(`${BASE_URL}/add`, {
      body: JSON.stringify(dto),
    })
    .json<SafeUser>();

export const remove = async (dto: OnlyId) =>
  await client.patch(`${BASE_URL}/admin/remove`, {
    body: JSON.stringify(dto),
  });

export const getAll = async () =>
  await client.get(`${BASE_URL}/admin/get`).json<User[]>();

export const module = {
  get: async () =>
    await client
      .get(`${BASE_URL}/modules/public/get`)
      .json<Module[]>(),
  add: async (module: Module) =>
    await client
      .post(`${BASE_URL}/module/add`, {
        body: JSON.stringify(module),
      })
      .json<Module>(),
};
