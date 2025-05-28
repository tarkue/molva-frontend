import { ReviewCard } from '@/entity/review';
import { OffsetParam } from '@/features/offset-param';
import { ReviewActionsForResolveComplaint } from '@/features/review-actions';
import { ContentNotFound } from '@/shared/ui/content-not-found';
import { Spinner } from '@/shared/ui/spinner';
import { useGetComplaints } from './api/complaints';

const ComplaintList = () => {
  const { data, isLoading, isError } = useGetComplaints();

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
              actions={
                <ReviewActionsForResolveComplaint review={el} />
              }
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

export default ComplaintList;
