import { Toast } from '../ui/toast';

export const SUCCESS_UPDATE_DATA_TOAST_BODY: Toast = {
  title: 'Данные успешно обновлены',
};

export const SUCCESS_ADD_TOAST_BODY = {
  ADMIN: {
    title: 'Администратор успешно добавлен',
  },

  DISCIPLINE: {
    title: 'Дисциплина успешно добавлена',
  },

  REVIEW: {
    title: 'Отзыв успешно добавлен',
  },

  TEACHER: {
    title: 'Преподаватель успешно добавлен',
  },
};

export const ERROR_TOAST_BODY: Toast = {
  title: 'Что-то пошло не так',
  description: 'Попробуйте еще раз',
  variant: 'destructive',
};
