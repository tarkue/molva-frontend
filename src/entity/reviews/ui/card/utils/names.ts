import { Teacher } from '@/shared/api';

const getTeacherNames = (teachers: (string | undefined)[]) =>
  teachers
    .filter((el) => el != null && el != undefined && el != '')
    .join(', ');

const getTeacherName = (teacher: Teacher) =>
  `${teacher.surname} ${teacher.first_name} ${teacher.patronymic}`;

export { getTeacherNames, getTeacherName };
