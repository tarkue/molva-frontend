import { Format } from '..';
import { Module } from './module.dto';
import { OnlyId } from './shared.dto';

export interface Discipline extends OnlyId {
  name: string;
  description: string;
  format: Format;
  presentation_link: string;
  modeus_link: string;
  module: Omit<Module, 'created_at'>;

  avg_rating: number;
  review_count: number;
  favorites_count: number;
}

export type CreateDisciplineDTO = Omit<
  Discipline,
  'id' | 'avg_rating' | 'review_count' | 'favorites_count' | 'module'
> & {
  module_id: string;
};

export type UpdateDisciplineDTO = OnlyId &
  Omit<
    Partial<Discipline>,
    | 'discipline_id'
    | 'avg_rating'
    | 'review_count'
    | 'favorites_count'
    | 'module'
  >;
export { Format };
