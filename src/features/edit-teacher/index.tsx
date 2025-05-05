import { Teacher } from '@/shared/api';
import { useOpenEditTeacherForm } from '../open-edit-teacher-form';
import Icon from '@/shared/ui/icon';

export const EditTeacher = ({ teacher }: { teacher: Teacher }) => {
  const openForm = useOpenEditTeacherForm(teacher);

  return <Icon glyph="edit" onClick={openForm} />;
};
