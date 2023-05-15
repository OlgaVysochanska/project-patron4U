import styles from './FilterButton.module.scss';
import FilterIcon from '../../../icons/FilterIcon';
import PropTypes from 'prop-types';

const FilterButton = ({ onClick, children }) => {
  const active = false;
  return (
    <button
      className={`${styles.filterButton} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      <span className={`${styles.label} ${active ? styles.active : ''}`}>
        {children}
      </span>
      <span className={`${styles.filterIcon} ${active ? styles.active : ''}`}>
        {<FilterIcon />}
      </span>
    </button>
  );
};

FilterButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default FilterButton;
