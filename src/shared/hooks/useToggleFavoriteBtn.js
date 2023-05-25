import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NotiflixMessage from 'shared/components/NotiflixMessage/NotiflixMessage';

import { isUserLogin, getFavoriteNotices } from 'redux/auth/authSelectors';
import { fetchToggleFavoriteNotice } from 'redux/auth/authOperations';

const useToggleFavoriteBtn = () => {
  const [myFavoriteNotice, setMyFavoriteNotice] = useState(false);
  const currentUser = useSelector(isUserLogin);
  const favoriteNotices = useSelector(getFavoriteNotices);

  const dispatch = useDispatch();

  const setFavNot = id => {
    if (favoriteNotices) {
      setMyFavoriteNotice(favoriteNotices.includes(id));
    }
  };

  const handleClickFavoriteBtn = id => {
    if (!currentUser) {
      NotiflixMessage({ type: 'info', data: 'Register or login, please!' });
      return;
    }
    try {
      dispatch(fetchToggleFavoriteNotice(id));
      NotiflixMessage({
        type: 'success',
        data: !myFavoriteNotice
          ? 'Notice added to favorite successfully!'
          : 'Notice deleted from favorite successfully!',
      });
    } catch (error) {
      NotiflixMessage({
        type: 'failure',
        data: error.message,
      });
    }
  };

  return { myFavoriteNotice, setFavNot, handleClickFavoriteBtn };
};

export default useToggleFavoriteBtn;
