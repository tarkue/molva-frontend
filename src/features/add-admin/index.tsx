import { AddButton } from '@/shared/ui/add-button';
import { useOpenAddAdminForm } from './hooks/open-add-admin-form';

export const AddAdmin = () => {
  const openForm = useOpenAddAdminForm();
  return <AddButton onClick={openForm} />;
};
