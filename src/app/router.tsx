import { BrowserRouter, Routes, Route } from 'react-router';
import AppLayout from './layouts/app';
import MainPage from '@/pages/main';
import NotFoundPage from '@/pages/not-found';
import DisciplinePage from '@/pages/discipline';
import ProfilePage from '@/pages/profile';

export default function Router() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/discipline/:id"
            element={<DisciplinePage />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
