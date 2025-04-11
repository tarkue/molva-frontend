import {
  generateStatistic,
  StatisticProps,
} from '../../models/statistic';

const DisciplineContentStatistics = (props: StatisticProps) => {
  const statistics = generateStatistic(props);
  return (
    <ul>
      {statistics.map((el, key) => (
        <li key={key}>{el.value}</li>
      ))}
    </ul>
  );
};

export default DisciplineContentStatistics;
