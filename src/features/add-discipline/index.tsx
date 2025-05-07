import { AddButton } from '@/shared/ui/add-button';
import { useOpenAddDisciplineForm } from '../open-add-discipline-form';

export const AddDiscipline = () => {
  const openForm = useOpenAddDisciplineForm();
  return <AddButton onClick={openForm} />;
};
