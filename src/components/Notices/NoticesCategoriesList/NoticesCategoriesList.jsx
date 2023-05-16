import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';

import Modal from 'shared/components/Modal/Modal';
import NoticeModal from 'components/NoticeModal/NoticeModal';
import NoticeCategoryItem from '../NoticeCategoryItem';
import Button from 'shared/components/Button/Button';
import PlusIcon from 'icons/PlusIcon';

import useScreenWidth from 'shared/hooks/useScreenWidth';

import styles from './NoticesCategoriesList.module.scss';
import notice from '../../NoticeModal/notice.json';

const { noticesListContainer, noticesList, addPetBtn, addPetBtnIcon } = styles;

const NoticesCategoriesList = ({ data }) => {
  const screenWidth = useScreenWidth();
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();

  const noticesItem = data.map(({ id, ...props }) => (
    <NoticeCategoryItem key={id} openModal={openModal} {...props} />
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
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <NoticeModal notice={notice} />
        </Modal>
      )}
    </div>
  );
};

export default NoticesCategoriesList;
