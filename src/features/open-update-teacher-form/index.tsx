import { TeacherForms } from '@/entity/teacher';
import { Teacher } from '@/shared/api';
import { useModals } from '@/shared/ui/modal';
import { useUpdateTeacherSubmit } from './api/submit';
import { getDefaultDisciplines } from './models';
import { UpdateTeacherFormButtons } from './ui/buttons';
import { UpdateTeacherFormFields } from './ui/fields';

export const useOpenUpdateTeacherForm = (teacher: Teacher) => {
  const form = TeacherForms.useUpdateTeacherForm(teacher);
  const onSubmit = useUpdateTeacherSubmit(teacher);
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'max-w-[513px]',
      title: 'Преподаватель',
      onSubmit: onSubmit,
      fields: (
        <UpdateTeacherFormFields
          form={form}
          defaultDisciplines={getDefaultDisciplines(teacher)}
        />
      ),
      buttons: <UpdateTeacherFormButtons />,
    });
  };
};
