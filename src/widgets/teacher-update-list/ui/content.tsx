import { Spinner } from '@/shared/ui/spinner';
import { useGetTeacherList } from '../api/teachers';
import { ContentNotFound } from '@/shared/ui/content-not-found';
import { TeacherUpdateCard } from './card';
import { OffsetParam } from '@/features/offset-param';

export const TeacherUpdateListContent = () => {
  const { data, isLoading, isError } = useGetTeacherList();

  if (isLoading) return <Spinner />;

  if (!data || data.data.length === 0 || isError)
    return <ContentNotFound name="Преподаватели" />;

  return (
    <>
      <ul className="flex flex-col gap-6">
        {data.data.map((el, key) => (
          <li key={key}>
            <TeacherUpdateCard teacher={el} />
          </li>
        ))}
      </ul>
      {data.pagination.total_pages > 0 && (
        <OffsetParam total={data.pagination.total_pages} />
      )}
    </>
  );
};
