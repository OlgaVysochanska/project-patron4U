import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';

import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';

import { getAllNotices } from 'redux/notices/noticesSelecors';
import {
  fetchNoticesByCategory,
  // fetchNoticesByUser,
  // fetchFavoriteNoticesByUser,
} from '../../redux/notices/noticesOperations';
import {
  getUserFavoriteNotices,
  getUserNotices,
} from 'shared/services/notices';
import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from '../../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NoticeModal from 'components/NoticeModal/NoticeModal';
import AddPetButton from 'components/AddPetButton/AddPetButton';

import { getUser } from 'redux/auth/authSelectors';

import NoticesFilters from 'components/Notices/NoticesFilters/NoticesFilters';

import style from './NoticesPage.module.scss';

import { getFilter } from 'redux/filter/filterSelectors';

const NoticesPage = () => {
  const { _id } = useSelector(getUser);
  const { category } = useParams();

  const allNotices = useSelector(getAllNotices);

  const [notice, setNotice] = useState(null);
  const [dataNotices, setDataNotices] = useState(null);
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNoticesByCategory(category));
  }, [dispatch, category]);

  const onClickOwn = async () => {
    // setDataNotices(myAbs);
    const data = await getUserNotices(_id);
    console.log(data);
    setDataNotices(data);
  };

  const onClickFavorite = async () => {
    const data = await getUserFavoriteNotices(_id);
    console.log(data);
    // setDataNotices(data);
  };

  const onClearnData = () => {
    setDataNotices(null);
  };

  const loadMore = notice => {
    setNotice(notice);
    openModal();
  };

  const getVisibleNotices = useCallback(() => {
    if (!filter) {
      return allNotices;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = allNotices.filter(notice =>
      notice.comments.toLowerCase().includes(normalizedFilter)
    );
    console.log('filteredNotices:', result);
    return result;
  }, [allNotices, filter]);
  console.log('filtered is set :', getVisibleNotices());
  console.log('allNotices :', allNotices);

  useEffect(() => {
    if (filter) {
      getVisibleNotices();
    }
  }, [getVisibleNotices, filter]);

  return (
    <>
      <div className={style.noticePageContainer}>
        <NoticesSearch />
        <div className={style.wrapper}>
          <NoticesCategoriesNav
            onClickOwn={onClickOwn}
            onClearnData={onClearnData}
            onClickFavorite={onClickFavorite}
          />
          <div className={style.wrapperRightButton}>
            <NoticesFilters />
            <AddPetButton />
          </div>
        </div>
        {!dataNotices && (
          <NoticesCategoriesList notices={allNotices} loadMore={loadMore} />
        )}
        {dataNotices && (
          <NoticesCategoriesList notices={dataNotices} loadMore={loadMore} />
        )}
        {isModalOpen && <NoticeModal notice={notice} closeModal={closeModal} />}
      </div>
      <Outlet />
    </>
  );
};

export default NoticesPage;
