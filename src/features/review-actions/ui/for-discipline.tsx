import { useUser } from '@/entity/user';
import { ReviewProps } from '../models/review-props';
import { Complain } from './actions/complain';
import { DeleteReview } from './actions/delete';

export const ReviewActions = ({ review }: ReviewProps) => {
  const { user } = useUser();

  if (!user || user.role == 'USER') {
    return <Complain review={review} />;
  }

  return <DeleteReview review={review} />;
};
