import { DisciplineContent } from '@/entity/discipline';
import Container from '@/shared/ui/сontainer';
import NotFoundPage from '../not-found';
import ReviewList from '@/widgets/review-list';
import { Select } from '@/shared/ui/select';
import Pagination from '@/shared/ui/pagination';
import DisciplinePageMeta from './meta';
import { useGetDiscipline } from './api';
import { Spinner } from '@/shared/ui/spinner';
import { AddToFavorites } from '@/features/toggle-favorite';
import { AddReview } from '@/features/add-review';

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
        <div className="flex w-full justify-between items-center pt-2 pb-6">
          <fieldset className="w-[196px]">
            <Select placeholder="Преподаватели" />
          </fieldset>
          <fieldset className="w-[200px]">
            <Select placeholder="Сортировать по" />
          </fieldset>
        </div>
        <ReviewList />
        <fieldset className="flex justify-center items-center w-full pt-6">
          <Pagination total={10} />
        </fieldset>
      </Container>
    </>
  );
};

export default DisciplinePage;
