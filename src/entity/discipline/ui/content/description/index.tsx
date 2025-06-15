import { Discipline } from '@/shared/api';
import { DisciplineContentDescriptionLinks } from './links';

type DisciplineContentDescriptionProps = Pick<
  Discipline,
  'description' | 'modeus_link' | 'presentation_link' | 'format'
>;

const DisciplineContentDescription = (
  props: DisciplineContentDescriptionProps,
) => (
  <div className="flex flex-col gap-4 p-6 rounded-3xl bg-base-03 shadow">
    <p className="text-body text-contrast w-full">
      {props.description}
    </p>
    <p className="text-body text-contrast">Формат: {props.format}</p>
    <DisciplineContentDescriptionLinks
      modeus_link={props.modeus_link}
      presentation_link={props.presentation_link}
    />
  </div>
);
export default DisciplineContentDescription;
