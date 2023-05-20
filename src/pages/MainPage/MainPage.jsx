import React, { useState, useEffect } from 'react';
import Background from '../../shared/components/Background/Background';
import scss from './MainPage.module.scss';
import Logout from 'components/User/Logout';

import petsMob1x from '../../images/pets_mob_1x.png';
import petsMob2x from '../../images/pets_mob_2x.png';
import petsTab1x from '../../images/pets_tab_1x.png';
import petsTab2x from '../../images/pets_tab_2x.png';
import petsDes1x from '../../images/pets_des_1x.png';
import petsDes2x from '../../images/pets_des_2x.png';

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

  const getImage = () => {
    if (screenWidth < 768 && window.devicePixelRatio === 1) {
      return petsMob1x;
    } else if (screenWidth < 768 && window.devicePixelRatio === 2) {
      return petsMob2x;
    } else if (
      screenWidth >= 768 &&
      screenWidth < 1200 &&
      window.devicePixelRatio === 1
    ) {
      return petsTab1x;
    } else if (
      screenWidth >= 768 &&
      screenWidth < 1200 &&
      window.devicePixelRatio === 2
    ) {
      return petsTab2x;
    } else if (window.devicePixelRatio === 1) {
      return petsDes1x;
    } else if (window.devicePixelRatio === 2) {
      return petsDes2x;
    }
  };

  return (
    <>
      <Background />
      <div className={scss.screen}>
        <Logout />
        <img className={scss.pets} src={getImage()} alt="pets" loading="lazy" />
        <h1 className={scss.title}>Take good care of your small pets</h1>
      </div>
    </>
  );
};

export default MainPage;
