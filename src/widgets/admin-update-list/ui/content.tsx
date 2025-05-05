import { Spinner } from '@/shared/ui/spinner';
import { useGetAdminList } from '../api/admins';
import { ContentNotFound } from '@/shared/ui/content-not-found';
import { AdminUpdateCard } from './card';

export const AdminUpdateListContent = () => {
  const { data, isLoading, isError } = useGetAdminList();

  if (isLoading) return <Spinner />;

  if (!data || data.length === 0 || isError)
    return <ContentNotFound name="Преподаватели" />;

  return (
    <ul className="flex flex-col gap-6">
      {data.map((el, key) => (
        <li key={key}>
          <AdminUpdateCard admin={el} />
        </li>
      ))}
    </ul>
  );
};
