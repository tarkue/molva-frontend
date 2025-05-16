import { useDeleteDisciplineSubmit } from './api/submit';
import { Discipline } from '@/shared/api';
import { useOpenConfirmRemoveForm } from '../open-confirm-remove';
import { DeleteButton } from '@/shared/ui/delete-button';

export const DeleteDiscipline = ({
  discipline,
}: {
  discipline: Discipline;
}) => {
  const onSubmit = useDeleteDisciplineSubmit(discipline);
  const open = useOpenConfirmRemoveForm({
    onSubmit,
    type: 'DELETE',
    text: `Вы уверены, что хотите удалить дисциплину ${discipline.name}? Это действие нельзя будет отменить.`,
  });

  return <DeleteButton onClick={open} />;
};
