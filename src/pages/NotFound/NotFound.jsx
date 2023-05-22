import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../shared/components/Button';
import PawprintIcon from '../../icons/PawprintIcon';
import styles from './NotFound.module.scss';

import bgImgMob from '../../images/bg_320x601(543).png';
import bgImgTab from '../../images/bg_768x1193(1125).png';
import bgImgDes from '../../images/bg_1280x770(708).png';

import catMobx1 from '../../images/cat_1x_mobile.png';
import catMobx2 from '../../images/cat_2x_mobila.png';
import catTabx1 from '../../images/cat_1x_tablet.png';
import catTabx2 from '../../images/cat_2x_tablet.png';
import catDesc1 from '../../images/cat_1x_laptop.png';
import catDesc2 from '../../images/cat_2x_laptop.png';

const NotFoundPage = () => {
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
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      return bgImgTab;
    } else {
      return bgImgDes;
    }
  };

  // const getImage = () => {
  //   if (screenWidth < 768 && window.devicePixelRatio === 1) {
  //     return catMobx1;
  //   } else if (screenWidth < 768 && window.devicePixelRatio === 2) {
  //     return catMobx2;
  //   } else if (
  //     screenWidth >= 768 &&
  //     screenWidth < 1280 &&
  //     window.devicePixelRatio === 1
  //   ) {
  //     return catTabx1;
  //   } else if (
  //     screenWidth >= 768 &&
  //     screenWidth < 1280 &&
  //     window.devicePixelRatio === 2
  //   ) {
  //     return catTabx2;
  //   } else if (screenWidth >= 1280 && window.devicePixelRatio === 1) {
  //     return catDesc1;
  //   } else if (screenWidth >= 1280 && window.devicePixelRatio === 2) {
  //     return catDesc2;
  //   }
  // };

  const getImage = () => {
    if (screenWidth < 768) {
      return catMobx1;
    } else if (screenWidth) {
      return catMobx2;
    } else if (
      screenWidth >= 768 &&
      screenWidth < 1280 &&
      window.devicePixelRatio === 1
    ) {
      return catTabx1;
    } else if (
      screenWidth >= 768 &&
      screenWidth < 1280 &&
      window.devicePixelRatio === 2
    ) {
      return catTabx2;
    } else if (screenWidth >= 1280) {
      return catDesc1;
    } else if (screenWidth >= 1280) {
      return catDesc2;
    }
  };

  return (
    <>
      <img
        className={styles.bg}
        src={getImageBG()}
        alt="back ground"
        loading="lazy"
      />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Ooops! This page not found :(</h2>
        <img className={styles.img} src={getImage()} alt="cat" loading="lazy" />
        <Button className={styles.button}>
          <NavLink to="/main" className={styles.navlink}>
            To main page
          </NavLink>
          <PawprintIcon className={styles.btnIcon} />
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
