import { Format } from './format';

export interface Discipline {
  id: string;
  name: string;
  description: string;
  format: Format;
  presentation_link: string;
  modeus_link: string;
  module_name: string;
  rating: number;
  reviews_count: number;
  likes_count: number;
}
