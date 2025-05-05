import { DisciplineForms } from '@/entity/discipline';
import { useUpdateDisciplineSubmit } from './api/submit';
import { useModals } from '@/shared/ui/modal';
import { UpdateDisciplineFormFields } from './ui/fields';
import { UpdateDisciplineFormButtons } from './ui/buttons';
import { Discipline } from '@/shared/api';

export const useOpenUpdateDisciplineForm = (
  discipline: Discipline,
) => {
  const form = DisciplineForms.useUpdateDisciplineForm(discipline);
  const onSubmit = useUpdateDisciplineSubmit(discipline);
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'w-[514px]',
      title: 'Добавить новую дисциплину',
      onSubmit: onSubmit,
      fields: <UpdateDisciplineFormFields form={form} />,
      buttons: <UpdateDisciplineFormButtons />,
    });
  };
};
