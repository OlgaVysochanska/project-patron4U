import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';

import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import PetsData from 'components/User/PetsData/PetsData';

// import data from '../Notices/notices.json';
import data from '../User/PetsData/pets.json';

const SharedLayout = () => {
  return (
    <div>
      <Header />

      <main>
        {/* <NoticesCategoriesList data={data} /> */}
        <PetsData data={data} />
        {/* <Outlet /> */}
      </main>
    </div>
  );
};

export default SharedLayout;
