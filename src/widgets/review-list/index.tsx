import { ReviewCard } from '@/entity/review';
import { useGetDisciplineReviews } from './api/reviews';
import { Spinner } from '@/shared/ui/spinner';
import { ContentNotFound } from '@/shared/ui/content-not-found';
import { OffsetParam } from '@/features/offset-param';
import { ReviewActions } from '@/features/review-actions';

const ReviewList = () => {
  const { data, isLoading, isError } = useGetDisciplineReviews();

  if (isLoading) return <Spinner />;

  if (!data || data.data.length === 0 || isError)
    return <ContentNotFound name="Отзывы" />;

  return (
    <>
      <ul className="flex flex-col gap-6">
        {data.data.map((el, key) => (
          <li key={key}>
            <ReviewCard
              review={el}
              actions={<ReviewActions review={el} />}
            />
          </li>
        ))}
      </ul>
      {data.pagination.total_pages > 0 && (
        <OffsetParam total={data.pagination.total_pages} />
      )}
    </>
  );
};

export default ReviewList;
