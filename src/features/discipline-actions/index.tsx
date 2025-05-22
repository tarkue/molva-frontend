import { Discipline } from '@/shared/api';
import { DeleteDiscipline } from '../delete-discipline';
import { UpdateDiscipline } from '../update-discipline';
import { AddToFavorites } from '../toggle-favorite';
import { useUser } from '@/entity/user';

const DisciplineActions = ({
  discipline,
}: {
  discipline: Discipline;
}) => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex gap-3 flex-col sm:flex-row justify-center sm:justfify-end">
      {user.role == 'USER' ? (
        <AddToFavorites discipline={discipline} />
      ) : (
        <>
          <UpdateDiscipline discipline={discipline} />
          <DeleteDiscipline discipline={discipline} />
        </>
      )}
    </div>
  );
};

export { DisciplineActions };
