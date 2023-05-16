// import { useState, useEffect, useCallback } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { searchNotice } from '../../../shared/services/notices';
// import NoticesCategoriesList from '../NoticesCategoriesList/NoticesCategoriesList';
import SearchBar from 'shared/components/SearchBar/SearchBar';
import style from './NoticesSearch.module.scss';

const NoticesSearch = () => {
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const search = searchParams.get('search');
  // const page = searchParams.get('page');

  // useEffect(() => {
  //   if (!search) {
  //     return;
  //   }

  //   const fetchNotices = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await searchNotice(search, page);
  //       setItems(prevItems => [...prevItems, ...data]);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchNotices();
  // }, [search, page, setLoading, setItems, setError]);

  // const onSearchNotice = useCallback(
  //   ({ search }) => {
  //     setSearchParams({ search, page: 1 });
  //     setItems([]);
  //   },
  //   [setSearchParams]
  // );

  return (
    <>
      <div className={style.wrapper}>
        <SearchBar />
      </div>
      {/* <NoticesCategoriesList data={items}/>
      {error && <p>{error}</p>}
      {loading && <p>...Load</p>} */}
    </>
  );
};

export default NoticesSearch;
