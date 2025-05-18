import Icon from '@/shared/ui/icon';
import {
  generateStatistic,
  StatisticProps,
} from '../../models/statistic';

const CardStatistics = (props: StatisticProps) => {
  const statistics = generateStatistic(props);
  return (
    <ul className="flex gap-6">
      {statistics.map((el, key) => (
        <li
          className="flex gap-3 max-w-20 w-full items-center"
          key={key}
        >
          <Icon glyph={el.glyph} size="20" />
          <span className="text-subhead">{el.value}</span>
        </li>
      ))}
    </ul>
  );
};

export { CardStatistics };
