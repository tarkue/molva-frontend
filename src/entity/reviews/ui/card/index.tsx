import Stars from '@/shared/ui/stars';
import { Review } from '../../models/review';
import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import { cn } from '@/shared/lib/utils';
import { getColorClassByLikes } from './utils/color';
import { getTeacherNames } from './utils/names';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const teacherNames = getTeacherNames([
    review.lector_name,
    review.practic_name,
  ]);
  const like_text_color = getColorClassByLikes(review.likes_count);

  return (
    <article className="flex flex-col gap-2.5 p-6 rounded-3xl bg-base-03">
      <div className="flex items-center justify-between w-full">
        <p className="text-subhead text-contrast">
          {review.user_name}
        </p>
        <Stars value={review.grade} />
      </div>
      <data className="flex flex-col gap-3">
        <p className="text-body">{review.comment}</p>
        <div className="flex justify-between items-center w-full">
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
              {review.likes_count}
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
