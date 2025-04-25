export enum Format {
  offline = 'оффлайн',
  online = 'онлайн',
  mixed = 'смешанный',
}

export interface OnlyDisciplineId {
  discipline_id: string;
}

export interface Discipline extends OnlyDisciplineId {
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

export type CreateDisciplineDTO = Omit<
  Discipline,
  'discipline_id' | 'rating' | 'reviews_count' | 'likes_count'
>;

export type UpdateDisciplineDTO = Omit<
  Discipline,
  'discipline_id' | 'rating' | 'reviews_count' | 'likes_count'
>;
