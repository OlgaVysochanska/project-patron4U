import { useCallback } from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import style from './LoadMore.module.scss';

const LoadMore = ({ onClick, loading }) => {
  const handleClick = useCallback(() => {
    if (typeof onClick === 'function') {
      onClick();
    }
  }, [onClick]);

  return (
    <Button
      onClick={handleClick}
      type="button"
      className={style.loadMore}
      label="Load More"
      disabled={loading}
    />
  );
};

export default LoadMore;

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
