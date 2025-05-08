import client from '../base';
import { OnlyId } from '../dto/shared.dto';
import {
  RegisterDTO,
  SafeUser,
  SignInDTO,
  UserUpdateDTO,
  UserUpdatePasswordDTO,
} from '../dto/user.dto';

const BASE_URL = 'users';

const register = async (dto: RegisterDTO) =>
  await client
    .post(`${BASE_URL}/registration`, {
      body: JSON.stringify(dto),
    })
    .json<SafeUser>();

const login = async (dto: SignInDTO) =>
  await client
    .post(`${BASE_URL}/authorization`, {
      body: JSON.stringify(dto),
      credentials: 'include',
    })
    .json<SafeUser>();

const check = async () => {
  return await client
    .get(`${BASE_URL}/authorization/check`)
    .json<SafeUser>();
};

const logout = async () =>
  await client.post(`${BASE_URL}/user/logout`);

const edit = async (dto: UserUpdateDTO) =>
  await client
    .patch(`${BASE_URL}/edit}`, {
      body: JSON.stringify(dto),
    })
    .json<SafeUser>();

const changePassword = async (dto: UserUpdatePasswordDTO) =>
  await client
    .patch(`${BASE_URL}/edit/password`, {
      body: JSON.stringify(dto),
    })
    .json<SafeUser>();

const get = async (id: string) =>
  await client.get(`${BASE_URL}/user/${id}`).json<SafeUser>();

const getAll = async () =>
  await client.get(`${BASE_URL}/`).json<SafeUser[]>();

const remove = async (dto: OnlyId) =>
  await client.delete(`$/admin/{BASE_URL}/user/${dto.id}/delete`);

export {
  login,
  register,
  edit,
  changePassword,
  check,
  logout,
  get,
  getAll,
  remove,
};
