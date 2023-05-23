import { useSearchParams, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

import SearchBar from 'shared/components/SearchBar/SearchBar';
import style from './NoticesSearch.module.scss';
import { getNoticesBySearch } from 'shared/services/notices';

const NoticeSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { category } = useParams();
  const gender = searchParams.get('search');
  console.log('useParams;', category);
  console.log('searchParams.get', gender);

  const clickOnSearch = async ({ search }) => {
    setSearchParams({ search });

    try {
      const data = await getNoticesBySearch(search, category, gender);
      dispatch(setFilter(data));
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  return (
    <>
      <div className={style.wrapper}>
        <SearchBar onSubmit={clickOnSearch} />
      </div>
    </>
  );
};

export default NoticeSearch;
