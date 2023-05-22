import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NotiflixMessage from 'shared/components/NotiflixMessage/NotiflixMessage';
import Button from 'shared/components/Button/Button';
import HeartIcon from 'icons/HeartIcon';

import { isUserLogin } from 'redux/auth/authSelectors';
import { fetchToggleFavoriteNotice } from 'redux/auth/authOperations';

import styles from './AddToFavorite.module.scss';

const AddToFavorite = ({ _id, myFavoriteNotice }) => {
  const [isFavorite, setIsFavorite] = useState(myFavoriteNotice);
  const dispatch = useDispatch();
  const currentUser = useSelector(isUserLogin);

  const handleClickFavoriteBtn = id => {
    if (!currentUser) {
      NotiflixMessage({ type: 'info', data: 'Register or login, please!' });
      return;
    }
    dispatch(fetchToggleFavoriteNotice(id));
    setIsFavorite(!isFavorite);
    NotiflixMessage({
      type: 'success',
      data: !isFavorite
        ? 'Notice added to favorite successfully!'
        : 'Notice deleted from favorite successfully!',
    });
  };

  return (
    <Button
      className={styles.addTo}
      onClick={() => handleClickFavoriteBtn(_id)}
    >
      {!isFavorite ? 'Add to' : 'Delete from'}
      <HeartIcon className={styles.heartIcon} />
    </Button>
  );
};

export default AddToFavorite;
