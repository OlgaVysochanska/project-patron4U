import { createPortal } from 'react-dom';
import Logo from 'components/Logo/Logo';
import CrossIcon from 'icons/CrossIcon';
import styles from './MobileMenu.module.scss';

export default function MobileMenu({ children, onClick, isMobile }) {
  return createPortal(
    <div className={styles.mobileMenu}>
      <div className={styles.head}>
        <Logo isMobile={isMobile} />
        <CrossIcon className={styles.closeButton} onClick={onClick} />
      </div>
      {children}
    </div>,
    document.querySelector('#modal-root')
  );
}
