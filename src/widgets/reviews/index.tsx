import { ReviewCard } from '@/entity/reviews';
import { useGetDisciplineReviews } from './api/reviews';
import { Spinner } from '@/shared/ui/Spinner';

const Reviews = () => {
  const { reviews, isLoading } = useGetDisciplineReviews();

  if (isLoading) return <Spinner />;

  return (
    <ul className="flex flex-col gap-6">
      {reviews.map((el, key) => (
        <li key={key}>
          <ReviewCard review={el} />
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
