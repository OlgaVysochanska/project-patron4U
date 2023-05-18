import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';

const MainPage = lazy(() => import('pages/MainPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const AddPetPage = lazy(() => import('pages/AddPetPage'));
const NotFound = lazy(() => import('pages/NotFound'));
export const App = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/notices/:category" element={<NoticesPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
