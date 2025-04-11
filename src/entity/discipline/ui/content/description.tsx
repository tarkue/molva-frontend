import { Discipline } from '../../models/discipline';

type DisciplineContentDescriptionProps = Pick<
  Discipline,
  'description' | 'modeus_link' | 'presentation_link' | 'format'
>;

const DisciplineContentDescription = (
  props: DisciplineContentDescriptionProps,
) => {
  return (
    <footer>
      <p>{props.description}</p>
      <p>Формат: {props.format}</p>
      <ul>
        <li>
          <a href={props.presentation_link} target="_blank">
            Посмотреть презентацию модуля
          </a>
        </li>
        <li>
          <a href={props.modeus_link} target="_blank">
            Посмотреть расписание модуля в Modeus
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default DisciplineContentDescription;
