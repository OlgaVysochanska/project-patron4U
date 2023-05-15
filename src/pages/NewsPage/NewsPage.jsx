import SearchBar from 'shared/components/SearchBar/SearchBar';
import Pagination from 'shared/components/Pagination/Pagination';
import NewsPageList from './NewsPageList/NewsPageList';
import { useCallback, useState, useEffect } from 'react';
import { getAllNews } from 'shared/services/news';
import Spiner from 'components/Spiner/Spiner';
// import items from './items';

const NewsPage = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [page, setPage] = useState(1);
  // const [postDetails, setPostDetails] = useState(null);

  const totalPages = 10;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await getAllNews();
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [setLoading, setItems, setError, setLoading]);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  const onSearchNews = useCallback(({ search }) => {
    setSearch(search);
  }, []);

  return (
    <>
      <SearchBar onSubmit={onSearchNews} />
      {loading && <Spiner />}
      <NewsPageList items={items} />
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
};

export default NewsPage;
