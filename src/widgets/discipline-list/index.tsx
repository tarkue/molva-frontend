import { ContentNotFound } from '@/shared/ui/content-not-found';
import { useGetDisciplines } from './api/disciplines';
import { DisciplineCard } from '@/entity/discipline';
import { Spinner } from '@/shared/ui/spinner';
import { OffsetParam } from '@/features/offset-param';

const DisciplineList = () => {
  const { data, isLoading, isError } = useGetDisciplines();

  if (isLoading) return <Spinner />;

  if (!data || data.data.length === 0 || isError) {
    return <ContentNotFound name="Дисциплины" />;
  }
  console.log(data);

  return (
    <>
      <ul className="flex flex-col gap-3">
        {data.data.map((el, key) => (
          <li key={key}>
            <DisciplineCard discipline={el} />
          </li>
        ))}
      </ul>
      {data.pagination.total_pages > 0 && (
        <OffsetParam total={data.pagination.total_pages} />
      )}
    </>
  );
};

export default DisciplineList;
