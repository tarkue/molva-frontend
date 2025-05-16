import { Teacher } from '@/shared/api';
import { useOpenEditTeacherForm } from '../open-edit-teacher-form';
import { UpdateButton } from '@/shared/ui/update-button';

export const EditTeacher = ({ teacher }: { teacher: Teacher }) => {
  const open = useOpenEditTeacherForm(teacher);
  return <UpdateButton onClick={open} />;
};
