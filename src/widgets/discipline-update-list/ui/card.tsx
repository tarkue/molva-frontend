import { DisciplineCard } from '@/entity/discipline';
import { DeleteDiscipline } from '@/features/delete-discipline';
import { UpdateDiscipline } from '@/features/update-discipline';
import { Discipline } from '@/shared/api';

export const DisciplineUpdateCard = ({
  discipline,
}: {
  discipline: Discipline;
}) => (
  <div className="flex gap-3 sm:gap-6 w-full">
    <div className="w-[calc(100%-30px)] sm:w-[calc(100%-96px)]">
      <DisciplineCard discipline={discipline} />
    </div>
    <div className="flex gap-3 flex-col sm:flex-row justify-center sm:justfify-end">
      <UpdateDiscipline discipline={discipline} />
      <DeleteDiscipline discipline={discipline} />
    </div>
  </div>
);
