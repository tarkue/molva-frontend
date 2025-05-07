import Icon from '@/shared/ui/icon';
import { ReviewProps } from '../../models/review-props';
import { useComplaintResolveSubmit } from '../../api/resolve';
import { ResolveAction } from '@/shared/api';

const Delete = ({ review }: ReviewProps) => {
  const onSubmit = useComplaintResolveSubmit(
    review,
    ResolveAction.Delete,
  );

  return <Icon glyph="trash" stroke="red" onClick={onSubmit} />;
};

const Dismiss = ({ review }: ReviewProps) => {
  const onSubmit = useComplaintResolveSubmit(
    review,
    ResolveAction.Dismiss,
  );

  return <Icon glyph="check" onClick={onSubmit} />;
};

export const ResolveComplaint = { Delete, Dismiss };
