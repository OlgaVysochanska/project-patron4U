import React, { useState, useEffect } from 'react';
import scss from './Background.module.scss';

import bgImgMob from '../../../images/bg_320x601(543).png';
import bgImgTab from '../../../images/bg_768x1193(1125).png';
import bgImgDes from '../../../images/bg_1280x770(708).png';

const Background = () => {
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

  return (
    <>
      <img
        className={scss.bg}
        src={getImageBG()}
        alt="back ground"
        loading="lazy"
      />
    </>
  );
};

export default Background;
