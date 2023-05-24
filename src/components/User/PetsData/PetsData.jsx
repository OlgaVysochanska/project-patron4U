import PetsList from './PetsList/PetsList';
import AddPetButton from 'components/AddPetButton/AddPetButton';

import styles from './PetsData.module.scss';

const PetsData = () => {
  return (
    <div className={styles.petsDataContainer}>
      <div className={styles.petsHeader}>
        <h2 className={styles.petsTitle}>My pets:</h2>
        <AddPetButton />
      </div>
      <PetsList />
    </div>
  );
};

export default PetsData;
