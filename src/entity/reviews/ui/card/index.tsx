import Stars from '@/shared/ui/stars';
import { Review } from '../../models/review';
import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import { cn } from '@/shared/lib/utils';
import { getColorClassByLikes } from './utils/color';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const teachers = [
    review.lector_name || '',
    review.practic_name || '',
  ].join(', ');
  const like_text_color = getColorClassByLikes(review.likes_count);

  return (
    <article>
      <div>
        <p>{review.user_name}</p>
        <Stars value={review.grade} />
      </div>
      <data>
        <p>{review.comment}</p>
        <div>
          <span>{teachers}</span>
          <span>{review.created_at}</span>
        </div>
        <span className="h-[1px] bg-gray w-full"></span>
        <div>
          <div>
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
