export const Attention = () => (
  <div className="flex flex-col gap-4 p-6 rounded-3xl bg-warn-red w-full">
    <h2 className="text-subhead text-contrast">Обратите внимание!</h2>
    <p className="text-body text-contrast">
      Некоторые ваши отзывы могут быть окрашены в красный. Это значит,
      что по какой-то причине, например нарушение правил сайта,
      администраторы решили удалить ваш отзыв, и на странице
      дисциплины он отображаться не будет. Если вы считаете, что ваш
      отзыв был удален неоправданно, вы можете написать в нашу
      поддержку {import.meta.env.VITE_EMAIL}, чтобы попытаться
      восстановить его.
    </p>
  </div>
);
