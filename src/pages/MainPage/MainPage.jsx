import React, { useState, useEffect } from 'react';
import scss from './MainPage.module.scss';

import bgImgMob from '../../images/bg_320x601(543).png';
import bgImgTab from '../../images/bg_768x1193(1125).png';
import bgImgDes from '../../images/bg_1280x770(708).png';
import bDogMob1x from '../../images/blue_dog_mobile_1x.jpg';
import bDogTab1x from '../../images/blue_dog_tablet_1x.jpg';
import bDogDes1x from '../../images/blue_dog_desktop_1x.jpg';
import yDogMob1x from '../../images/yellow_dog_mobile_1x.jpg';
import yDogTab1x from '../../images/yellow_dog_tablet_1x.jpg';
import yDogDes1x from '../../images/yellow_dog_desktop_1x.jpg';
import catMob1x from '../../images/cat_mobile_1x.jpg';
import catTab1x from '../../images/cat_tablet_1x.jpg';
import catDes1x from '../../images/cat_desktop_1x.jpg';

const MainPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getImageBG = () => {
    if (screenWidth < 768) {
      return bgImgMob;
    } else if (screenWidth >= 768 && screenWidth < 1200) {
      return bgImgTab;
    } else {
      return bgImgDes;
    }
  };
  const getImageBDog = () => {
    if (screenWidth < 768) {
      return bDogMob1x;
    } else if (screenWidth >= 768 && screenWidth < 1200) {
      return bDogTab1x;
    } else {
      return bDogDes1x;
    }
  };
  const getImageYDog = () => {
    if (screenWidth < 768) {
      return yDogMob1x;
    } else if (screenWidth >= 768 && screenWidth < 1200) {
      return yDogTab1x;
    } else {
      return yDogDes1x;
    }
  };
  const getImageCat = () => {
    if (screenWidth < 768) {
      return catMob1x;
    } else if (screenWidth >= 768 && screenWidth < 1200) {
      return catTab1x;
    } else {
      return catDes1x;
    }
  };

  return (
    <>
      <img
        className={scss.bg}
        src={getImageBG()}
        alt="blue dog"
        loading="lazy"
      />
      <div className={scss.screen}>
        <img
          className={scss.bDog}
          src={getImageBDog()}
          alt="blue dog"
          loading="lazy"
        />
        <img
          className={scss.yDog}
          src={getImageYDog()}
          alt="yellow dog"
          loading="lazy"
        />
        <img
          className={scss.cat}
          src={getImageCat()}
          alt="cat"
          loading="lazy"
        />
        <h1 className={scss.title}>Take good care of your small pets</h1>
      </div>
    </>
  );
};

export default MainPage;
