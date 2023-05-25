import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/authSelectors.js';
import Nav from 'components/Nav/Nav';
import UserNav from 'components/UserNav/UserNav';
import AuthNav from 'components/AuthNav/AuthNav';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import HamburgerIcon from 'icons/HamburgerIcon';
import styles from './Navigation.module.scss';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

export default function Navigation({ isDesktop, isTablet, isMobile }) {
  const userLoggedIn = useSelector(isUserLogin);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (isDesktop) {
      setShowMobileMenu(false);
    }
  }, [isDesktop]);

  const toggleMobileMenu = e => {
    e.preventDefault();
    setShowMobileMenu(showMobileMenu => !showMobileMenu);
  };

  return (
    <div className={styles.navigation}>
      {isDesktop && (
        <>
          <Nav />
          <div className={styles.wrapper}>
            {!isMobile && !isTablet && <ThemeSwitcher />}
            {!isMobile && !isTablet && <LanguageSwitcher />}
          </div>
          {userLoggedIn ? <UserNav /> : <AuthNav />}
        </>
      )}

      {(isTablet || isMobile) && (
        <>
          {!userLoggedIn && isTablet && <AuthNav />}
          {userLoggedIn && <UserNav isMobile={isMobile} />}
          <HamburgerIcon className={styles.burger} onClick={toggleMobileMenu} />
        </>
      )}
      {showMobileMenu && (
        <MobileMenu
          className="test"
          onClick={toggleMobileMenu}
          isMobile={isMobile}
        >
          {userLoggedIn && isMobile && (
            <UserNav
              style={{ marginTop: 40, marginBottom: 84 }}
              onClick={toggleMobileMenu}
            />
          )}

          {!userLoggedIn && isMobile && <AuthNav onClick={toggleMobileMenu} />}
          <Nav onClick={toggleMobileMenu} />
        </MobileMenu>
      )}
    </div>
  );
}
