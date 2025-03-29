import api from '../base';
import { UserDTO } from '../dto/shared/user.dto';
import { LoginDTO, RegisterDTO } from '../dto/auth';

const auth = {
  login: async (dto: LoginDTO) => {
    return await api
      .post('/auth/login', {
        body: JSON.stringify(dto),
      })
      .json<UserDTO>();
  },
  register: async (dto: RegisterDTO) => {
    return await api
      .post('/auth/register', {
        body: JSON.stringify(dto),
      })
      .json<UserDTO>();
  },
};

export { auth };
