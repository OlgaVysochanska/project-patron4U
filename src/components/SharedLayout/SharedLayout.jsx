import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>Let's go</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
