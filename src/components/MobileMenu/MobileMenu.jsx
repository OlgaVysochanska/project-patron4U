import { createPortal } from 'react-dom';
import Logo from 'components/Logo/Logo';
import CrossIcon from 'icons/CrossIcon';
import styles from './MobileMenu.module.scss';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

export default function MobileMenu({ children, onClick, isMobile }) {
  return createPortal(
    <div className={styles.mobileMenu}>
      <div className={styles.head}>
        <Logo isMobile={isMobile} />
        <LanguageSwitcher />
        <ThemeSwitcher />
        <CrossIcon className={styles.closeButton} onClick={onClick} />
      </div>
      {children}
    </div>,
    document.querySelector('#modal-root')
  );
}
