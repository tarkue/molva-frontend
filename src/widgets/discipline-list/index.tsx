import { Discipline, DisciplineCard } from '@/entity/discipline';

const disciplines: Discipline[] = [
  {
    id: 'ba25ddd5-cfc9-496b-9913-2fc1eebc7472',
    name: 'Стратегии формирования навыков',
    module_name: 'Операционные системы',
    rating: 3.02,
    reviews_count: 354,
    likes_count: 25,
  },
  {
    id: 'ba25ddd5-cfc9-496b-9913-2fc1eebc7472',
    name: 'Математическая статистика и теория вероятностей (Белоусова)',
    module_name: 'Математическая статистика и теория вероятностей',
    rating: 3.03,
    reviews_count: 2,
    likes_count: 55,
  },
  {
    id: 'ba25ddd5-cfc9-496b-9913-2fc1eebc7472',
    name: 'Стратегии формирования навыков',
    module_name: 'Операционные системы',
    rating: 2.51,
    reviews_count: 231,
    likes_count: 1,
  },
  {
    id: 'ba25ddd5-cfc9-496b-9913-2fc1eebc7472',
    name: 'Стратегии формирования навыков',
    module_name: 'Операционные системы',
    rating: 3.02,
    reviews_count: 354,
    likes_count: 25,
  },
  {
    id: 'ba25ddd5-cfc9-496b-9913-2fc1eebc7472',
    name: 'Математическая статистика и теория вероятностей (Белоусова)',
    module_name: 'Математическая статистика и теория вероятностей',
    rating: 3.03,
    reviews_count: 2,
    likes_count: 55,
  },
  {
    id: 'ba25ddd5-cfc9-496b-9913-2fc1eebc7472',
    name: 'Стратегии формирования навыков',
    module_name: 'Операционные системы',
    rating: 2.51,
    reviews_count: 231,
    likes_count: 1,
  },
  {
    id: 'ba25ddd5-cfc9-496b-9913-2fc1eebc7472',
    name: 'Стратегии формирования навыков',
    module_name: 'Операционные системы',
    rating: 3.02,
    reviews_count: 354,
    likes_count: 25,
  },
  {
    id: 'ba25ddd5-cfc9-496b-9913-2fc1eebc7472',
    name: 'Математическая статистика и теория вероятностей (Белоусова)',
    module_name: 'Математическая статистика и теория вероятностей',
    rating: 3.03,
    reviews_count: 2,
    likes_count: 55,
  },
  {
    id: 'ba25ddd5-cfc9-496b-9913-2fc1eebc7472',
    name: 'Стратегии формирования навыков',
    module_name: 'Операционные системы',
    rating: 2.51,
    reviews_count: 231,
    likes_count: 1,
  },
];
const DisciplineList = () => {
  return (
    <ul className="flex flex-col gap-3">
      {disciplines.map((el, key) => (
        <li key={key}>
          <DisciplineCard discipline={el} />
        </li>
      ))}
    </ul>
  );
};

export { DisciplineList };
