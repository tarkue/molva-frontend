import { Discipline } from '@/shared/api';
import { useOpenUpdateDisciplineForm } from '../open-update-discipline-form';
import Icon from '@/shared/ui/icon';

export const UpdateDiscipline = ({
  discipline,
}: {
  discipline: Discipline;
}) => {
  const openForm = useOpenUpdateDisciplineForm(discipline);

  return <Icon glyph="edit" onClick={openForm} />;
};
