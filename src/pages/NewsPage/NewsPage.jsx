import SearchBar from 'shared/components/SearchBar/SearchBar';
import Pagination from 'shared/components/Pagination/Pagination';
import NewsPageList from './NewsPageList/NewsPageList';
import { useCallback, useState, useEffect } from 'react';
import { getAllNews, searchNews } from 'shared/services/news';
import { useSearchParams } from 'react-router-dom';
// import items from './items';

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const totalPages = 491 / 6;
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await searchNews(searchParams, page);
        setItems(data);

        // const data = await getAllNews(page);
        // setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [setLoading, setItems, setError, setLoading, page]);

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
  };
  // const onSearchNews = useCallback(({ search }) => {
  //   setSearch(search);
  // }, []);

  function onSearchNews({ search }) {
    setSearchParams({ search: `${search}` });
  }

  return (
    <>
      <SearchBar onSubmit={onSearchNews} />
      <NewsPageList items={items} loading={loading} />
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
};

export default NewsPage;
