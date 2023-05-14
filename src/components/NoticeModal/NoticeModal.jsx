import { useState } from 'react';
import ModalApproveAction from 'shared/components/ModalApproveAction/ModalApprovAction';
import Button from 'shared/components/Button/Button';
import CrossSmallIcon from 'icons/CrossSmallIcon';

import styles from './NoticeModal.module.scss';
import image from '../Notices/pet.jpg';

const NoticeModal = ({ notice }) => {
  const {
    id,
    category,
    favorite,
    titleOfAdd,
    namePet,
    dateOfBirth,
    breed,
    theSex,
    location,
    price,
    comments,
    isMyAds,
    email,
    phone,
  } = notice;
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <ModalApproveAction
          closeModal={closeModal}
          className={styles.modalWindow}
        >
          <div className={styles.imgThumb}>
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
        </ModalApproveAction>
      )}
    </>
  );
};

export default NoticeModal;
