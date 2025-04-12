import { ReviewCard } from '@/entity/reviews';
import { Review } from '@/entity/reviews/models/review';

const reviews: Review[] = [
  {
    id: '1',
    descipline_id: '1',
    created_at: '2023-01-01',
    comment: 'comment',
    rating: 4,
    grade: 5,
    practic_name: 'Петров Петр Петрович',
    user_id: '1',
    user_name: 'user',
    likes_count: 0,
  },
  {
    id: '2',
    descipline_id: '1',
    created_at: '2023-01-01',
    comment:
      'Курс охватывает основные концепции программирования, такие как переменные, типы данных, операторы, структуры управления (условные операторы и циклы), функции и массивы. Я был приятно удивлён тем, как структурировано было содержание. Каждая тема логически вытекала из предыдущей, что позволяло постепенно углубляться в материал. ',
    rating: 4,
    grade: 3,
    user_id: '1',
    lector_name: 'Иванов Иван Иванович',
    user_name: 'user',
    likes_count: 100,
  },
  {
    id: '3',
    descipline_id: '1',
    created_at: '2023-01-01',
    comment:
      'Курс охватывает основные концепции программирования, такие как переменные, типы данных, операторы, структуры управления (условные операторы и циклы), функции и массивы. Я был приятно удивлён тем, как структурировано было содержание. Каждая тема логически вытекала из предыдущей, что позволяло постепенно углубляться в материал. ',
    rating: 4,
    grade: 1,
    user_id: '1',
    user_name: 'Смирнов Евгений Сергеевич',
    lector_name: 'Иванов Иван Иванович',
    practic_name: 'Петров Петр Петрович',
    likes_count: -200,
  },
];

const Reviews = () => {
  return (
    <ul className="flex flex-col gap-6">
      {reviews.map((el, key) => (
        <li>
          <ReviewCard key={key} review={el} />{' '}
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
