import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import useTheme from 'shared/hooks/useTheme';

import Contact from './Contact';
import AddToFavorite from './AddToFavorite/AddToFavorite';

import Button from 'shared/components/Button/Button';
import CrossIcon from 'icons/CrossIcon';

import { getFavoriteNotices } from 'redux/auth/authSelectors';

import styles from './NoticeModal.module.scss';

const NoticeModal = ({ notice, owner, closeModal }) => {
  const favoriteNotices = useSelector(getFavoriteNotices);
  const { theme } = useTheme();

  let myFavoriteNotice = false;

  if (favoriteNotices) {
    myFavoriteNotice = favoriteNotices.includes(notice._id);
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
                <p className={styles.categoryInfo}>{notice.category}</p>
                <img
                  className={styles.avatar}
                  src={notice.petURL}
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
                  {notice.title}
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
                      {notice.name}
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
                      {notice.date.replaceAll('-', '.')}
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
                      {notice.breed}
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
                      {notice.location}
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
                      {notice.sex}
                    </td>
                  </tr>
                  {notice.price && (
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
                        {notice.price}
                      </td>
                    </tr>
                  )}
                  {owner.name && (
                    <tr>
                      <td
                        className={`${styles.infoTitle} ${
                          theme === 'dark' && styles.infoTitleDark
                        }`}
                      >
                        Owner:
                      </td>
                      <td>{owner.name}</td>
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
                      <a
                        href={`mailto:${owner.email}`}
                        className={styles.contacts}
                      >
                        {owner.email}
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
                      {owner.phone ? (
                        <a
                          href={`tel:${owner.phone}`}
                          className={`${styles.contacts} ${
                            theme === 'dark' && styles.contactsDark
                          }`}
                        >
                          {owner.phone}
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
                {notice.comments}
              </span>
            </p>
            <div className={styles.btnWrapper}>
              <Contact phone={owner.phone} />
              <AddToFavorite
                myFavoriteNotice={myFavoriteNotice}
                _id={notice._id}
              />
            </div>
          </div>
        </div>
      </div>
      , modalEl
    </>
  );
};

export default NoticeModal;
