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
import image from '../pet.jpg';

const {
  noticeCard,
  imgThumb,
  avatar,
  topBlock,
  icons,
  favoriteIcon,
  infoIcons,
  categoryInfo,
  circBtn,
  noticeInfoBlock,
  noticeInfo,
  locationInfo,
  noticeDesc,
  locationIcon,
  noticeTitle,
  learnBtn,
} = styles;

const NoticeCategoryItem = ({
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
  //   image,
  isMyAds,
}) => {
  const isLogin = useSelector(isUserLogin);
  // const isLogin = true;

  function getAge(dateOfBirth) {
    const ymdArr = dateOfBirth.split('.').map(Number).reverse();
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

  const age = getAge(dateOfBirth);

  return (
    <li className={noticeCard}>
      <div className={imgThumb}>
        <img className={avatar} src={image} alt="Pet's avatar" width="280" />
        <div className={topBlock}>
          <p className={categoryInfo}>{category}</p>
          <div>
            <Button
              className={circBtn}
              SVGComponent={() => (
                <HeartIcon
                  className={favorite ? `${icons} ${favoriteIcon}` : icons}
                />
              )}
            />
            {isMyAds && (
              <Button
                className={circBtn}
                SVGComponent={() => <TrashIcon className={icons} />}
              />
            )}
          </div>
        </div>

        <div className={noticeInfoBlock}>
          <p className={locationInfo}>
            <LocationIcon className={locationIcon} />
            {location}
          </p>
          <p className={noticeInfo}>
            <ClockIcon className={infoIcons} />
            {age === 1 ? '1 year' : `${age} years`}
          </p>
          <p className={noticeInfo}>
            {theSex.toLowerCase() === 'male' && (
              <MaleIcon className={infoIcons} />
            )}
            {theSex.toLowerCase() === 'female' && (
              <FemaleIcon className={infoIcons} />
            )}
            {theSex}
          </p>
        </div>
      </div>
      <div className={noticeDesc}>
        <h3 className={noticeTitle}>{titleOfAdd}</h3>
        <Button className={learnBtn}>Learn more</Button>
      </div>
    </li>
  );
};

export default NoticeCategoryItem;
