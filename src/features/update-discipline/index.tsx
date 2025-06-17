import { Discipline } from '@/shared/api';
import { useOpenUpdateDisciplineForm } from './hooks/open-update-discipline-form';
import { UpdateButton } from '@/shared/ui/update-button';

export const UpdateDiscipline = ({
  discipline,
}: {
  discipline: Discipline;
}) => {
  const openForm = useOpenUpdateDisciplineForm(discipline);

  return <UpdateButton onClick={openForm} />;
};
