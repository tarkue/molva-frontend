import { ContentNotFound } from '@/shared/ui/content-not-found';
import { useGetDisciplines } from '../api/disciplines';
import { Spinner } from '@/shared/ui/spinner';
import { OffsetParam } from '@/features/offset-param';
import { DisciplineUpdateCard } from './card';

export const DisciplineUpdateListContent = () => {
  const { data, isLoading, isError } = useGetDisciplines();

  if (isLoading) return <Spinner />;

  if (!data || data.length === 0 || isError) {
    return <ContentNotFound name="Дисциплины" />;
  }

  return (
    <>
      <ul className="flex flex-col gap-3">
        {data.map((el, key) => (
          <li key={key}>
            <DisciplineUpdateCard discipline={el} />
          </li>
        ))}
      </ul>
      {data?.length > 0 && <OffsetParam />}
    </>
  );
};
