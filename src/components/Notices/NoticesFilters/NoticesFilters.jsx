import { useState, useEffect } from 'react';
import styles from './NoticesFilters.module.scss';
import PropTypes from 'prop-types';
import FilterButton from 'shared/components/FilterButton';

const NoticesFilters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState('');

  useEffect(() => {
    applyFilters(filters);
  }, [filters]);

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = e => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = filters => {
    // // логічні операції для створення запиту на бекенд з параметрами фільтра
    // axios
    //   .post('/api/filter', filters)
    //   .then(response => {
    //     // Обробка успішної відповіді від бекенду
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     // Обробка помилки
    //     console.error(error);
    //   });
  };

  return (
    <div>
      <FilterButton onClick={handleFilterClick}>Filter</FilterButton>
      {isOpen && (
        <div>
          <select name="age" onChange={handleFilterChange}>
            <option value="">-- By age --</option>
            <option value="3-12 m">3-12 m</option>
            <option value="1 year">1 year</option>
            <option value="2 year">2 year</option>
          </select>
          <select name="gender" onChange={handleFilterChange}>
            <option value="">-- By gender --</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default NoticesFilters;
