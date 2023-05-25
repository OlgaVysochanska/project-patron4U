import useLang from 'shared/hooks/useLang';

import PetsList from './PetsList/PetsList';
import AddPetButton from 'components/AddPetButton/AddPetButton';

import locale from './locale.json';

import styles from './PetsData.module.scss';

const PetsData = () => {
  const { lang } = useLang();
  const titleLang = locale.petsDataTitle[lang];

  return (
    <div className={styles.petsDataContainer}>
      <div className={styles.petsHeader}>
        <h2 className={styles.petsTitle}>{titleLang}</h2>
        <AddPetButton />
      </div>
      <PetsList />
    </div>
  );
};

export default PetsData;
