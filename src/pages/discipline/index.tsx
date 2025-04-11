import { DisciplineContent } from '@/entity/discipline';
import Container from '@/shared/ui/сontainer';
import { useParams } from 'react-router';
import getDiscipline from './api';
import NotFoundPage from '../not-found';

const Discipline = () => {
  const params = useParams();

  const discipline = getDiscipline(params.disciplineId);

  if (discipline === undefined) {
    return <NotFoundPage />;
  }

  return (
    <Container className="flex flex-col items-center justify-center">
      <DisciplineContent discipline={discipline} />
    </Container>
  );
};

export default Discipline;
