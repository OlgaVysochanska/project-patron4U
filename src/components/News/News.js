import SearchBar from 'shared/components/SearchBar/SearchBar';
import Pagination from 'shared/components/Pagination/Pagination';
import NewsPageList from './NewsPageList/NewsPageList';
import Spiner from 'components/Spiner/Spiner';
import LoadMore from '../../shared/components/LoadMore';
import { useCallback, useState, useEffect, useRef } from 'react';
import { getAllNews, searchNews } from 'shared/services/news';

const News = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const newsContainerRef = useRef(null);

  useEffect(() => {
    fetchNews();
  }, [page, search]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setPage(1);
      }
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);

      let newData = [];

      if (!search) {
        const { data, totalPages } = await getAllNews(page);
        newData = data;
        setTotalPages(totalPages);
      } else {
        const { data, totalPages } = await searchNews(search, page);
        newData = data;
        setTotalPages(totalPages);
      }

      if (!isMobile) {
        setItems(newData);
      } else {
        setItems(prevItems => [...prevItems, ...newData]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
  };

  const onSearchNews = useCallback(
    ({ search }) => {
      setSearch(search);
      setPage(1);
      setItems([]);
    },
    [setSearch, setPage]
  );

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (isMobile) {
    return (
      <>
        <SearchBar onSubmit={onSearchNews} />
        <NewsPageList items={items} />
        {!loading && <LoadMore onClick={handleLoadMore} loading={loading} />}
      </>
    );
  }

  return (
    <>
      <SearchBar onSubmit={onSearchNews} />
      {loading ? <Spiner /> : <NewsPageList items={items} loading={loading} />}
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
