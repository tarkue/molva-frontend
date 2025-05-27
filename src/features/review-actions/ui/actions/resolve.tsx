import Icon from '@/shared/ui/icon';
import { ReviewProps } from '../../models/review-props';
import {
  useComplaintResolveSubmit,
  useResolveSubmit,
} from '../../api/resolve';
import { ResolveAction } from '@/shared/api';
import Button from '@/shared/ui/button';

const DeleteButton = ({ onSubmit }: { onSubmit: () => void }) => (
  <Button variant="icon" onClick={onSubmit}>
    <Icon glyph="trash" stroke="red" />
  </Button>
);

const DismissButton = ({ onSubmit }: { onSubmit: () => void }) => (
  <Button variant="icon" onClick={onSubmit}>
    <Icon glyph="publish" />
  </Button>
);

const DeleteComplaint = ({ review }: ReviewProps) => {
  const onSubmit = useComplaintResolveSubmit(
    review,
    ResolveAction.Delete,
  );

  return <DeleteButton onSubmit={onSubmit} />;
};

const DismissComplaint = ({ review }: ReviewProps) => {
  const onSubmit = useComplaintResolveSubmit(
    review,
    ResolveAction.Dismiss,
  );

  return <DismissButton onSubmit={onSubmit} />;
};

const Publish = ({ review }: ReviewProps) => {
  const onSubmit = useResolveSubmit(review, ResolveAction.Dismiss);

  return <DeleteButton onSubmit={onSubmit} />;
};

const Reject = ({ review }: ReviewProps) => {
  const onSubmit = useResolveSubmit(review, ResolveAction.Delete);

  return <DismissButton onSubmit={onSubmit} />;
};

export const ReviewActions = {
  Publish,
  Reject,
};

export const ResolveComplaint = {
  Delete: DeleteComplaint,
  Dismiss: DismissComplaint,
};
