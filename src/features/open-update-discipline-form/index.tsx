import { DisciplineForms } from '@/entity/discipline';
import { Discipline } from '@/shared/api';
import { useModals } from '@/shared/ui/modal';
import { useUpdateDisciplineSubmit } from './api/submit';
import { UpdateDisciplineFormButtons } from './ui/buttons';
import { UpdateDisciplineFormFields } from './ui/fields';

export const useOpenUpdateDisciplineForm = (
  discipline: Discipline,
) => {
  const form = DisciplineForms.useUpdateDisciplineForm(discipline);
  const onSubmit = useUpdateDisciplineSubmit(discipline);
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'max-w-[514px]',
      title: 'Добавить новую дисциплину',
      onSubmit: onSubmit,
      fields: <UpdateDisciplineFormFields form={form} />,
      buttons: <UpdateDisciplineFormButtons />,
    });
  };
};
