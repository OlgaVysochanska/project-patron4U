import Spiner from 'components/Spiner/Spiner';
import UserData from 'components/User/UserData/UserData';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>Let's go</header>

      <main>
        <Spiner />
        <UserData />
        <Outlet />
      </main>
    </div>
  );
};
