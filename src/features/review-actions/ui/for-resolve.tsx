import { ReviewProps } from '../models/review-props';
import { ReviewActions } from './actions/resolve';

export const ReviewActionsForResolve = ({ review }: ReviewProps) => (
  <div className="flex gap-2">
    <ReviewActions.Publish review={review} />
    <ReviewActions.Reject review={review} />
  </div>
);
