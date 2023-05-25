import { useEffect } from 'react';

import useLang from 'shared/hooks/useLang';
import useToggleFavoriteBtn from 'shared/hooks/useToggleFavoriteBtn';

import Button from 'shared/components/Button/Button';
import HeartIcon from 'icons/HeartIcon';

import locale from './locale.json';

import styles from './AddToFavorite.module.scss';

const AddToFavorite = ({ _id }) => {
  const { lang } = useLang();
  const add = locale.add[lang];
  const deleteFrom = locale.delete[lang];

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
      {!myFavoriteNotice ? add : deleteFrom}
      <HeartIcon className={styles.heartIcon} />
    </Button>
  );
};

export default AddToFavorite;
