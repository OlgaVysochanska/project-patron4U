import { useState, useEffect } from 'react';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import styles from './Header.module.scss';

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
      setIsDesktop(window.innerWidth >= 1280);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
      setIsMobile(window.innerWidth < 768);
    };

    // console.log('isDesktop', isDesktop);
    // console.log('isTablet', isTablet);
    // console.log('isMobile', isMobile);
    // console.log(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop, isMobile, isTablet]);

  const container =
    theme === 'light'
      ? styles.container
      : `${styles.container} + ${styles.containerDark}`;

  return (
    <header className={container}>
      <Logo isMobile={isMobile} />

      <Navigation
        isDesktop={isDesktop}
        isTablet={isTablet}
        isMobile={isMobile}
      />
    </header>
  );
}
