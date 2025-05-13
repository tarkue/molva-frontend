import { useAddTeacherSubmit } from './api/submit';
import { useModals } from '@/shared/ui/modal';
import { AddTeacherFormButtons } from './ui/buttons';
import { AddTeacherFormFields } from './ui/fields';
import { TeacherForms } from '@/entity/teacher';

export const useOpenAddTeacherForm = () => {
  const form = TeacherForms.useAddTeacherForm();
  const onSubmit = useAddTeacherSubmit();
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'max-w-[513px]',
      title: 'Добавить преподавателя',
      onSubmit: onSubmit,
      fields: <AddTeacherFormFields form={form} />,
      buttons: <AddTeacherFormButtons />,
    });
  };
};
