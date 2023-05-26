import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import useLang from 'shared/hooks/useLang';
import useTheme from 'shared/hooks/useTheme';

import Contact from './Contact';
import AddToFavorite from './AddToFavorite/AddToFavorite';

import Button from 'shared/components/Button/Button';
import CrossIcon from 'icons/CrossIcon';

import { getFavoriteNotices } from 'redux/auth/authSelectors';

import locale from './locale.json';

import styles from './NoticeModal.module.scss';

const NoticeModal = ({ notice, owner, closeModal }) => {
  const { theme } = useTheme();

  const { lang } = useLang();
  const petName = locale.petName[lang];
  const birthday = locale.birthday[lang];
  const breed = locale.breed[lang];
  const place = locale.place[lang];
  const sex = locale.sex[lang];
  const price = locale.price[lang];
  const ownerName = locale.owner[lang];
  const email = locale.email[lang];
  const phone = locale.phone[lang];
  const noPhone = locale.noPhone[lang];
  const сomments = locale.сomments[lang];

  const favoriteNotices = useSelector(getFavoriteNotices);

  let myFavoriteNotice = false;

  if (favoriteNotices) {
    myFavoriteNotice = favoriteNotices.includes(notice._id);
  }

  const categoryForUser = category => {
    if (notice.category === 'lost-found') return 'lost/found';
    if (notice.category === 'for-free') return 'in good hands';
    return notice.category;
  };

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
                <p className={styles.categoryInfo}>
                  {categoryForUser(notice.category)}
                </p>
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
                      {petName}
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
                      {birthday}
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
                      {breed}
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
                      {place}
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
                      {sex}
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
                        {price}
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
                        {ownerName}
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
                      {email}
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
                      {phone}
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
                          {noPhone}
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
                {сomments}
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
