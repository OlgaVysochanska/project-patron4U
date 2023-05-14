import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import Button from 'shared/components/Button/Button';
import PlusIcon from 'icons/PlusIcon';

import useScreenWidth from 'shared/hooks/useScreenWidth';

import styles from './NoticesCategoriesList.module.scss';

const { noticesListContainer, noticesList, addPetBtn, addPetBtnIcon } = styles;

const NoticesCategoriesList = ({ data }) => {
  const screenWidth = useScreenWidth();

  const noticesItem = data.map(({ id, ...props }) => (
    <NoticeCategoryItem key={id} {...props} />
  ));

  return (
    <div className={noticesListContainer}>
      {screenWidth < 768 && (
        <Button
          className={addPetBtn}
          SVGComponent={() => <PlusIcon className={addPetBtnIcon} />}
        >
          Add pet
        </Button>
      )}
      <ul className={noticesList}>{noticesItem}</ul>
    </div>
  );
};

export default NoticesCategoriesList;
