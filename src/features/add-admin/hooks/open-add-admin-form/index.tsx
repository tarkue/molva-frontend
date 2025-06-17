import { useModals } from '@/shared/ui/modal';
import { AddAdminFormFields } from './ui/fields';
import { AddAdminFormButtons } from './ui/buttons';
import { AdminForms } from '@/entity/admin';
import { useSubmit } from './api/submit';

export const useOpenAddAdminForm = () => {
  const form = AdminForms.useAddAdminForm();
  const onSubmit = useSubmit(form);
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'max-w-[808px]',
      title: 'Добавить нового администратора',
      fields: <AddAdminFormFields />,
      buttons: <AddAdminFormButtons />,
      onSubmit: onSubmit,
    });
  };
};
