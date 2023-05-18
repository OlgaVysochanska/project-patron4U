import { useNavigate } from 'react-router-dom';

import useScreenWidth from 'shared/hooks/useScreenWidth';

import Button from 'shared/components/Button/Button';
import PlusIcon from 'icons/PlusIcon';
import PlusSmallIcon from 'icons/PlusSmallIcon';

import styles from './AddPetButton.module.scss';

const AddPetButton = () => {
  const screenWidth = useScreenWidth();
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => {
          navigate('/add-pet');
        }}
        className={
          screenWidth < 768
            ? `${styles.addPetBtn} ${styles.mobile}`
            : `${styles.addPetBtn} ${styles.tablet}`
        }
      >
        {screenWidth < 768 ? (
          <PlusIcon className={styles.addPetBtnIconMobile} />
        ) : (
          <PlusSmallIcon className={styles.addPetBtnIconTablet} />
        )}
        Add pet
      </Button>
    </>
  );
};

export default AddPetButton;
