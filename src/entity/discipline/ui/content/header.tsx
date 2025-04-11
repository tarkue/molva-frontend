import Button from '@/shared/ui/button';
import { Discipline } from '../../models/discipline';

type DisciplineContentHeaderProps = Pick<
  Discipline,
  'name' | 'module_name'
>;
const DisciplineContentHeader = ({
  name,
  module_name,
}: DisciplineContentHeaderProps) => {
  return (
    <header>
      <h1>{name}</h1>
      <p>{module_name}</p>
      <Button size="large">Написать отзыв на эту дисциплину</Button>
    </header>
  );
};

export default DisciplineContentHeader;
