import { ContentNotFound } from '@/shared/ui/content-not-found';
import { Spinner } from '@/shared/ui/spinner';
import { OffsetParam } from '@/features/offset-param';
import { useGetOurReview } from '../api/our-review';
import { ReviewCard } from '@/entity/review';

export const OurReviewContent = () => {
  const { data, isLoading, isError } = useGetOurReview();

  if (isLoading) return <Spinner />;

  if (!data || data.data.length === 0 || isError) {
    return <ContentNotFound name="Отзывы" />;
  }

  return (
    <>
      <ul className="flex flex-col gap-3">
        {data.data.map((el, key) => (
          <li key={key}>
            <ReviewCard review={el} />
          </li>
        ))}
      </ul>
      {data.pagination.total_pages > 0 && (
        <OffsetParam total={data.pagination.total_pages} />
      )}
    </>
  );
};
