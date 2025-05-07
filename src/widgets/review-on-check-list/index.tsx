import { ContentNotFound } from '@/shared/ui/content-not-found';
import { useGetReviewOnCheck } from './api/review-on-check';
import { Spinner } from '@/shared/ui/spinner';
import { OffsetParam } from '@/features/offset-param';
import { ReviewCard } from '@/entity/review';
import { DeleteReview } from '@/features/review-actions';

const ReviewOnCheckList = () => {
  const { data, isLoading, isError } = useGetReviewOnCheck();

  if (isLoading) return <Spinner />;

  if (!data || data.length === 0 || isError) {
    return <ContentNotFound name="Дисциплины" />;
  }

  return (
    <>
      <ul className="flex flex-col gap-3">
        {data.map((el, key) => (
          <li key={key}>
            <ReviewCard
              review={el}
              actions={<DeleteReview review={el} />}
            />
          </li>
        ))}
      </ul>
      {data?.length > 0 && <OffsetParam />}
    </>
  );
};

export default ReviewOnCheckList;
