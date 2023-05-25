import useLang from 'shared/hooks/useLang';

import ArrowUpIcon from 'icons/ArrowUpIcon';

import locale from './locale.json';

import styles from './EmptyList.module.scss';

const EmptyList = () => {
  const { lang } = useLang();
  const infoDesc = locale.info[lang];

  return (
    <div className={styles.emptyCard}>
      <ArrowUpIcon className={styles.arrowIcon} />
      <p className={styles.infoDesc}>{infoDesc}</p>
    </div>
  );
};

export default EmptyList;
