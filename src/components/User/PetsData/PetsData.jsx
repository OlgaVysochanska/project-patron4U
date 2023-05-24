import AddPetButton from 'components/AddPetButton/AddPetButton';
import PetsList from './PetsList/PetsList';

import styles from './PetsData.module.scss';

const { petsDataContainer, petsHeader, petsTitle } = styles;

const PetsData = ({ data }) => {
  return (
    <div className={petsDataContainer}>
      <div className={petsHeader}>
        <h2 className={petsTitle}>My pets:</h2>
        <AddPetButton />
      </div>
      <PetsList data={data} />
    </div>
  );
};

export default PetsData;
