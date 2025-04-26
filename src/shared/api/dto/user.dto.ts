export interface User {
  user_id: string;
  first_name: string;
  surname: string;
  patronymic?: string;
  email: string;
}

export type UserUpdateDTO = Partial<User>;

export type UserUpdatePasswordDTO = {
  user_id: string;
  old_password: string;
  password: string;
};
