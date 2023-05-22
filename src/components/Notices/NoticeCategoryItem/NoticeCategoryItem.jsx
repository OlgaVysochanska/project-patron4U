import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

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

import { fetchToggleFavoriteNotice } from 'redux/auth/authOperations';
import { fetchDeleteNotice } from 'redux/notices/noticesOperations';
import { isUserLogin, getFavoriteNotices } from 'redux/auth/authSelectors';

import styles from './NoticeCategoryItem.module.scss';

const NoticeCategoryItem = ({ notice, loadMore }) => {
  const currentUser = useSelector(isUserLogin);

  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();

  const dispatch = useDispatch();

  const { _id, category, title, date, sex, location, petURL } = notice;

  const favoriteNotices = useSelector(getFavoriteNotices);

  let myFavoriteNotice = false;

  if (favoriteNotices) {
    myFavoriteNotice = favoriteNotices.includes(_id);
  }

  const formattedLocation =
    location.length >= 10 ? location.slice(0, 5) + ' ...' : location;

  const handleClickFavoriteBtn = id => {
    if (!currentUser) {
      NotiflixMessage({ type: 'info', data: 'Register or login, please!' });
      return;
    }
    try {
      dispatch(fetchToggleFavoriteNotice(id));
      // setIsFavorite(!isFavorite);
      NotiflixMessage({
        type: 'success',
        data: !myFavoriteNotice
          ? 'Notice added to favorite successfully!'
          : 'Notice deleted from favorite successfully!',
      });
    } catch (error) {
      NotiflixMessage({
        type: 'failure',
        data: error.message,
      });
    }
  };

  const isMyAds = false;

  const getAge = bd => {
    const birthDate = moment(bd, 'DD-MM-YYYY');
    const currentDate = moment();

    const yearsDiff = currentDate.diff(birthDate, 'years');
    const monthsDiff = currentDate.diff(birthDate, 'month') % 12;
    const totalMonths = yearsDiff * 12 + monthsDiff;
    const daysDiff = currentDate.diff(birthDate, 'days') % 31;

    if (totalMonths === 1) {
      return `${totalMonths} month`;
    }

    if (totalMonths !== 0 && totalMonths < 12) {
      return `${totalMonths} months`;
    }

    if (totalMonths >= 12 && totalMonths < 24) {
      return `1 year`;
    }

    if (totalMonths === 0 && daysDiff === 1) {
      return `1 day`;
    }

    if (totalMonths === 0 && daysDiff > 1) {
      return `${daysDiff} days`;
    }

    return `${yearsDiff} years`;
  };

  const handleDeleteNotice = id => {
    dispatch(fetchDeleteNotice(id));
    closeModal();
  };

  return (
    <li className={styles.noticeCard}>
      <div className={styles.imgThumb}>
        <img
          className={styles.avatar}
          src={petURL}
          alt="Pet's avatar"
          width="280"
        />
        <div className={styles.topBlock}>
          <p className={styles.categoryInfo}>{category}</p>
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
        <h3 className={styles.noticeTitle}>{title}</h3>
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
