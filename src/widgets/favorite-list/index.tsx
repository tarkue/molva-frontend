import { ContentNotFound } from '@/shared/ui/content-not-found';
import { useGetFavorites } from './api/favorites';
import { Spinner } from '@/shared/ui/spinner';
import { DisciplineCard } from '@/entity/discipline';
import { OffsetParam } from '@/features/offset-param';

export const FavoriteList = () => {
  const { data, isLoading, isError } = useGetFavorites();

  if (isLoading) return <Spinner />;

  if (!data || data.data.length === 0 || isError) {
    return <ContentNotFound name="Избранные дисциплины" />;
  }

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
