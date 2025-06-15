import { Discipline } from '@/shared/api';

export type DisciplineContentDescriptionLinksProps = Pick<
  Discipline,
  'modeus_link' | 'presentation_link'
>;
