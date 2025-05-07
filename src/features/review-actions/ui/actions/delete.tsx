import Icon from '@/shared/ui/icon';
import { useDeleteReviewSubmit } from '../../api/delete';
import { ReviewProps } from '../../models/review-props';

export const DeleteReview = ({ review }: ReviewProps) => {
  const onSubmit = useDeleteReviewSubmit(review);

  return <Icon glyph="trash" stroke="red" onClick={onSubmit} />;
};
