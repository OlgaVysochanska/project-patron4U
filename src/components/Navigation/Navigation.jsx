import { useState, useEffect } from 'react';
import Nav from 'components/Nav/Nav';
import UserNav from 'components/UserNav/UserNav';
import AuthNav from 'components/AuthNav/AuthNav';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import HamburgerIcon from 'icons/HamburgerIcon';
import styles from './Navigation.module.scss';

export default function Navigation({ isDesktop, isTablet, isMobile }) {
  const userLoggedIn = false; // change to useSelector
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (isDesktop) {
      setShowMobileMenu(false);
    }
  }, [isDesktop]);

  const toggleMobileMenu = () => {
    setShowMobileMenu(showMobileMenu => !showMobileMenu);
  };

  return (
    <div className={styles.navigation}>
      {isDesktop && (
        <>
          <Nav />
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
        <MobileMenu onClick={toggleMobileMenu} isMobile={isMobile}>
          {userLoggedIn && isMobile && (
            <UserNav style={{ marginTop: 40, marginBottom: 84 }} />
          )}
          {!userLoggedIn && isMobile && <AuthNav />}
          <Nav />
        </MobileMenu>
      )}
    </div>
  );
}
