import Button from '@/shared/ui/button';
import { Discipline } from '@/shared/api';
import Icon from '@/shared/ui/icon';

type DisciplineContentHeaderProps = Pick<
  Discipline,
  'name' | 'module'
>;
const DisciplineContentHeader = ({
  name,
  module,
}: DisciplineContentHeaderProps) => {
  return (
    <div className="bg-base-03 flex flex-col gap-8 p-6 rounded-3xl shadow">
      <data className="flex flex-col gap-0.5">
        <div className="flex justify-between w-full">
          <h1 className="text-subhead text-contrast">{name}</h1>
          <Button variant="icon">
            <Icon glyph="heart" />
          </Button>
        </div>
        <p className="text-body text-gray">{module.name}</p>
      </data>
      <Button size="large">Написать отзыв</Button>
    </div>
  );
};

export default DisciplineContentHeader;
