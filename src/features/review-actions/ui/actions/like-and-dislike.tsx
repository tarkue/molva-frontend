import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import { ReviewProps } from '../../models/review-props';
import { cn } from '@/shared/lib/utils';
import { useMemo } from 'react';
import { getColorClassByLikes } from '@/entity/review';

export const LikeAndDislike = ({ review }: ReviewProps) => {
  const like_text_color = useMemo(
    () => getColorClassByLikes(review.offensive_score),
    [review.offensive_score],
  );

  return (
    <div className="flex gap-3">
      <Button variant="icon">
        <Icon glyph="like" />
      </Button>
      <p className={cn('text-body truncate', like_text_color)}>
        {review.offensive_score}
      </p>
      <Button variant="icon">
        <Icon glyph="dislike" />
      </Button>
    </div>
  );
};
