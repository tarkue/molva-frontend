import client from '../base';
import {
  User,
  UserUpdateDTO,
  UserUpdatePasswordDTO,
} from '../dto/user.dto';
import { LoginDTO, RegisterDTO } from '../dto/user';

const BASE_URL = 'users';

const login = async (dto: LoginDTO) =>
  await client
    .post(`${BASE_URL}/authorization`, {
      body: JSON.stringify(dto),
      credentials: 'include',
    })
    .json();

const check = async (): Promise<User> => {
  return await client.get(`${BASE_URL}/authorization/check`).json();
};

const register = async (dto: RegisterDTO) =>
  await client
    .post(`${BASE_URL}/registration`, {
      body: JSON.stringify(dto),
    })
    .json();

const logout = async () =>
  await client.post(`${BASE_URL}/logout`).json<any>();

const edit = async (dto: UserUpdateDTO) =>
  await client
    .patch(`${BASE_URL}/edit}`, {
      body: JSON.stringify(dto),
    })
    .json<any>();

const changePassword = async (dto: UserUpdatePasswordDTO) =>
  await client
    .patch(`${BASE_URL}/edit/password`, {
      body: JSON.stringify(dto),
    })
    .json<any>();

const get = async (id: string) =>
  await client.get(`${BASE_URL}/user/${id}`).json<User>();

const getAll = async () =>
  await client.get(`${BASE_URL}/users`).json<User[]>();

export {
  login,
  register,
  edit,
  changePassword,
  check,
  logout,
  get,
  getAll,
};
