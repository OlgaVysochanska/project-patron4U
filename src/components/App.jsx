import { Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';

import { SharedLayout } from './SharedLayout/SharedLayout';

import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';

import { store, persistor } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Provider>
  );
};
