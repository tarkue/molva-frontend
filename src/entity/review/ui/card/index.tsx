import { Stars } from '@/shared/ui/stars/stars';
import { Review } from '@/shared/api';
import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import { cn } from '@/shared/lib/utils';
import { getColorClassByLikes } from './utils/color';
import { getTeacherNames } from './utils/names';
import { useMemo } from 'react';
import { reviewCardVariants } from './variant';
import { VariantProps } from 'class-variance-authority';
import { getFullName } from '@/entity/user';

interface ReviewCardProps
  extends VariantProps<typeof reviewCardVariants> {
  review: Review;
}

const ReviewCard = ({ review, type }: ReviewCardProps) => {
  const teacherNames = useMemo(
    () =>
      review.lector && review.practic
        ? getTeacherNames([
            getFullName(review.lector),
            getFullName(review.practic),
          ])
        : '',
    [review.lector, review.practic],
  );

  const like_text_color = useMemo(
    () => getColorClassByLikes(review.offensive_score),
    [review.offensive_score],
  );

  return (
    <article className={reviewCardVariants({ type })}>
      <div className="flex items-center justify-between w-full md:flex-col-reverse">
        <p className="text-subhead text-contrast">{review.comment}</p>
        <Stars value={review.grade} />
      </div>
      <data className="flex flex-col gap-3">
        <p className="text-body">{review.comment}</p>
        <div className="flex justify-between items-center w-full md:flex-col md:justify-start md:gap-2">
          <span className="text-caption text-gray">
            {teacherNames}
          </span>
          <span className="text-caption text-gray">
            {review.created_at}
          </span>
        </div>
        <span className="h-[1px] bg-gray w-full"></span>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3">
            <Button variant="icon">
              <Icon glyph="like" />
            </Button>
            <p className={cn('text-body', like_text_color)}>
              {review.offensive_score}
            </p>
            <Button variant="icon">
              <Icon glyph="dislike" />
            </Button>
          </div>
          <Button variant="icon">
            <Icon glyph="trash" stroke="red" />
          </Button>
        </div>
      </data>
    </article>
  );
};

export { ReviewCard };
