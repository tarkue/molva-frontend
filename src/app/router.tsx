import { BrowserRouter, Routes, Route } from 'react-router';
import AppLayout from './layouts/app';
import MainPage from '@/pages/main';
import NotFoundPage from '@/pages/not-found';
import Discipline from '@/pages/discipline';

export default function Router() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/discipline/:disciplineId"
            element={<Discipline />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
