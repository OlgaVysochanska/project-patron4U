import { useSelector } from 'react-redux';

import Button from 'shared/components/Button/Button';

import LocationIcon from 'icons/LocationIcon';
import ClockIcon from 'icons/ClockIcon';
import MaleIcon from 'icons/MaleIcon';
import FemaleIcon from 'icons/FemaleIcon';
import HeartIcon from 'icons/HeartIcon';
import TrashIcon from 'icons/TrashIcon';

import { isUserLogin } from 'redux/auth/authSelectors';

import styles from './NoticeCategoryItem.module.scss';

const NoticeCategoryItem = ({ notice, loadMore }) => {
  const {
    _id,
    openModal,
    category,
    favorite,
    title,
    name,
    date,
    breed,
    sex,
    location,
    price,
    comments,
    petURL,
    isMyAds,
  } = notice;

  const isLogin = useSelector(isUserLogin);
  // const isLogin = true;

  function getAge(date) {
    const ymdArr = date.split('.').map(Number).reverse();
    //с 0а идут месяца по этому откатываем на 1
    ymdArr[1]--;
    const bornDate = new Date(...ymdArr);

    const now = new Date();

    const leapYears = (now.getFullYear() - ymdArr[0]) / 4;

    now.setDate(now.getDate() - Math.floor(leapYears));

    const nowAsTimestamp = now.getTime();
    const bornDateAsTimestamp = bornDate.getTime();

    const ageAsTimestamp = nowAsTimestamp - bornDateAsTimestamp;

    //взял с браузера
    const oneYearInMs = 3.17098e-11;

    const age = Math.floor(ageAsTimestamp * oneYearInMs);
    // console.log(age);
    return age;
  }

  const age = getAge(date.replaceAll('-', '.'));

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
              className={styles.circBtn}
              SVGComponent={() => (
                <HeartIcon
                  className={
                    styles.favorite
                      ? `${styles.icons} ${styles.favoriteIcon}`
                      : styles.icons
                  }
                />
              )}
            />
            {isMyAds && (
              <Button
                className={styles.circBtn}
                SVGComponent={() => <TrashIcon className={styles.icons} />}
              />
            )}
          </div>
        </div>

        <div className={styles.noticeInfoBlock}>
          <p className={styles.locationInfo}>
            <LocationIcon className={styles.locationIcon} />
            {location}
          </p>
          <p className={styles.noticeInfo}>
            <ClockIcon className={styles.infoIcons} />
            {age === 1 || age === 0 ? '1 year' : `${age} years`}
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
    </li>
  );
};

export default NoticeCategoryItem;
