import { BrowserRouter, Routes, Route } from 'react-router';
import AppLayout from './layouts/app';
import MainPage from '@/pages/main';
import NotFoundPage from '@/pages/not-found';
import Discipline from '@/pages/discipline';
import { SignInPage } from '@/pages/sign-in';

export default function Router() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignInPage />} />
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
