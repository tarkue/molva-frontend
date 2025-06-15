import { DisciplineContentDescriptionLinksProps } from './links-props';

export const getLinks = (
  props: DisciplineContentDescriptionLinksProps,
) =>
  [
    {
      text: 'Посмотреть презентацию модуля',
      href: props.presentation_link,
    },
    {
      text: 'Посмотреть расписание модуля в Modeus',
      href: props.modeus_link,
    },
  ].filter((el) => el.href !== null && el.href !== '');
