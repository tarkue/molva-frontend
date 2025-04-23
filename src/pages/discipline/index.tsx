import { DisciplineContent } from '@/entity/discipline';
import Container from '@/shared/ui/сontainer';
import { useParams } from 'react-router';
import getDiscipline from './api';
import NotFoundPage from '../not-found';
import Reviews from '@/widgets/reviews';
import Select from '@/shared/ui/select';
import Pagination from '@/shared/ui/pagination';

const DisciplinePage = () => {
  const params = useParams();
  const discipline = getDiscipline(params.id);

  if (discipline === undefined) {
    return <NotFoundPage />;
  }

  return (
    <Container className="flex flex-col items-center py-6">
      <DisciplineContent discipline={discipline} />
      <div className="flex w-full justify-between items-center pt-2 pb-6">
        <fieldset className="w-[196px]">
          <Select placeholder="Преподаватели" />
        </fieldset>
        <fieldset className="w-[200px]">
          <Select placeholder="Сортировать по" />
        </fieldset>
      </div>
      <Reviews />
      <fieldset className="flex justify-center items-center w-full pt-6">
        <Pagination total={10} />
      </fieldset>
    </Container>
  );
};

export default DisciplinePage;
