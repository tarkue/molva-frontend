import { DisciplineCard } from '@/entity/discipline';
import { DisciplineActions } from '@/features/discipline-actions';
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
    <DisciplineActions discipline={discipline} />
  </div>
);
