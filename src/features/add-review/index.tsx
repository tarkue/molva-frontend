import Button from '@/shared/ui/button';
import { useOpenAddReviewForm } from './open-add-review-form';
import { Discipline } from '@/shared/api';

export const AddReview = ({
  discipline,
}: {
  discipline: Discipline;
}) => {
  const open = useOpenAddReviewForm(discipline);

  return (
    <Button size="large" onClick={open}>
      Написать отзыв
    </Button>
  );
};
