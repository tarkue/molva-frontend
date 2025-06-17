import { Teacher } from '@/shared/api';
import { UpdateButton } from '@/shared/ui/update-button';
import { useOpenUpdateTeacherForm } from './hooks/open-update-teacher-form';

export const EditTeacher = ({ teacher }: { teacher: Teacher }) => {
  const open = useOpenUpdateTeacherForm(teacher);
  return <UpdateButton onClick={open} />;
};
