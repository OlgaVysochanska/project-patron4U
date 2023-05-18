// import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';

import { getAllNotices } from '../../redux/notices/noticesSelecors';
import { fetchAllNotices } from '../../redux/notices/noticesOperations';

import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from '../../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NoticeModal from 'components/NoticeModal/NoticeModal';

import AddPetButton from 'components/AddPetButton/AddPetButton';

import style from './NoticesPage.module.scss';

const NoticesPage = () => {
  const [notice, setNotice] = useState(null);
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();

  const dispatch = useDispatch();
  const allNotices = useSelector(getAllNotices);

  useEffect(() => {
    dispatch(fetchAllNotices());
  }, [dispatch]);

  const loadMore = notice => {
    setNotice(notice);
    openModal();
  };

  return (
    <>
      <NoticesSearch />
      <div className={style.wrapper}>
        <NoticesCategoriesNav />
        <AddPetButton />
      </div>
      <NoticesCategoriesList notices={allNotices} loadMore={loadMore} />
      {isModalOpen && <NoticeModal notice={notice} closeModal={closeModal} />}
      <Outlet />
    </>
  );
};

export default NoticesPage;
