import { Toast } from '../ui/toast';

const titleWrapper = (title: string) => ({ title });
const generateToast = (text: string) => {
  return {
    ADMIN: titleWrapper(`Администратор ${text}`),
    DISCIPLINE: titleWrapper(`Дисциплина ${text}а`),
    REVIEW: titleWrapper(`Отзыв ${text}`),
    TEACHER: titleWrapper(`Преподаватель ${text}`),
    USER: titleWrapper(`Пользователь ${text}`),
  };
};

export const SUCCESS_UPDATE_DATA_TOAST_BODY: Toast = {
  title: 'Данные успешно обновлены',
};

export const SUCCESS_ADD_TOAST_BODY = generateToast(
  'успешно добавлен',
);
export const SUCCESS_REMOVE_TOAST_BODY =
  generateToast('успешно удален');

export const FAILED_REMOVE_TOAST_BODY: Toast = {
  title: 'Произошла ошибка при удалении',
  description: 'Что-то пошло не так. Перезагрузите страницу.',
  variant: 'destructive',
};

export const ERROR_TOAST_BODY: Toast = {
  title: 'Что-то пошло не так',
  description: 'Попробуйте еще раз',
  variant: 'destructive',
};
