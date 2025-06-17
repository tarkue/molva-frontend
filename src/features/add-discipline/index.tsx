import { AddButton } from '@/shared/ui/add-button';
import { useOpenAddDisciplineForm } from './hooks/open-add-discipline-form';

export const AddDiscipline = () => {
  const openForm = useOpenAddDisciplineForm();
  return (
    <AddButton onClick={openForm} aria-label="Добавить дисциплину" />
  );
};
