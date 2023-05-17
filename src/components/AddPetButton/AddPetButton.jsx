import { Link } from 'react-router-dom';

import useScreenWidth from 'shared/hooks/useScreenWidth';

import Button from 'shared/components/Button/Button';
import PlusIcon from 'icons/PlusIcon';
import PlusSmallIcon from 'icons/PlusSmallIcon';

import styles from './AddPetButton.module.scss';

const AddPetButton = () => {
  const screenWidth = useScreenWidth();

  return (
    <>
      <Button
        className={
          screenWidth < 768
            ? `${styles.addPetBtn} ${styles.mobile}`
            : `${styles.addPetBtn} ${styles.tablet}`
        }
      >
        <Link
          to={'/add-pet'}
          className={
            screenWidth < 768
              ? `${styles.addPetLink} ${styles.addPetLinkMobile}`
              : `${styles.addPetLink} ${styles.addPetLinkTablet}`
          }
        >
          {screenWidth < 768 ? (
            <PlusIcon className={styles.addPetBtnIconMobile} />
          ) : (
            <PlusSmallIcon className={styles.addPetBtnIconTablet} />
          )}
          Add pet
        </Link>
      </Button>
    </>
  );
};

export default AddPetButton;
