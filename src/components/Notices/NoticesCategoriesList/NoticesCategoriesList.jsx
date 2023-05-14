import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import Button from 'shared/components/Button/Button';
import PlusIcon from 'icons/PlusIcon';

import styles from './NoticesCategoriesList.module.scss';

const { noticesListContainer, noticesList, addPetBtn, addPetBtnIcon } = styles;

const NoticesCategoriesList = ({ data }) => {
  const noticesItem = data.map(({ id, ...props }) => (
    <NoticeCategoryItem key={id} {...props} />
  ));

  return (
    <div className={noticesListContainer}>
      {document.documentElement.clientWidth < 768 && (
        <Button
          className={addPetBtn}
          SVGComponent={() => (
            <PlusIcon className={addPetBtnIcon} color="#FFFFFF" />
          )}
        >
          Add pet
        </Button>
      )}
      <ul className={noticesList}>{noticesItem}</ul>
    </div>
  );
};

export default NoticesCategoriesList;
