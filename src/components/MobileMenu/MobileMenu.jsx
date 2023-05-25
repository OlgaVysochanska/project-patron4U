import { createPortal } from 'react-dom';
import Logo from 'components/Logo/Logo';
import CrossIcon from 'icons/CrossIcon';
import styles from './MobileMenu.module.scss';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import useTheme from 'shared/hooks/useTheme';

export default function MobileMenu({ children, onClick, isMobile }) {
  const { theme } = useTheme();
  console.log(theme);

  const mobileMenu =
    theme === 'light'
      ? styles.mobileMenu
      : `${styles.mobileMenu} + ${styles.mobileMenuDark}`;

  return createPortal(
    <div className={mobileMenu}>
      <div className={styles.head}>
        <div onClick={onClick}>
          <Logo isMobile={isMobile} />
        </div>

        <CrossIcon className={styles.closeButton} onClick={onClick} />
      </div>
      {children}
      <div className={styles.wrapper}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
}
