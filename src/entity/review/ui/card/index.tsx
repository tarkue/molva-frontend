import { Stars } from '@/shared/ui/stars/stars';
import { Review } from '@/shared/api';
import { getTeacherNames } from './utils/names';
import { useMemo } from 'react';
import { reviewCardVariants } from './variant';
import { VariantProps } from 'class-variance-authority';
import { getFullName } from '@/entity/user';
import { getDateTime } from './utils/datetime';

interface ReviewCardProps
  extends VariantProps<typeof reviewCardVariants> {
  review: Review;
  actions?: React.ReactNode;
}

const ReviewCard = ({ review, actions, type }: ReviewCardProps) => {
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

  return (
    <article className={reviewCardVariants({ type })}>
      <div className="flex items-center justify-between w-full flex-col-reverse sm:flex-row">
        <p className="text-subhead text-contrast">
          {review.author ? getFullName(review.author) : 'Аноним'}
        </p>
        <Stars value={review.grade} />
      </div>
      <data className="flex flex-col gap-3">
        <p className="text-body">{review.comment}</p>
        <div className="flex items-flex-start sm:items-center w-full flex-col sm:flex-row justify-start sm:justify-between gap-2 sm:gap-0">
          <span className="text-caption text-gray truncate">
            {teacherNames}
          </span>
          <span className="text-caption text-gray truncate">
            {getDateTime(review.created_at)}
          </span>
        </div>
        <span className="h-[1px] bg-gray w-full"></span>
        <div className="flex items-center justify-between w-full">
          {actions}
        </div>
      </data>
    </article>
  );
};

export { ReviewCard };
