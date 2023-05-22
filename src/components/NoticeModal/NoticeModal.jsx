import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Contact from './Contact';
import AddToFavorite from './AddToFavorite/AddToFavorite';

import Button from 'shared/components/Button/Button';
import CrossIcon from 'icons/CrossIcon';

import { getUser, getFavoriteNotices } from 'redux/auth/authSelectors';

import styles from './NoticeModal.module.scss';

const NoticeModal = ({ notice, closeModal }) => {
  const { email, phone } = useSelector(getUser);
  const favoriteNotices = useSelector(getFavoriteNotices);

  const {
    _id,
    category,
    title,
    name,
    date,
    breed,
    sex,
    location,
    price,
    comments,
    petURL,
  } = notice;

  let myFavoriteNotice = false;

  if (favoriteNotices) {
    myFavoriteNotice = favoriteNotices.includes(_id);
  }

  const closeModalOnClick = useCallback(
    ({ key, target, currentTarget }) => {
      if (key === 'Escape' || target === currentTarget) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnClick);
    return () => document.removeEventListener('keydown', closeModalOnClick);
  }, [closeModalOnClick]);

  return (
    <>
      <div className={styles.backdrop} onClick={closeModalOnClick}>
        <div className={styles.modal}>
          <Button className={styles.closeBtn} onClick={closeModal}>
            <CrossIcon className={styles.closeIcon} />
          </Button>
          <div className={styles.contentWrapper}>
            <div className={styles.tabletBox}>
              <div className={styles.imgThumb}>
                <p className={styles.categoryInfo}>{category}</p>
                <img
                  className={styles.avatar}
                  src={petURL}
                  alt="Pet's avatar"
                  width="280"
                />
              </div>
              <table>
                <caption className={styles.title}>{title}</caption>
                <tbody>
                  <tr>
                    <td className={styles.infoTitle}>Name:</td>
                    <td className={styles.info}>{name}</td>
                  </tr>
                  <tr>
                    <td className={styles.infoTitle}>Birthday:</td>
                    <td className={styles.info}>{date}</td>
                  </tr>
                  <tr>
                    <td className={styles.infoTitle}>Breed:</td>
                    <td className={styles.info}>{breed}</td>
                  </tr>
                  <tr>
                    <td className={styles.infoTitle}>Place:</td>
                    <td className={styles.info}>{location}</td>
                  </tr>
                  <tr>
                    <td className={styles.infoTitle}>The sex:</td>
                    <td className={styles.info}>{sex}</td>
                  </tr>
                  {price && (
                    <tr>
                      <td className={styles.infoTitle}>Price:</td>
                      <td className={styles.info}>{price}</td>
                    </tr>
                  )}
                  <tr>
                    <td className={styles.infoTitle}>Email:</td>
                    <td>
                      <a href={`mailto:${email}`} className={styles.contacts}>
                        {email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.infoTitle}>Phone:</td>
                    <td>
                      {phone ? (
                        <a href={`tel:${phone}`} className={styles.contacts}>
                          {phone}
                        </a>
                      ) : (
                        <p className={styles.info}>no phone</p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={styles.commentsInfo}>
              <span className={styles.commentsTitle}>Comments: </span>
              {comments}
            </p>
            <div className={styles.btnWrapper}>
              <Contact email={email} />
              <AddToFavorite myFavoriteNotice={myFavoriteNotice} _id={_id} />
            </div>
          </div>
        </div>
      </div>
      , modalEl
    </>
  );
};

export default NoticeModal;
