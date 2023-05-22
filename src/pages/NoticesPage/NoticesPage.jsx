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
import NoticesFilters from 'components/Notices/NoticesFilters/NoticesFilters';

import style from './NoticesPage.module.scss';

import { getFilter } from 'redux/filter/filterSelectors';

const NoticesPage = () => {
  const allNotices = useSelector(getAllNotices);
  const [notice, setNotice] = useState(null);
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllNotices());
  }, [dispatch]);

  const loadMore = notice => {
    setNotice(notice);
    openModal();
  };

  const getVisibleNotices = () => {
    if (!filter) {
      return allNotices;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = allNotices.filter(notice =>
      notice.comments.toLowerCase().includes(normalizedFilter)
    );
    console.log('filteredNotices:', result);
    return result;
  };
  console.log('filtered is set :', getVisibleNotices());
  console.log('allNotices :', allNotices);

  return (
    <>
      <div className={style.noticePageContainer}>
        <NoticesSearch />
        <div className={style.wrapper}>
          <NoticesCategoriesNav />
          <div className={style.wrapperRightButton}>
            <NoticesFilters />
            <AddPetButton />
          </div>
        </div>
        <NoticesCategoriesList
          notices={getVisibleNotices()}
          loadMore={loadMore}
        />
        {isModalOpen && <NoticeModal notice={notice} closeModal={closeModal} />}
      </div>
      <Outlet />
    </>
  );
};

export default NoticesPage;
