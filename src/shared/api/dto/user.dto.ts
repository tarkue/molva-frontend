export interface UserDTO {
  user_id: string;
  name: string;
  surname: string;
  patronymic?: string;
  email: string;
}

export type UserUpdateDTO = Partial<UserDTO>;

export type UserUpdatePasswordDTO = {
  user_id: string;
  old_password: string;
  password: string;
};
