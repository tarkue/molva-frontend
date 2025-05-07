import { ReviewCard } from '@/entity/review';
import { useGetDisciplineReviews } from './api/reviews';
import { Spinner } from '@/shared/ui/spinner';
import { ContentNotFound } from '@/shared/ui/content-not-found';
import { OffsetParam } from '@/features/offset-param';

const ReviewList = () => {
  const { data, isLoading, isError } = useGetDisciplineReviews();

  if (isLoading) return <Spinner />;

  if (!data || data.length === 0 || isError)
    return <ContentNotFound name="Отзывы" />;

  return (
    <>
      <ul className="flex flex-col gap-6">
        {data.map((el, key) => (
          <li key={key}>
            <ReviewCard review={el} />
          </li>
        ))}
      </ul>
      {data?.length > 0 && <OffsetParam />}
    </>
  );
};

export default ReviewList;
