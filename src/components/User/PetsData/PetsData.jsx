import PetsList from './PetsList/PetsList';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import useTheme from 'shared/hooks/useTheme';
import styles from './PetsData.module.scss';

const PetsData = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.petsDataContainer}>
      <div className={styles.petsHeader}>
        <h2
          className={`${styles.petsTitle} ${
            theme === 'dark' && styles.petsTitleDark
          }`}
        >
          My pets:
        </h2>
        <AddPetButton />
      </div>
      <PetsList />
    </div>
  );
};

export default PetsData;
