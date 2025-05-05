import { Discipline } from '@/shared/api';
import { useOpenEditDisciplineForm } from '../open-edit-discipline-form';
import Icon from '@/shared/ui/icon';

export const EditDiscipline = ({
  discipline,
}: {
  discipline: Discipline;
}) => {
  const openForm = useOpenEditDisciplineForm(discipline);

  return <Icon glyph="edit" onClick={openForm} />;
};
