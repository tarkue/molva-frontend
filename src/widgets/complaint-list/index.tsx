import { ContentNotFound } from '@/shared/ui/content-not-found';
import { useGetComplaints } from './api/complaints';
import { Spinner } from '@/shared/ui/spinner';
import { OffsetParam } from '@/features/offset-param';
import { ReviewCard } from '@/entity/review';
import { ReviewActionsForResolveComplaint } from '@/features/review-actions';

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
              type="rejected"
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
