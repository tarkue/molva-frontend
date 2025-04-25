import client from '../base';
import {
  Module,
  OnlyModuleId,
  UpdateModuleDTO,
} from '../dto/module.dto';

const BASE_URL = '/admin';

type TargetUser = { target_user_id: string };

export const add = async (dto: TargetUser) =>
  await client.patch(`${BASE_URL}/add`, {
    body: JSON.stringify(dto),
  });

export const remove = async (dto: TargetUser) =>
  await client.patch(`${BASE_URL}/admin/remove`, {
    body: JSON.stringify(dto),
  });

export const module = {
  get: async () =>
    await client.get(`${BASE_URL}/modules/get`).json<Module[]>(),
  add: async (module: Module) =>
    await client.post(`${BASE_URL}/module/add`, {
      body: JSON.stringify(module),
    }),
  edit: async (module: UpdateModuleDTO) =>
    await client.patch(`${BASE_URL}/module/edit`, {
      body: JSON.stringify(module),
    }),
  remove: async (module: OnlyModuleId) =>
    await client.post(`${BASE_URL}/module/remove`, {
      body: JSON.stringify(module),
    }),
};
