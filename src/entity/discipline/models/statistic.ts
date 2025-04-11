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
    glyph: 'star',
    value: data.rating,
  },
  {
    glyph: 'like',
    value: data.likes_count,
  },
  {
    glyph: 'review',
    value: data.reviews_count,
  },
];

export { generateStatistic };
