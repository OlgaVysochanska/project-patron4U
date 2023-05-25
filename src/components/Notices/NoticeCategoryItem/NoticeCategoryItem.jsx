import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useToggleFavoriteBtn from 'shared/hooks/useToggleFavoriteBtn';
import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';

import Button from 'shared/components/Button/Button';
import ModalApproveAction from 'shared/components/ModalApproveAction/ModalApprovAction';
import NotiflixMessage from 'shared/components/NotiflixMessage/NotiflixMessage';

import LocationIcon from 'icons/LocationIcon';
import ClockIcon from 'icons/ClockIcon';
import MaleIcon from 'icons/MaleIcon';
import FemaleIcon from 'icons/FemaleIcon';
import HeartIcon from 'icons/HeartIcon';
import TrashIcon from 'icons/TrashIcon';
import useTheme from 'shared/hooks/useTheme';

import { fetchDeleteNotice } from 'redux/notices/noticesOperations';
import { getUser } from 'redux/auth/authSelectors';

import { getAge } from 'shared/helpers/getAge';

import styles from './NoticeCategoryItem.module.scss';

const NoticeCategoryItem = ({ notice, loadMore }) => {
  const { myFavoriteNotice, setFavNot, handleClickFavoriteBtn } =
    useToggleFavoriteBtn();
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();
  const { theme } = useTheme();

  useEffect(() => {
    setFavNot(notice._id);
  }, [setFavNot, notice._id, myFavoriteNotice]);

  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const { _id, category, title, date, sex, location, petURL, owner } = notice;

  const categoryForUser = category => {
    if (category === 'lost-found') return 'lost/found';
    if (category === 'for-free') return 'in good hands';
    return category;
  };

  let isMyAds = false;

  if (owner === user._id) {
    isMyAds = true;
  }

  const formattedLocation =
    location.length >= 10 ? location.slice(0, 5) + ' ...' : location;

  const handleDeleteNotice = async id => {
    try {
      await dispatch(fetchDeleteNotice(id));
      closeModal();
    } catch (error) {
      NotiflixMessage({ type: 'info', data: error.message });
    }
  };

  const noticeCard =
    theme === 'light'
      ? styles.noticeCard
      : `${styles.noticeCard} + ${styles.noticeCardDark}`;

  const noticeTitle =
    theme === 'light'
      ? styles.noticeTitle
      : `${styles.noticeTitle} + ${styles.noticeTitleDark}`;

  return (
    <li className={noticeCard}>
      <div className={styles.imgThumb}>
        <img
          className={styles.avatar}
          src={petURL}
          alt="Pet's avatar"
          width="280"
        />
        <div className={styles.topBlock}>
          <p className={styles.categoryInfo}>{categoryForUser(category)}</p>
          <div>
            <Button
              onClick={() => handleClickFavoriteBtn(_id)}
              className={styles.circBtn}
              SVGComponent={() => (
                <HeartIcon
                  className={
                    myFavoriteNotice
                      ? `${styles.icons} ${styles.favoriteIcon}`
                      : styles.icons
                  }
                />
              )}
            />
            {isMyAds && (
              <Button
                onClick={() => openModal()}
                className={styles.circBtn}
                SVGComponent={() => <TrashIcon className={styles.icons} />}
              />
            )}
          </div>
        </div>

        <div className={styles.noticeInfoBlock}>
          <div className={styles.tooltip}>
            <span className={styles.tooltiptext}>{location}</span>
            <p className={styles.locationInfo}>
              <LocationIcon className={styles.locationIcon} />
              {formattedLocation}
            </p>
          </div>
          <p className={styles.noticeInfo}>
            <ClockIcon className={styles.infoIcons} />
            {getAge(date)}
          </p>
          <p className={styles.noticeInfo}>
            {sex.toLowerCase() === 'male' && (
              <MaleIcon className={styles.infoIcons} />
            )}
            {sex.toLowerCase() === 'female' && (
              <FemaleIcon className={styles.infoIcons} />
            )}
            {sex}
          </p>
        </div>
      </div>
      <div className={styles.noticeDesc}>
        <h3 className={noticeTitle}>{title}</h3>
        <Button className={styles.learnBtn} onClick={() => loadMore(notice)}>
          Learn more
        </Button>
      </div>
      {isModalOpen && (
        <ModalApproveAction
          fn={() => handleDeleteNotice(_id)}
          closeModal={closeModal}
          icon={() => <TrashIcon className={styles.modalIcon} />}
        >
          <h3 className={styles.modalTitle}>Delete adverstiment?</h3>
          <p className={styles.modalText}>
            Are you sure you want to delete
            <span className={styles.modalTextSpan}> “{title}”</span>? <br /> You
            can't undo this action.
          </p>
        </ModalApproveAction>
      )}
    </li>
  );
};

export default NoticeCategoryItem;
