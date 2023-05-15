import Button from 'shared/components/Button/Button';
import PetsList from './PetsList/PetsList';
import PlusIcon from 'icons/PlusIcon';

import styles from './PetsData.module.scss';

const { petsDataContainer, petsHeader, petsTitle, addBtn, addBtnIcon } = styles;

const PetsData = ({ data }) => {
  return (
    <div className={petsDataContainer}>
      <div className={petsHeader}>
        <h3 className={petsTitle}>My pets:</h3>
        <Button
          label="Add Pet"
          className={addBtn}
          SVGComponent={() => <PlusIcon className={addBtnIcon} />}
        />
      </div>
      <PetsList data={data} />
    </div>
  );
};

export default PetsData;
