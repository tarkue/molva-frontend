import { glyphs } from '@/shared/ui/icon/props';

export interface Statistic {
  glyph: glyphs;
  value: number;
}

export interface StatisticProps {
  rating: number;
  likes_count: number;
  reviews_count: number;
}

const generateStatistic = (data: StatisticProps): Statistic[] => [
  {
    glyph: 'like',
    value: data.likes_count,
  },
  {
    glyph: 'star',
    value: data.rating,
  },
  {
    glyph: 'review',
    value: data.reviews_count,
  },
];

const statisticTitles = [
  'Добавили в избранное',
  'Средняя оценка',
  'Оставили отзывы',
];

export { generateStatistic, statisticTitles };
