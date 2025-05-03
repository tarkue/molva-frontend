import { OnlyId } from './shared.dto';

export interface CreateTeacherDTO {
  first_name: string;
  surname: string;
  patronymic?: string;
}

export type UpdateTeacherDTO = Partial<CreateTeacherDTO> & OnlyId;

export type RemoveTeacherDTO = OnlyId;

export interface AppointDisciplineDTO extends OnlyId {
  discipline_ids: string[];
}

export interface RemoveDisciplineDTO extends OnlyId {
  discipline_id: string;
}

export type Teacher = CreateTeacherDTO & OnlyId;
