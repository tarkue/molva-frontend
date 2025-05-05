import { useUpdateTeacherSubmit } from './api/submit';
import { useModals } from '@/shared/ui/modal';
import { EditTeacherFormButtons } from './ui/buttons';
import { EditTeacherFormFields } from './ui/fields';
import { TeacherForms } from '@/entity/teacher';
import { Teacher } from '@/shared/api';

export const useOpenEditTeacherForm = (teacher: Teacher) => {
  const form = TeacherForms.useUpdateTeacherForm(teacher);
  const onSubmit = useUpdateTeacherSubmit(teacher);
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'w-[513px]',
      title: 'Преподаватель',
      onSubmit: onSubmit,
      fields: <EditTeacherFormFields form={form} />,
      buttons: <EditTeacherFormButtons />,
    });
  };
};
