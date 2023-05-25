import ArrowUpIcon from 'icons/ArrowUpIcon';

import styles from './EmptyList.module.scss';

const EmptyList = () => {
  return (
    <div className={styles.emptyCard}>
      <ArrowUpIcon className={styles.arrowIcon} />
      <p className={styles.infoDesc}>Your pets list is empty...</p>
    </div>
  );
};

export default EmptyList;
