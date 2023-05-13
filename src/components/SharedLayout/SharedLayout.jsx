
import Spiner from 'components/Spiner/Spiner';

import UserData from 'components/User/UserData/UserData';


import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Spiner />
        <UserData />
        <Outlet />
      </main>
    </div>
  );
};
