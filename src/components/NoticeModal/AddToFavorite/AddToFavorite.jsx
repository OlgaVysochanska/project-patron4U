import { useEffect } from 'react';

import useToggleFavoriteBtn from 'shared/hooks/useToggleFavoriteBtn';

import Button from 'shared/components/Button/Button';
import HeartIcon from 'icons/HeartIcon';

import styles from './AddToFavorite.module.scss';

const AddToFavorite = ({ _id }) => {
  const { myFavoriteNotice, setFavNot, handleClickFavoriteBtn } =
    useToggleFavoriteBtn();

  useEffect(() => {
    setFavNot(_id);
  }, [setFavNot, _id, myFavoriteNotice]);

  return (
    <Button
      className={styles.addTo}
      onClick={() => handleClickFavoriteBtn(_id)}
    >
      {!myFavoriteNotice ? 'Add to' : 'Delete from'}
      <HeartIcon className={styles.heartIcon} />
    </Button>
  );
};

export default AddToFavorite;
