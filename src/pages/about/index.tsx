import Container from '@/shared/ui/сontainer';

export const AboutPage = () => (
  <Container className="flex justify-between items-center">
    <img
      src="/about.webp"
      alt="molva icon"
      className="w-full h-auto max-w-[420px] max-h-[336px] object-cover"
    />
    <data className="flex flex-col gap-3 w-[630px]">
      <h1 className="text-h1 text-contrast">О нас</h1>
      <span className="text-body text-contrast">
        <p>
          Мы — команда «Девять кругов не надо», и мы создаем
          платформу, где студенты, обучающиеся по индивидуальным
          образовательным траекториям могут делиться честными отзывами
          о предметах. Наша цель — помочь каждому сделать осознанный
          выбор дисциплин, чтобы учебный процесс стал прозрачнее,
          полезнее и интереснее.
        </p>
        <br />
        <br />
        <strong>Кто за этим стоит?</strong>
        <br />
        <ol className="list-decimal ml-5">
          <li>Евгений Смирнов, фронтенд-разработчик</li>
          <li>Виктор Петров, бэкенд-разработчик</li>
          <li>Анна Калугина, аналитик </li> 
          <li>Варвара Частухина, дизайнер</li>
        </ol>
        <br />
        <strong>Как это работает?</strong>
        <br />
        <ol className="list-decimal ml-5">
          <li>Студенты оставляют отзывы</li>
          <li>Мы проверяем их на соответствие правилам публикации</li>
          <li>
            Собираем отзывы и отображаем их на страницах дисциплин
          </li>
        </ol>
        <br />
        Присоединяйтесь к сообществу!
      </span>
    </data>
  </Container>
);
