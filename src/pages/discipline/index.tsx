import { DisciplineContent } from '@/entity/discipline';
import Container from '@/shared/ui/сontainer';
import NotFoundPage from '../not-found';
import ReviewList from '@/widgets/review-list';
import DisciplinePageMeta from './meta';
import { useGetDiscipline } from './api';
import { Spinner } from '@/shared/ui/spinner';
import { AddToFavorites } from '@/features/toggle-favorite';
import { AddReview } from '@/features/add-review';
import { TeacherParam } from '@/features/teacher-param';
import { SortForDisciplineParam } from '@/features/sort-for-discipline-param';
import { OrderParam } from '@/features/order-param';

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
      <DisciplinePageMeta name={discipline.name} />
      <Container className="flex flex-col items-center py-6">
        <DisciplineContent
          discipline={discipline}
          headerMainAction={<AddReview discipline={discipline} />}
          headerTopRightAction={
            <AddToFavorites discipline={discipline} />
          }
        />
        <div className="flex w-full justify-between items-center pt-2 pb-6 flex-col gap-3 sm:gap-0 sm:flex-row">
          <TeacherParam discipline={discipline} />
          <div className="flex gap-2 w-full sm:w-auto">
            <OrderParam />
            <SortForDisciplineParam />
          </div>
        </div>
        <ReviewList />
      </Container>
    </>
  );
};

export default DisciplinePage;
