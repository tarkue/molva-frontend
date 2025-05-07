import Icon from '@/shared/ui/icon';
import { useComplainSubmit } from '../../api/complain';
import { ReviewProps } from '../../models/review-props';

export const Complain = ({ review }: ReviewProps) => {
  const onSubmit = useComplainSubmit(review);

  return <Icon glyph="report" stroke="red" onClick={onSubmit} />;
};
