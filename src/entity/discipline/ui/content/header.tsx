import { Discipline } from '@/shared/api';

type DisciplineContentHeaderProps = Pick<
  Discipline,
  'name' | 'module'
> & {
  topRightAction?: React.ReactNode;
  mainAction?: React.ReactNode;
};
const DisciplineContentHeader = ({
  name,
  module,
  topRightAction,
  mainAction,
}: DisciplineContentHeaderProps) => {
  return (
    <div className="bg-base-03 flex flex-col gap-8 p-6 rounded-3xl shadow">
      <data className="flex flex-col gap-0.5">
        <div className="flex justify-between w-full">
          <h1 className="text-subhead text-contrast">{name}</h1>
          {topRightAction}
        </div>
        <p className="text-body text-gray">{module.name}</p>
      </data>
      {mainAction}
    </div>
  );
};

export default DisciplineContentHeader;
