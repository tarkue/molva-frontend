import { zip } from '@/shared/lib/array-utils';
import Icon from '@/shared/ui/icon';
import {
  generateStatistic,
  StatisticProps,
  statisticTitles,
} from '../../models/statistic';

const DisciplineContentStatistics = (props: StatisticProps) => {
  const statistics = zip(statisticTitles, generateStatistic(props));

  return (
    <ul className="flex gap-3 lg:gap-5 w-full flex-col md:flex-row">
      {statistics.map(([title, el], key) => (
        <li
          key={key}
          className="flex px-6 py-5 rounded-3xl bg-base-03 shadow w-full justify-between items-center"
        >
          <span className="text-body text-contrast">
            {title}: {el.value}
          </span>
          <Icon glyph={el.glyph} />
        </li>
      ))}
    </ul>
  );
};

export default DisciplineContentStatistics;
