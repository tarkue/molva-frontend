import { useDeleteTeacherSubmit } from './api/submit';
import { Teacher } from '@/shared/api';
import { useOpenConfirmRemoveForm } from '../open-confirm-remove';
import { getFullName } from '@/entity/user';
import { DeleteButton } from '@/shared/ui/delete-button';

export const DeleteTeacher = ({ teacher }: { teacher: Teacher }) => {
  const onSubmit = useDeleteTeacherSubmit(teacher);
  const open = useOpenConfirmRemoveForm({
    onSubmit,
    type: 'DELETE',
    text: `Вы уверены, что хотите удалить преподавателя ${getFullName(teacher)}? Это действие нельзя будет отменить.`,
  });
  return <DeleteButton onClick={open} />;
};
