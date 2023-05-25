import useLang from 'shared/hooks/useLang';

import PetsList from './PetsList/PetsList';
import AddPetButton from 'components/AddPetButton/AddPetButton';

import useTheme from 'shared/hooks/useTheme';
import styles from './PetsData.module.scss';

import locale from './locale.json';

const PetsData = () => {
  const { theme } = useTheme();
    const { lang } = useLang();
  const titleLang = locale.petsDataTitle[lang];
  return (
    <div className={styles.petsDataContainer}>
      <div className={styles.petsHeader}>
        <h2
          className={`${styles.petsTitle} ${
            theme === 'dark' && styles.petsTitleDark
          }`}
        >
          {titleLang}
        </h2>

        <AddPetButton />
      </div>
      <PetsList />
    </div>
  );
};

export default PetsData;
