import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Provider } from 'react-redux';

import { SharedLayout } from './SharedLayout/SharedLayout';

          import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';

import { store, persistor } from '../redux/store';
          
const MainPage = lazy(() => import('pages/MainPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const AddPetPage = lazy(() => import('pages/AddPetPage'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <Privider store={store}>
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
            <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
</Provider>

  );
};
