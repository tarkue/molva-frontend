import Icon from '@/shared/ui/icon';
import { useComplainSubmit } from '../../api/complain';
import { ReviewProps } from '../../models/review-props';
import Button from '@/shared/ui/button';
import { useOpenConfirmRemoveForm } from '@/features/open-confirm-remove';

export const Complain = ({ review }: ReviewProps) => {
  const onSubmit = useComplainSubmit(review);
  const open = useOpenConfirmRemoveForm({
    onSubmit,
    type: 'COMPLAIN',
    text: 'Вы уверены, что хотите пожаловаться на данный отзыв? Это действие будет невозможно отменить.',
  });

  return (
    <Button onClick={open} variant="icon">
      <Icon glyph="report" stroke="red" />
    </Button>
  );
};
