import { ReviewCard } from '@/entity/review';
import { OffsetParam } from '@/features/offset-param';
import { ReviewActionsForResolve } from '@/features/review-actions';
import { ContentNotFound } from '@/shared/ui/content-not-found';
import { Spinner } from '@/shared/ui/spinner';
import { useGetReviewOnCheck } from './api/review-on-check';

const ReviewOnCheckList = () => {
  const { data, isLoading, isError } = useGetReviewOnCheck();

  if (isLoading) return <Spinner />;

  if (!data || data.data.length === 0 || isError) {
    return <ContentNotFound name="Отзывы" />;
  }

  return (
    <>
      <ul className="flex flex-col gap-3">
        {data.data.map((el, key) => (
          <li key={key}>
            <ReviewCard
              review={el}
              actions={<ReviewActionsForResolve review={el} />}
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

export default ReviewOnCheckList;
