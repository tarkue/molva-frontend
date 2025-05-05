const getTeacherNames = (teachers: (string | undefined)[]) =>
  teachers
    .filter((el) => el != null && el != undefined && el != '')
    .join(', ');

export { getTeacherNames };
