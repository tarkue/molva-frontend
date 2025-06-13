import { DisciplineContent } from '@/entity/discipline';
import { AddReview } from '@/features/add-review';
import { DisciplineActions } from '@/features/discipline-actions';
import { OrderParam } from '@/features/order-param';
import { SortForReviewsParam } from '@/features/sort-for-reviews-param';
import { TeacherParam } from '@/features/teacher-param';
import { Spinner } from '@/shared/ui/spinner';
import Container from '@/shared/ui/сontainer';
import ReviewList from '@/widgets/review-list';
import NotFoundPage from '../not-found';
import { useGetDiscipline } from './api';
import DisciplinePageMeta from './meta';

const DisciplinePage = () => {
  const { data: discipline, isError, isLoading } = useGetDiscipline();

  if (isLoading) {
    return <Spinner />;
  }

  if (discipline === null || discipline === undefined || isError) {
    return <NotFoundPage />;
  }

  return (
    <>
      <DisciplinePageMeta discipline={discipline} />
      <Container className="flex flex-col items-center py-6">
        <DisciplineContent
          discipline={discipline}
          headerMainAction={<AddReview discipline={discipline} />}
          headerTopRightAction={
            <DisciplineActions discipline={discipline} />
          }
        />
        <div className="flex w-full justify-between items-center pt-2 pb-6 flex-col gap-3 sm:gap-0 sm:flex-row">
          <TeacherParam discipline={discipline} />
          <div className="flex gap-2 w-full sm:w-auto">
            <OrderParam />
            <SortForReviewsParam />
          </div>
        </div>
        <ReviewList />
      </Container>
    </>
  );
};

export default DisciplinePage;
