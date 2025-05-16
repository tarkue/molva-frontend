import { Spinner } from '@/shared/ui/spinner';
import { useGetUserList } from '../api/users';
import { ContentNotFound } from '@/shared/ui/content-not-found';
import { UserCard } from './card';
import { OffsetParam } from '@/features/offset-param';

export const UserUpdateListContent = () => {
  const { data, isLoading, isError } = useGetUserList();

  if (isLoading) return <Spinner />;

  if (!data || data.data.length === 0 || isError)
    return <ContentNotFound name="Преподаватели" />;

  return (
    <>
      <ul className="flex flex-col gap-6">
        {data.data.map((el, key) => (
          <li key={key}>
            <UserCard user={el} />
          </li>
        ))}
      </ul>
      {data.pagination.total_pages > 0 && (
        <OffsetParam total={data.pagination.total_pages} />
      )}
    </>
  );
};
