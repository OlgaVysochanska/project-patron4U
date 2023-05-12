import Button from 'components/Button/Button';

import LocationIcon from 'icons/LocationIcon';
import ClockIcon from 'icons/ClockIcon';
import MaleIcon from 'icons/MaleIcon';
import FemaleIcon from 'icons/FemaleIcon';
// import PawprintIcon from 'icons/PawprintIcon';
import HeartIcon from 'icons/HeartIcon';

import styles from './NoticeCategoryItem.module.scss';
import image from '../pet.jpg';

const {
  noticeCard,
  imgThumb,
  avatar,
  topBlock,
  categoryInfo,
  favoriteBtn,
  noticeInfoBlock,
  noticeInfo,
  noticeDesc,
  icon,
  noticeTitle,
  learnBtn,
  //   learnBtnIcon,
} = styles;

export const NoticeCategoryItem = ({
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
}) => {
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
          <Button
            className={favoriteBtn}
            SVGComponent={() => (
              <HeartIcon color="#54ADFF" favorite={favorite} />
            )}
          >
            {favorite}
          </Button>
        </div>

        <div className={noticeInfoBlock}>
          <p className={noticeInfo}>
            <LocationIcon className={icon} color="#54ADFF" />
            {location}
          </p>
          <p className={noticeInfo}>
            <ClockIcon className={icon} color="#54ADFF" />
            {age === 1 ? '1 year' : `${age} years`}
          </p>
          <p className={noticeInfo}>
            {theSex.toLowerCase() === 'male' && (
              <MaleIcon className={icon} color="#54ADFF" />
            )}
            {theSex.toLowerCase() === 'female' && (
              <FemaleIcon className={icon} color="#54ADFF" />
            )}
            {theSex}
          </p>
        </div>
      </div>
      <div className={noticeDesc}>
        <h3 className={noticeTitle}>{titleOfAdd}</h3>
        <Button className={learnBtn}>Learn more</Button>
        {/* <PawprintIcon className={learnBtnIcon} color="red" /> */}
      </div>
    </li>
  );
};
