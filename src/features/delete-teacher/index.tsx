import Icon from '@/shared/ui/icon';
import { useDeleteTeacherSubmit } from './api/submit';
import { Teacher } from '@/shared/api';

export const DeleteTeacher = ({ teacher }: { teacher: Teacher }) => {
  const onSubmit = useDeleteTeacherSubmit(teacher);
  return <Icon glyph="trash" stroke="red" onClick={onSubmit} />;
};
