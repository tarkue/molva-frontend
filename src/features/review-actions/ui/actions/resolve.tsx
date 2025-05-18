import Icon from '@/shared/ui/icon';
import { ReviewProps } from '../../models/review-props';
import { useComplaintResolveSubmit } from '../../api/resolve';
import { ResolveAction } from '@/shared/api';
import Button from '@/shared/ui/button';

const Delete = ({ review }: ReviewProps) => {
  const onSubmit = useComplaintResolveSubmit(
    review,
    ResolveAction.Delete,
  );

  return (
    <Button variant="icon" onClick={onSubmit}>
      <Icon glyph="trash" stroke="red" />
    </Button>
  );
};

const Dismiss = ({ review }: ReviewProps) => {
  const onSubmit = useComplaintResolveSubmit(
    review,
    ResolveAction.Dismiss,
  );

  return (
    <Button variant="icon" onClick={onSubmit}>
      <Icon glyph="check" stroke="red" />
    </Button>
  );
};

export const ResolveComplaint = { Delete, Dismiss };
