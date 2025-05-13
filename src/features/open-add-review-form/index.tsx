import { useAddReviewSubmit } from './api/submit';
import { useModals } from '@/shared/ui/modal';
import { AddReviewFormButtons } from './ui/buttons';
import { AddReviewFormFieldsAndHeader } from './ui/fields';
import { ReviewForms } from '@/entity/review';
import { Discipline } from '@/shared/api';

export const useOpenAddReviewForm = (discipline: Discipline) => {
  const form = ReviewForms.useAddReviewForm();
  const onSubmit = useAddReviewSubmit();
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'max-w-[808px]',
      title: discipline.name,
      onSubmit: onSubmit,
      fields: (
        <AddReviewFormFieldsAndHeader
          form={form}
          discipline={discipline}
        />
      ),
      buttons: <AddReviewFormButtons />,
    });
  };
};
