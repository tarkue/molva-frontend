# Molva Frontend | [en](https://github.com/tarkue/molva-frontend/blob/main/README_EN.md)

## 🇷🇺 Описание проекта

Molva Frontend - это современное веб-приложение, разработанное с использованием передовых технологий и лучших практик веб-разработки. Проект представляет собой клиентскую часть приложения, построенную с использованием React и TypeScript, обеспечивающую отзывчивый и интуитивно понятный пользовательский интерфейс.

### Технологический стек

- **Основа**: React 19, TypeScript
- **Сборка**: Vite 6
- **Стилизация**: Tailwind CSS 4
- **Управление формами**: React Hook Form с Zod валидацией
- **HTTP-клиент**: ky
- **Управление состоянием**: TanStack Query (React Query)
- **UI компоненты**: Radix UI
- **Маршрутизация**: React Router 7
- **Линтинг и форматирование**: ESLint, Prettier
- **Контейнеризация**: Docker

### Локальный запуск

1. Клонируйте репозиторий:

```bash
git clone https://github.com/tarkue/molva-frontend.git
cd molva-frontend
```

2. Установите зависимости:

```bash
npm install
```

3. Укажите в `.env` файле ссылку на API, ссылку на сайт и email-адрес для связи

```env
VITE_API_URL="http://localhost:5000/api"
VITE_URL="https://localhost:5000"
VITE_EMAIL=""
```

4. Запустите проект в режиме разработки:

```bash
npm run dev
```

5. Откройте браузер и перейдите по адресу `http://localhost:5173`

Для сборки проекта:

```bash
npm run build
```

## Scripts

- `npm run dev` - Запуск сервера разработки
- `npm run build` - Сборка для продакшена
- `npm run lint` - Запуск ESLint
- `npm run preview` - Предпросмотр продакшен-сборки
