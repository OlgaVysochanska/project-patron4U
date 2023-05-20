import { useSelector, useDispatch } from 'react-redux';
import { addFilteredNotices } from 'redux/notices/noticesSlice';
import { getAllNotices } from 'redux/notices/noticesSelecors';

import SearchBar from 'shared/components/SearchBar/SearchBar';
import style from './NoticesSearch.module.scss';

const NoticeSearch = () => {
  const allNoticesData = useSelector(getAllNotices);
  console.log('allNoticesData:', allNoticesData);

  const dispatch = useDispatch();

  const clickOnSearch = ({ search }) => {
    const filteredNotices = allNoticesData.filter(notice =>
      notice.comments.toLowerCase().includes(search.toLowerCase())
    );
    console.log('filteredNotices:', filteredNotices);
    dispatch(addFilteredNotices(filteredNotices));
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
