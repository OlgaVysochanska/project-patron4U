import AddPetButton from 'components/AddPetButton/AddPetButton';
import PetsList from './PetsList/PetsList';

import styles from './PetsData.module.scss';

const { petsDataContainer, petsHeader, petsTitle } = styles;

const PetsData = ({ data }) => {
  return (
    <div className={petsDataContainer}>
      <div className={petsHeader}>
        <h3 className={petsTitle}>My pets:</h3>
        <AddPetButton />
      </div>
      <PetsList data={data} />
    </div>
  );
};

export default PetsData;
