import { useState, useEffect } from 'react';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import styles from './Header.module.scss';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

export default function Header() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1280
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      // setWindowWidth(window.innerWidth);
      setIsDesktop(window.innerWidth >= 1280);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.container}>
      <Logo isMobile={isMobile} />
      {!isMobile && <LanguageSwitcher />}
      {!isMobile && <ThemeSwitcher />}
      {/* {!isTablet && isMobile && <ThemeSwitcher />} */}
      <Navigation
        isDesktop={isDesktop}
        isTablet={isTablet}
        isMobile={isMobile}
      />
    </header>
  );
}
