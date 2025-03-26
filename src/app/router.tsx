import { BrowserRouter, Routes, Route } from 'react-router';
import AppLayout from './layouts/app';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <h1>Главная</h1>
            </AppLayout>
          }
        />
        <Route path="/:id" element={<h1>id</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
