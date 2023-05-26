import React, { useCallback, useState, useEffect } from 'react';
import SearchBar from 'shared/components/SearchBar/SearchBar';
import Pagination from 'shared/components/Pagination/Pagination';
import NewsPageList from './NewsPageList/NewsPageList';
import Spiner from 'components/Spiner/Spiner';
import LoadMore from '../../shared/components/LoadMore';
import { getAllNews, searchNews } from 'shared/services/news';

const News = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const fetchNews = useCallback(async () => {
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
        setItems(prevItems => {
          const updatedItems = [...prevItems, ...newData];
          const uniqueItems = Array.from(
            new Set(updatedItems.map(item => item.id))
          ).map(id => updatedItems.find(item => item.id === id));
          return uniqueItems;
        });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [search, page, isMobile]);

  useEffect(() => {
    fetchNews();
  }, [search, fetchNews]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setPage(1);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
  };

  const onSearchNews = useCallback(({ search }) => {
    setSearch(search);
    setPage(1);
    setItems([]);
  }, []);

  const handleLoadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  if (isMobile) {
    return (
      <>
        <SearchBar onSubmit={onSearchNews} />
        <NewsPageList items={items} />
        {!loading && items.length !== 0 && (
          <LoadMore onClick={handleLoadMore} loading={loading} />
        )}
      </>
    );
  }

  return (
    <>
      <SearchBar onSubmit={onSearchNews} />
      {loading ? <Spiner /> : <NewsPageList items={items} loading={loading} />}
      {!loading && items.length !== 0 && (
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
