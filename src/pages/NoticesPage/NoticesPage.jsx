import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

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

import style from './NoticesPage.module.scss';

import { useParams } from '../../../node_modules/react-router-dom/dist/index';

const NoticesPage = () => {
  const { _id } = useSelector(getUser);
  const { category } = useParams();
  const [notice, setNotice] = useState(null);
  const [dataNotices, setDataNotices] = useState(null);
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();
  const dispatch = useDispatch();
  const allNotices = useSelector(getAllNotices);

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
          <AddPetButton />
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
