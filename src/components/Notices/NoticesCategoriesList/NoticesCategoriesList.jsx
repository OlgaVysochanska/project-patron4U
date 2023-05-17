import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';

import Modal from 'shared/components/Modal/Modal';
import NoticeModal from 'components/NoticeModal/NoticeModal';
import NoticeCategoryItem from '../NoticeCategoryItem';

import styles from './NoticesCategoriesList.module.scss';
import notice from '../../NoticeModal/notice.json';

const { noticesListContainer, noticesList } = styles;

const NoticesCategoriesList = ({ data }) => {
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();

  const noticesItem = data.map(({ id, ...props }) => (
    <NoticeCategoryItem key={id} openModal={openModal} {...props} />
  ));

  return (
    <div className={noticesListContainer}>
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
