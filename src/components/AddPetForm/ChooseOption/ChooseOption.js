import Button from 'shared/components/Button/Button';

import {categories } from '../InitialData/InitialData';
import styles from '../AddPetForm.module.scss';

const ChooseOption = ({
    activeCategory,
    handleCategoryChange
  }) => {
    const categoriesEl = categories.map((item, index) => (
        <Button
          label={item.category}
          key={index}
          onClick={() => handleCategoryChange(index)}
          className={
            activeCategory === index ? styles.categoryAct : styles.category
          }
          type="button"
        />
      ));
  
  
  return <div className={styles.categoryContainer}>{categoriesEl}</div>;
  };
  
  export default ChooseOption;