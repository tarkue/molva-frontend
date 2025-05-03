import { DisciplineForms } from '@/entity/discipline';
import { useAddDisciplineSubmit } from './api/submit';
import { useModals } from '@/shared/ui/modal';

export const useOpenAddDisciplineForm = () => {
  const form = DisciplineForms.useAddDisciplineForm();
  const onSubmit = useAddDisciplineSubmit();
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'w-[514px]',
      title: 'Добавить новую дисциплину',
      onSubmit: onSubmit,
    });
  };
};
