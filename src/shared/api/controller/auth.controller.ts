import client from '../base';
import { UserDTO } from '../dto/shared/user.dto';
import { LoginDTO, RegisterDTO } from '../dto/auth';

const login = async (dto: LoginDTO) =>
  await client
    .post('/auth/login', {
      body: JSON.stringify(dto),
    })
    .json<UserDTO>();

const register = async (dto: RegisterDTO) =>
  await client
    .post('/auth/register', {
      body: JSON.stringify(dto),
    })
    .json<UserDTO>();

const changePassword = async (dto: any) =>
  await client
    .post('/auth/change-password', {
      body: JSON.stringify(dto),
    })
    .json<any>();

export { login, register, changePassword };
