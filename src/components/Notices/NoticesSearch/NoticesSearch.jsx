import { useSearchParams, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getRequestParams } from 'redux/filter/filterSelectors';

import SearchBar from 'shared/components/SearchBar/SearchBar';

import { getNoticesBySearch } from 'shared/services/notices';

const NoticeSearch = () => {
  const [, setSearchParams] = useSearchParams();
  // const noticeToSearch = searchParams.get('search');
  // console.log(' noticeToSearch', noticeToSearch);

  const { category } = useParams();

  const requestParams = useSelector(getRequestParams);
  const age = requestParams.ages.join(',');
  const gender = requestParams.genders.join(',');
  // console.log('requestParams:', requestParams);
  // console.log('age:', age);

  const dispatch = useDispatch();

  const clickOnSearch = async ({ search }) => {
    // console.log('search, age onClick:', gender, age);
    setSearchParams({ search, gender, age });
    // console.log('search:', search);
    try {
      let data;
      if (search) {
        data = await getNoticesBySearch(search, category, gender, age);
      } else {
        data = await getNoticesBySearch('', category, gender, age);
      }
      // const data = await getNoticesBySearch(search, category, gender, age);
      // console.log('clickOnSearch:', data);
      dispatch(setFilter(data));
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  return (
    <>
      <div>
        <SearchBar onSubmit={clickOnSearch} />
      </div>
    </>
  );
};

export default NoticeSearch;
