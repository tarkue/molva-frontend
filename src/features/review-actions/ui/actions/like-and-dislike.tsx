import { getColorClassByLikes } from '@/entity/review';
import { useUser } from '@/entity/user';
import { cn } from '@/shared/lib/utils';
import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import { useMemo, useState } from 'react';
import {
  dislikeSubmit,
  likeSubmit,
} from '../../api/like-and-dislike';
import { ReviewProps } from '../../models/review-props';
import { showToastIfUserNotAuthorized } from '../libs/show-toast';
import { isDislikeDisabled, isLikeDisabled } from '../libs/utils';

export const LikeAndDislike = ({ review }: ReviewProps) => {
  const { isAuthorized } = useUser();
  const vote = useState<'like' | 'dislike' | undefined>(
    review.user_vote,
  );
  const [totalRating, setTotalRating] = useState(review.total_rating);
  const like_text_color = useMemo(
    () => getColorClassByLikes(totalRating),
    [totalRating],
  );

  return (
    <div
      className="flex gap-3"
      onClick={showToastIfUserNotAuthorized(isAuthorized)}
    >
      <Button
        variant="icon"
        disabled={isLikeDisabled(vote, isAuthorized)}
        onClick={likeSubmit(review, vote, setTotalRating)}
      >
        <Icon glyph="like" />
      </Button>
      <p className={cn('text-body truncate', like_text_color)}>
        {totalRating}
      </p>
      <Button
        variant="icon"
        disabled={isDislikeDisabled(vote, isAuthorized)}
        onClick={dislikeSubmit(review, vote, setTotalRating)}
      >
        <Icon glyph="dislike" />
      </Button>
    </div>
  );
};
