import { ContentNotFound } from '@/shared/ui/content-not-found';
import { useGetComplaints } from './api/complaints';
import { Spinner } from '@/shared/ui/spinner';
import { OffsetParam } from '@/features/offset-param';
import { ReviewCard } from '@/entity/review';
import { ReviewActionsForResolveComplaint } from '@/features/review-actions';

const ComplaintList = () => {
  const { data, isLoading, isError } = useGetComplaints();

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
              actions={
                <ReviewActionsForResolveComplaint review={el} />
              }
            />
          </li>
        ))}
      </ul>
      {data?.length > 0 && <OffsetParam />}
    </>
  );
};

export default ComplaintList;
