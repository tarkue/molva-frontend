import Icon from '@/shared/ui/icon';
import { glyphs } from '@/shared/ui/icon/props';

interface Statistic {
  glyph: glyphs;
  value: number;
}

interface CardStatisticsProps {
  rating: number;
  likes_count: number;
  reviews_count: number;
}

const generateStatistic = (
  data: CardStatisticsProps,
): Statistic[] => [
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

const CardStatistics = (props: CardStatisticsProps) => {
  const statistics = generateStatistic(props);
  return (
    <ul className="flex gap-6">
      {statistics.map((el, key) => (
        <li className="flex gap-3 w-20 items-center" key={key}>
          <Icon glyph={el.glyph} size="20" />
          <span className="text-subhead">{el.value}</span>
        </li>
      ))}
    </ul>
  );
};

export { CardStatistics };
