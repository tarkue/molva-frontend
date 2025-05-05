import { AddButton } from '@/shared/ui/add-button';
import { useOpenAddTeacherForm } from '../open-add-teacher-form';

export const AddTeacher = () => {
  const openForm = useOpenAddTeacherForm();
  return <AddButton onClick={openForm} />;
};
