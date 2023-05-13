import { Outlet } from 'react-router-dom';

// import { Header } from "components/Header/Header";
import TestNavbarAuth from 'components/TestNavbarAuth/testNavbarAuth';

export const SharedLayout = () => {
  return (
    <div>
      <header>Let's go</header>
      {/* <Header /> */}
      <TestNavbarAuth />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
