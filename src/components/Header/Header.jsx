import { useState, useEffect } from 'react';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import styles from './Header.module.scss';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import useTheme from 'shared/hooks/useTheme';

export default function Header() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1280
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { theme } = useTheme();

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

  const container =
    theme === 'light'
      ? styles.container
      : `${styles.container} + ${styles.containerDark}`;

  return (
    <header className={container}>
      <Logo isMobile={isMobile} />

      {/* {!isTablet && isMobile && <ThemeSwitcher />} */}
      <Navigation
        isDesktop={isDesktop}
        isTablet={isTablet}
        isMobile={isMobile}
      />
      <div className={styles.wrapper}>
        {!isMobile && !isTablet && <LanguageSwitcher />}
        {!isMobile && !isTablet && <ThemeSwitcher />}
      </div>
    </header>
  );
}
