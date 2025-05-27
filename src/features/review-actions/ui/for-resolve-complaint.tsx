import { ReviewProps } from '../models/review-props';
import { ResolveComplaint } from './actions/resolve';

export const ReviewActionsForResolveComplaint = ({
  review,
}: ReviewProps) => (
  <div className="flex gap-2">
    <ResolveComplaint.Dismiss review={review} />
    <ResolveComplaint.Delete review={review} />
  </div>
);
