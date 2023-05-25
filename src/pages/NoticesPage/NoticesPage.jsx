import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import useLang from 'shared/hooks/useLang';
import Spiner from 'components/Spiner/Spiner';
import locale from './locale.json';
import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';
import { getFilter } from 'redux/filter/filterSelectors';

import {
  getAllNotices,
  getLoadingNotices,
} from 'redux/notices/noticesSelecors';
import { fetchNoticesByCategory } from '../../redux/notices/noticesOperations';
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
import { setFilter } from 'redux/filter/filterSlice';

const NoticesPage = () => {
  const { lang } = useLang();
  const title = locale.title[lang];
  const { _id } = useSelector(getUser);
  const { category } = useParams();
  const loadingNotices = useSelector(getLoadingNotices);

  const filter = useSelector(getFilter);

  const allNotices = useSelector(getAllNotices);

  const [notice, setNotice] = useState(null);
  const [dataNotices, setDataNotices] = useState(null);
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(''));
    dispatch(fetchNoticesByCategory(category));
  }, [dispatch, category]);

  const onClickOwn = async () => {
    const { data } = await getUserNotices(_id);
    setDataNotices(data);
  };

  const onClickFavorite = async () => {
    const { data } = await getUserFavoriteNotices(_id);
    setDataNotices(data);
  };

  const onClearnData = () => {
    dispatch(setFilter(''));
    setDataNotices(null);
  };

  const loadMore = notice => {
    setNotice(notice);
    openModal();
  };

  if (loadingNotices) {
    return <Spiner />;
  }

  return (
    <>
      <div
        className={style.noticePageContainer}
        style={{ position: 'relative' }}
      >
        <h2 className={style.title}>{title}</h2>
        <div className={style.searchWrapper}><NoticesSearch /></div>

        <div className={style.contentWrapper}>
          <div className={style.categoryFilterWrapper}>
            <div className={style.categoryWrapper}>
              <NoticesCategoriesNav
                onClickOwn={onClickOwn}
                onClearnData={onClearnData}
                onClickFavorite={onClickFavorite}
              />
            </div>
            <div>
              <NoticesFilters />
            </div>
          </div>

          <div className={style.addPetWrapper}>
            <AddPetButton />
          </div>
        </div>

        {!dataNotices && !filter && (
          <NoticesCategoriesList notices={allNotices} loadMore={loadMore} />
        )}
        {dataNotices && !filter && (
          <NoticesCategoriesList notices={dataNotices} loadMore={loadMore} />
        )}
        {filter && (
          <NoticesCategoriesList notices={filter} loadMore={loadMore} />
        )}
        {isModalOpen && <NoticeModal notice={notice} closeModal={closeModal} />}
      </div>
      <Outlet />
    </>
  );
};

export default NoticesPage;

// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Outlet, useParams } from 'react-router-dom';
// import useLang from 'shared/hooks/useLang';
// import Spiner from 'components/Spiner/Spiner';
// import locale from './locale.json';
// import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';
// import { getFilter } from 'redux/filter/filterSelectors';

// import {
//   getAllNotices,
//   getLoadingNotices,
// } from 'redux/notices/noticesSelecors';
// import { fetchNoticesByCategory } from '../../redux/notices/noticesOperations';
// import {
//   getUserFavoriteNotices,
//   getUserNotices,
// } from 'shared/services/notices';

// import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
// import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
// import NoticesCategoriesList from '../../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
// import NoticeModal from 'components/NoticeModal/NoticeModal';
// import AddPetButton from 'components/AddPetButton/AddPetButton';

// import { getUser } from 'redux/auth/authSelectors';
// import NoticesFilters from 'components/Notices/NoticesFilters/NoticesFilters';

// import style from './NoticesPage.module.scss';
// import { setFilter } from 'redux/filter/filterSlice';

// const NoticesPage = () => {
//   const { lang } = useLang();
//   const title = locale.title[lang];
//   const { _id } = useSelector(getUser);
//   const { category } = useParams();
//   const loadingNotices = useSelector(getLoadingNotices);

//   const filter = useSelector(getFilter);

//   const allNotices = useSelector(getAllNotices);

//   const [notice, setNotice] = useState(null);
//   const [dataNotices, setDataNotices] = useState(null);
//   const { isModalOpen, openModal, closeModal } = useToggleModalWindow();

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setFilter(''));
//     dispatch(fetchNoticesByCategory(category));
//   }, [dispatch, category]);

//   const onClickOwn = async () => {
//     const { data } = await getUserNotices(_id);
//     setDataNotices(data);
//   };

//   const onClickFavorite = async () => {
//     const { data } = await getUserFavoriteNotices(_id);
//     setDataNotices(data);
//   };

//   const onClearnData = () => {
//     dispatch(setFilter(''));
//     setDataNotices(null);
//   };

//   const loadMore = notice => {
//     setNotice(notice);
//     openModal();
//   };

//   if (loadingNotices) {
//     return <Spiner />;
//   }

//   return (
//     <>
//       <div className={style.noticePageContainer}>
//         <h2 className={style.title}>{title}</h2>
//         <NoticesSearch />
//         <div className={style.wrapper}>
//           <NoticesCategoriesNav
//             onClickOwn={onClickOwn}
//             onClearnData={onClearnData}
//             onClickFavorite={onClickFavorite}
//           />
//           <div className={style.wrapperRightButton}>
//             <NoticesFilters />
//             <AddPetButton />
//           </div>
//         </div>

//         {!dataNotices && !filter && (
//           <NoticesCategoriesList notices={allNotices} loadMore={loadMore} />
//         )}
//         {dataNotices && !filter && (
//           <NoticesCategoriesList notices={dataNotices} loadMore={loadMore} />
//         )}
//         {filter && (
//           <NoticesCategoriesList notices={filter} loadMore={loadMore} />
//         )}
//         {isModalOpen && <NoticeModal notice={notice} closeModal={closeModal} />}
//       </div>
//       <Outlet />
//     </>
//   );
// };

// export default NoticesPage;
