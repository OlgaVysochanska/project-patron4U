import { useNavigate } from 'react-router-dom';
import LogoIcon from 'icons/LogoIcon';
import LogoIconDark from 'icons/LogoIconDark';
import useTheme from 'shared/hooks/useTheme';
import styles from './Logo.module.scss';

export default function Logo({ isMobile }) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const navigateToMain = () => {
    navigate('/main');
  };

  return (
    <div className={styles.logo} onClick={navigateToMain}>
      {theme === 'light' ? (
        <LogoIcon isMobile={isMobile} />
      ) : (
        <LogoIconDark isMobile={isMobile} />
      )}
    </div>
  );
}
