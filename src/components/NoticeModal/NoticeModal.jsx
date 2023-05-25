import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import useTheme from 'shared/hooks/useTheme';

import Contact from './Contact';
import AddToFavorite from './AddToFavorite/AddToFavorite';

import Button from 'shared/components/Button/Button';
import CrossIcon from 'icons/CrossIcon';

import { getUser, getFavoriteNotices } from 'redux/auth/authSelectors';

import styles from './NoticeModal.module.scss';

const NoticeModal = ({ notice, closeModal }) => {
  const { email, phone } = useSelector(getUser);
  const favoriteNotices = useSelector(getFavoriteNotices);
  const { theme } = useTheme();
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

  const modal =
    theme === 'light' ? styles.modal : `${styles.modal} + ${styles.modalDark}`;

  return (
    <>
      <div className={styles.backdrop} onClick={closeModalOnClick}>
        <div className={modal}>
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
                <caption
                  className={`${styles.title} ${
                    theme === 'dark' && styles.titleDark
                  }`}
                >
                  {title}
                </caption>
                <tbody>
                  <tr>
                    <td
                      className={`${styles.infoTitle} ${
                        theme === 'dark' && styles.infoTitleDark
                      }`}
                    >
                      Name:
                    </td>
                    <td
                      className={`${styles.info} ${
                        theme === 'dark' && styles.infoDark
                      }`}
                    >
                      {name}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`${styles.infoTitle} ${
                        theme === 'dark' && styles.infoTitleDark
                      }`}
                    >
                      Birthday:
                    </td>
                    <td
                      className={`${styles.info} ${
                        theme === 'dark' && styles.infoDark
                      }`}
                    >
                      {date}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`${styles.infoTitle} ${
                        theme === 'dark' && styles.infoTitleDark
                      }`}
                    >
                      Breed:
                    </td>
                    <td
                      className={`${styles.info} ${
                        theme === 'dark' && styles.infoDark
                      }`}
                    >
                      {breed}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`${styles.infoTitle} ${
                        theme === 'dark' && styles.infoTitleDark
                      }`}
                    >
                      Place:
                    </td>
                    <td
                      className={`${styles.info} ${
                        theme === 'dark' && styles.infoDark
                      }`}
                    >
                      {location}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`${styles.infoTitle} ${
                        theme === 'dark' && styles.infoTitleDark
                      }`}
                    >
                      The sex:
                    </td>
                    <td
                      className={`${styles.info} ${
                        theme === 'dark' && styles.infoDark
                      }`}
                    >
                      {sex}
                    </td>
                  </tr>
                  {price && (
                    <tr>
                      <td
                        className={`${styles.infoTitle} ${
                          theme === 'dark' && styles.infoTitleDark
                        }`}
                      >
                        Price:
                      </td>
                      <td
                        className={`${styles.info} ${
                          theme === 'dark' && styles.infoDark
                        }`}
                      >
                        {price}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td
                      className={`${styles.infoTitle} ${
                        theme === 'dark' && styles.infoTitleDark
                      }`}
                    >
                      Email:
                    </td>
                    <td>
                      <a href={`mailto:${email}`} className={styles.contacts}>
                        {email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`${styles.infoTitle} ${
                        theme === 'dark' && styles.infoTitleDark
                      }`}
                    >
                      Phone:
                    </td>
                    <td>
                      {phone ? (
                        <a
                          href={`tel:${phone}`}
                          className={`${styles.contacts} ${
                            theme === 'dark' && styles.contactsDark
                          }`}
                        >
                          {phone}
                        </a>
                      ) : (
                        <p
                          className={`${styles.info} ${
                            theme === 'dark' && styles.infoDark
                          }`}
                        >
                          no phone
                        </p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={styles.commentsInfo}>
              <span
                className={`${styles.commentsTitle} ${
                  theme === 'dark' && styles.commentsTitleDark
                }`}
              >
                Comments:{' '}
              </span>
              <span
                className={`${styles.commentsDesc} ${
                  theme === 'dark' && styles.commentsDescDark
                }`}
              >
                {' '}
                {comments}
              </span>
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
