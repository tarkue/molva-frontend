import { useOpenConfirmRemoveForm } from '@/features/open-confirm-remove';
import { useDeleteReviewSubmit } from '../../api/delete';
import { ReviewProps } from '../../models/review-props';
import { DeleteButton } from '@/shared/ui/delete-button';

export const DeleteReview = ({ review }: ReviewProps) => {
  const onSubmit = useDeleteReviewSubmit(review);
  const open = useOpenConfirmRemoveForm({
    onSubmit,
    type: 'DELETE',
    text: 'Вы уверены, что хотите удалить данный отзыв? Это действие будет невозможно отменить.',
  });

  return <DeleteButton onClick={open} />;
};
