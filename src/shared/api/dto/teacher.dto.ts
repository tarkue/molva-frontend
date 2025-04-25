export interface OnlyTeacherId {
  teacher_id: string;
}

export interface CreateTeacherDTO {
  first_name: string;
  surname: string;
  patronymic?: string;
}

export type UpdateTeacherDTO = Partial<CreateTeacherDTO> &
  OnlyTeacherId;

export type RemoveTeacherDTO = OnlyTeacherId;

export interface AppointDisciplineDTO extends OnlyTeacherId {
  discipline_ids: string[];
}

export interface RemoveDisciplineDTO extends OnlyTeacherId {
  discipline_id: string;
}

export type Teacher = CreateTeacherDTO & OnlyTeacherId;
