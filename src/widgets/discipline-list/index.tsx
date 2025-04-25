import { ContentNotFound } from '@/shared/ui/content-not-found';
import { useGetDisciplines } from './api/disciplines';
import { DisciplineCard } from '@/entity/discipline';
import { Spinner } from '@/shared/ui/spinner';

const DisciplineList = () => {
  const { data, isLoading, isError } = useGetDisciplines();

  if (isLoading) return <Spinner />;

  if (!data || data.length === 0 || isError) {
    return <ContentNotFound name="Дисциплины" />;
  }

  return (
    <ul className="flex flex-col gap-3">
      {data.map((el, key) => (
        <li key={key}>
          <DisciplineCard discipline={el} />
        </li>
      ))}
    </ul>
  );
};

export default DisciplineList;
