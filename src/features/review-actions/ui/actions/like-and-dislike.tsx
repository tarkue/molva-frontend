import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import { ReviewProps } from '../../models/review-props';
import { cn } from '@/shared/lib/utils';
import { useMemo, useState } from 'react';
import { getColorClassByLikes } from '@/entity/review';
import {
  dislikeSubmit,
  likeSubmit,
} from '../../api/like-and-dislike';

export const LikeAndDislike = ({ review }: ReviewProps) => {
  const [userVote, setUserVote] = useState<
    'like' | 'dislike' | undefined
  >(review.user_vote);
  const [totalRating, setTotalRating] = useState(review.total_rating);
  const like_text_color = useMemo(
    () => getColorClassByLikes(totalRating),
    [totalRating],
  );

  return (
    <div className="flex gap-3">
      <Button
        variant="icon"
        disabled={userVote === 'like'}
        onClick={likeSubmit(review, setUserVote, setTotalRating)}
      >
        <Icon glyph="like" />
      </Button>
      <p className={cn('text-body truncate', like_text_color)}>
        {totalRating}
      </p>
      <Button
        variant="icon"
        disabled={userVote === 'dislike'}
        onClick={dislikeSubmit(review, setUserVote, setTotalRating)}
      >
        <Icon glyph="dislike" />
      </Button>
    </div>
  );
};
