import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router';
import AppLayout from './layouts/app';
import MainPage from '@/pages/main';
import NotFoundPage from '@/pages/not-found';
import DisciplinePage from '@/pages/discipline';
import ProfilePage from '@/pages/profile';
import { CheckReviewPage } from '@/pages/check-review';
import { AboutPage } from '@/pages/about';
import ProfileRedirectToDefault from '@/pages/profile-redirect-to-default';
import CheckReviewRedirectToDefault from '@/pages/check-redirect-to-default';

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
          <Route
            path="/profile"
            element={<ProfileRedirectToDefault />}
          >
            <Route path=":panel" element={<ProfilePage />} />
          </Route>

          <Route
            path="/check"
            element={<CheckReviewRedirectToDefault />}
          >
            <Route path=":panel" element={<CheckReviewPage />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
