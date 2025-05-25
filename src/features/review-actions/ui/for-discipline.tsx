import { useUser } from '@/entity/user';
import { ReviewProps } from '../models/review-props';
import { Complain } from './actions/complain';
import { DeleteReview } from './actions/delete';
import { LikeAndDislike } from './actions/like-and-dislike';

const RightReviewActions = ({ review }: ReviewProps) => {
  const { user } = useUser();

  if (user && user.role == 'USER') {
    return <Complain review={review} />;
  }
  else if (user && (user.role == 'ADMIN' || user.role == 'SUPER-ADMIN')) {
    return <DeleteReview review={review} />;
  }

  return null;
};

export const ReviewActions = ({ review }: ReviewProps) => {
  return (
    <>
      <LikeAndDislike review={review} />
      <RightReviewActions review={review} />
    </>
  );
};
