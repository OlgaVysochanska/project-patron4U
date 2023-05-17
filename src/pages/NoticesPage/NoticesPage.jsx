import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import PlusIcon from 'icons/PlusSmallIcon';
import Button from 'shared/components/Button';
//
import style from './NoticesPage.module.scss';

const NoticesPage = () => {
  const navigate = useNavigate();

  const userAddPet = () => {
    navigate('/add-pet');
  };

  return (
    <>
      If components are ready, add them to NoticesPage. /NoticesSearch,
      NoticesCategoriesList, NoticesNav, NoticesFilters, AddPet/
      <NoticesSearch />
      <div className={style.wrapper}>
        <NoticesCategoriesNav />

        <Button
          onClick={userAddPet}
          type="button"
          className={style.addBtn}
          SVGComponent={PlusIcon}
          label={'Add Pet'}
        />
      </div>
      <Outlet />
    </>
  );
};

export default NoticesPage;
