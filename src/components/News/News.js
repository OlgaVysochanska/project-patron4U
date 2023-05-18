import SearchBar from 'shared/components/SearchBar/SearchBar';
import Pagination from 'shared/components/Pagination/Pagination';
import NewsPageList from './NewsPageList/NewsPageList';
import { useCallback, useState, useEffect } from 'react';
import { getAllNews, searchNews } from 'shared/services/news';
import { useSearchParams } from 'react-router-dom';

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState('');

  const searchRequest = searchParams.get('search');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        if (keyword) {
          const { data, totalPages } = await searchNews(searchRequest, page);
          setItems(data);
          setTotalPages(totalPages);
          return;
        }

        const { data, totalPages } = await getAllNews(page);
        setItems(data);
        setTotalPages(totalPages);
      } catch (error) {
        setErrorMsg(error.message);
        console.log(errorMsg);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [
    setItems,
    setPage,
    errorMsg,
    setLoading,
    setTotalPages,
    page,
    searchRequest,
    keyword,
    totalPages,
  ]);

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
  };
  const onSearchNews = useCallback(
    ({ search }) => {
      setKeyword(search);
      setSearchParams({ search: `${search}` });
      setItems([]);
      setPage(1);
    },
    [setSearchParams, setKeyword, setItems, setPage]
  );

  return (
    <>
      <SearchBar onSubmit={onSearchNews} />
      <NewsPageList items={items} loading={loading} />
      {!loading && (
        <Pagination
          totalPages={totalPages}
          onPageChange={handlePageChange}
          page={page}
        />
      )}
    </>
  );
};

export default News;
