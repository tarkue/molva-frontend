import Icon from '@/shared/ui/icon';
import { useDeleteDisciplineSubmit } from './api/submit';
import { Discipline } from '@/shared/api';

export const DeleteDiscipline = ({
  discipline,
}: {
  discipline: Discipline;
}) => {
  const onSubmit = useDeleteDisciplineSubmit(discipline);
  return <Icon glyph="trash" stroke="red" onClick={onSubmit} />;
};
