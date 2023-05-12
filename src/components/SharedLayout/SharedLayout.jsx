import { Outlet } from 'react-router-dom';

// import { Header } from "components/Header/Header";

export const SharedLayout = () => {
  return (
    <div>
      <header>Let's go</header>
      {/* <Header /> */}

      <main>
        <Outlet />
      </main>
    </div>
  );
};
