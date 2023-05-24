import useTheme from 'shared/hooks/useTheme';
import styles from './Title.module.scss';

export default function Title({ main, children }) {
  const { theme } = useTheme();

  const mainPageTitle =
    theme === 'light'
      ? styles.mainPageTitle
      : `${styles.mainPageTitle} + ${styles.mainPageTitleDark}`;

  const pageTitle =
    theme === 'light'
      ? styles.pageTitle
      : `${styles.pageTitle} + ${styles.pageTitleDark}`;
  return (
    <>
      {main && <h1 className={mainPageTitle}>{children}</h1>}
      {!main && <h2 className={pageTitle}>{children}</h2>}
    </>
  );
}
