import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelectors';

import SearchBar from 'shared/components/SearchBar/SearchBar';
import style from './NoticesSearch.module.scss';

const NoticeSearch = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  console.log('filter:', filter);

  const clickOnSearch = ({ search }) => dispatch(setFilter(search));
  // console.log('search:', search);

  return (
    <>
      <div className={style.wrapper}>
        <SearchBar onSubmit={clickOnSearch} />
      </div>
    </>
  );
};

export default NoticeSearch;
