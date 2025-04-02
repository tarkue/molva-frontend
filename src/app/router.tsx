import { BrowserRouter, Routes, Route } from 'react-router';
import AppLayout from './layouts/app';
import MainPage from '@/pages/main';

export default function Router() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/" element={<h1>id</h1>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
