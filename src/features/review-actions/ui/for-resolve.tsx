import { ReviewProps } from '../models/review-props';
import { ResolveComplaint } from './actions/resolve';

export const ReviewActionsForResolveComplaint = ({
  review,
}: ReviewProps) => (
  <>
    <ResolveComplaint.Dismiss review={review} />
    <ResolveComplaint.Delete review={review} />
  </>
);
