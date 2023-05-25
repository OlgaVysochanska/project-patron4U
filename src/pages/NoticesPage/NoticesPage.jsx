import { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useLang from 'shared/hooks/useLang';
import Spiner from 'components/Spiner/Spiner';
import locale from './locale.json';
import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';
import { getFilter } from 'redux/filter/filterSelectors';
import Pagination from 'shared/components/Pagination/Pagination';
import LoadMore from '../../shared/components/LoadMore';
import Title from 'shared/components/Title/Title';

import {
  getAllNotices,
  getLoadingNotices,
  getTotalPages,
} from 'redux/notices/noticesSelecors';
import {
  fetchFavoriteNoticesByUser,
  fetchNoticesByCategory,
  fetchNoticesByUser,
} from '../../redux/notices/noticesOperations';
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

  const loading = useSelector(getLoadingNotices);

  const filter = useSelector(getFilter);

  const allNotices = useSelector(getAllNotices);

  const [notice, setNotice] = useState(null);
  const [dataNotices, setDataNotices] = useState(null);
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const totalPages = useSelector(getTotalPages);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    dispatch(setFilter(''));
    dispatch(fetchNoticesByCategory(category, page));
  }, [dispatch, category, page]);

  const onClickOwn = async () => {
    dispatch(fetchNoticesByUser(_id, page));
  };

  const onClickFavorite = async () => {
    dispatch(fetchFavoriteNoticesByUser(_id, page));
  };

  const onClearnData = () => {
    dispatch(setFilter(''));
    setDataNotices(null);
  };

  const loadMore = notice => {
    setNotice(notice);
    openModal();
  };

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setPage(1);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  if (isMobile) {
    return (
      <>
        <div
          className={style.noticePageContainer}
          style={{ position: 'relative' }}
        >
          <Title children={title} />
          <div className={style.searchWrapper}>
            <NoticesSearch />
          </div>

          <div className={style.contentWrapper}>
            <div className={style.categoryFilterWrapper}>
              <div className={style.categoryWrapper}>
                <NoticesCategoriesNav
                  onClickOwn={onClickOwn}
                  onClearnData={onClearnData}
                  onClickFavorite={onClickFavorite}
                />
              </div>
              <div className={style.filterWrapper}>
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
          {isModalOpen && (
            <NoticeModal notice={notice} closeModal={closeModal} />
          )}
          {!loading && totalPages > 1 && (
            <LoadMore onClick={handleLoadMore} loading={loading} />
          )}
        </div>
      </>
    );
  }

  return (
    <>
      {loading && <Spiner />}
      <div
        className={style.noticePageContainer}
        style={{ position: 'relative' }}
      >
        <Title children={title} />
        <div className={style.searchWrapper}>
          <NoticesSearch />
        </div>

        <div className={style.contentWrapper}>
          <div className={style.categoryFilterWrapper}>
            <div className={style.categoryWrapper}>
              <NoticesCategoriesNav
                onClickOwn={onClickOwn}
                onClearnData={onClearnData}
                onClickFavorite={onClickFavorite}
              />
            </div>
            <div className={style.filterWrapper}>
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

      {!loading && totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          page={page}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default NoticesPage;
