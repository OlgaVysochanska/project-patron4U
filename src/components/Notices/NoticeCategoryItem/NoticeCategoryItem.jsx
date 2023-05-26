import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useLang from 'shared/hooks/useLang';
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

import locale from './locale.json';

import styles from './NoticeCategoryItem.module.scss';

const NoticeCategoryItem = ({ notice, loadMore }) => {
  const { lang } = useLang();
  const learnMore = locale.learnMore[lang];
  const modalTitle = locale.modalTitle[lang];
  const modalText1 = locale.modalText1[lang];
  const modalText2 = locale.modalText2[lang];

  const [searchParams] = useSearchParams();

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
    location.length >= 8 ? location.slice(0, 5) + ' ...' : location;

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
          {formattedLocation.length >= 8 ? (
            <div className={styles.tooltip}>
              <span className={styles.tooltiptext}>{location}</span>
              <p className={styles.noticeInfo}>
                <LocationIcon className={styles.infoIcons} />
                {formattedLocation}
              </p>
            </div>
          ) : (
            <p className={styles.noticeInfo}>
              <LocationIcon className={styles.infoIcons} />
              {formattedLocation}
            </p>
          )}
          <p
            className={
              searchParams.get('age')
                ? styles.activeInfoBlock
                : styles.noticeInfo
            }
          >
            <ClockIcon
              className={
                searchParams.get('age')
                  ? styles.activeInfoIcon
                  : styles.infoIcons
              }
            />
            {getAge(date)}
          </p>
          <p
            className={
              searchParams.get('gender')
                ? styles.activeInfoBlock
                : styles.noticeInfo
            }
          >
            {sex.toLowerCase() === 'male' && (
              <MaleIcon
                className={
                  searchParams.get('gender')
                    ? styles.activeInfoIcon
                    : styles.infoIcons
                }
              />
            )}
            {sex.toLowerCase() === 'female' && (
              <FemaleIcon
                className={
                  searchParams.get('gender')
                    ? styles.activeInfoIcon
                    : styles.infoIcons
                }
              />
            )}
            {sex}
          </p>
        </div>
      </div>
      <div className={styles.noticeDesc}>
        <h3 className={noticeTitle}>{title}</h3>
        <Button className={styles.learnBtn} onClick={() => loadMore(notice)}>
          {learnMore}
        </Button>
      </div>
      {isModalOpen && (
        <ModalApproveAction
          fn={() => handleDeleteNotice(_id)}
          closeModal={closeModal}
          icon={() => <TrashIcon className={styles.modalIcon} />}
        >
          <h3 className={styles.modalTitle}>{modalTitle}</h3>
          <p className={styles.modalText}>
            {modalText1}
            <span className={styles.modalTextSpan}> “{title}”</span>? <br />
            {modalText2}
          </p>
        </ModalApproveAction>
      )}
    </li>
  );
};

export default NoticeCategoryItem;
