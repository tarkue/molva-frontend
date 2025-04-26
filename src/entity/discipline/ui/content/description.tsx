import Link from '@/shared/ui/link';
import { Discipline } from '@/shared/api';

type DisciplineContentDescriptionProps = Pick<
  Discipline,
  'description' | 'modeus_link' | 'presentation_link' | 'format'
>;

const DisciplineContentDescription = (
  props: DisciplineContentDescriptionProps,
) => {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-3xl bg-base-03">
      <p className="text-body text-contrast w-full">
        {props.description}
      </p>
      <p className="text-body text-contrast">
        Формат: {props.format}
      </p>
      <ul className="flex justify-between items-center">
        <li>
          <Link href={props.presentation_link} target="_blank">
            Посмотреть презентацию модуля
          </Link>
        </li>
        <li>
          <Link href={props.modeus_link} target="_blank">
            Посмотреть расписание модуля в Modeus
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DisciplineContentDescription;
