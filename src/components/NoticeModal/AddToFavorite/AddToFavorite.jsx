import Button from 'shared/components/Button/Button';
import HeartIcon from 'icons/HeartIcon';

import styles from './AddToFavorite.module.scss';

const AddToFavorite = () => {
  return (
    <Button className={styles.addTo}>
      Add to
      <HeartIcon className={styles.heartIcon} />
    </Button>
  );
};

export default AddToFavorite;
