import styles from './Title.module.scss';

export default function Title({ main, children }) {
  return (
    <>
      {main && <h1 className={styles.mainPageTitle}>{children}</h1>}
      {!main && <h2 className={styles.pageTitle}>{children}</h2>}
    </>
  );
}
