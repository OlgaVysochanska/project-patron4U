// import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';

// import Modal from 'shared/components/Modal';
import Contact from './Contact';
import AddToFavorite from './AddToFavorite';

import styles from './NoticeModal.module.scss';
import image from '../Notices/pet.jpg';

const NoticeModal = ({ notice }) => {
  const {
    namePet,
    category,
    dateOfBirth,
    breed,
    theSex,
    location,
    comments,
    email,
    price,
    phone,
  } = notice;

  //   const { isModalOpen, closeModal } = useToggleModalWindow();

  return (
    <>
      {/* {isModalOpen && ( */}
      {/* <Modal closeModal={closeModal}> */}
      <div className={styles.contentWrapper}>
        <div className={styles.tabletBox}>
          <div className={styles.imgThumb}>
            <p className={styles.categoryInfo}>{category}</p>
            <img
              className={styles.avatar}
              src={image}
              alt="Pet's avatar"
              width="280"
            />
          </div>
          <table>
            <caption className={styles.title}>
              Сute dog looking for a home
            </caption>
            <tbody>
              <tr>
                <td className={styles.infoTitle}>Name:</td>
                <td className={styles.info}>{namePet}</td>
              </tr>
              <tr>
                <td className={styles.infoTitle}>Birthday:</td>
                <td className={styles.info}>{dateOfBirth}</td>
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
                <td className={styles.info}>{theSex}</td>
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
                  <a href={`tel:${phone}`} className={styles.contacts}>
                    {phone}
                  </a>
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
          <Contact phone={phone} />
          <AddToFavorite />
        </div>
      </div>
      {/* </Modal> */}
      {/* )} */}
    </>
  );
};

export default NoticeModal;
