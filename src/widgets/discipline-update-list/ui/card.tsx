import { DisciplineCard } from '@/entity/discipline';
import { DeleteDiscipline } from '@/features/delete-discipline';
import { UpdateDiscipline } from '@/features/update-discipline';
import { Discipline } from '@/shared/api';

export const DisciplineUpdateCard = ({
  discipline,
}: {
  discipline: Discipline;
}) => (
  <div className="flex gap-6">
    <DisciplineCard discipline={discipline} />
    <span className="flex gap-3">
      <UpdateDiscipline discipline={discipline} />
      <DeleteDiscipline discipline={discipline} />
    </span>
  </div>
);
