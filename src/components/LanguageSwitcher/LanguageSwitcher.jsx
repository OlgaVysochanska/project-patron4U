import useLang from '../../shared/hooks/useLang';

import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();

  // const handleLanguageChange = e => {
  //   setLang(e.target.value);
  // };

  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.sl_nav}>
        <ul>
          <li>
            <span className={styles.wrapper}>
              {lang === 'eng' ? (
                <img
                  className={styles.wrapperIcon}
                  src="https://icons.iconarchive.com/icons/custom-icon-design/round-world-flags/48/United-kingdom-icon.png"
                  alt=""
                />
              ) : (
                <img
                  className={styles.wrapperIcon}
                  src="https://icons.iconarchive.com/icons/iconscity/flags/48/ukraine-icon.png"
                  alt=""
                />
              )}
            </span>
            <i
              className={`${styles.fa} ${styles.fa_angle_down}}`}
              aria-hidden="true"
            ></i>
            <div className={styles.triangle}></div>
            <ul>
              <li onClick={() => setLang('ua')}>
                <div className={styles.container}>
                  <img
                    className={styles.icon}
                    src="https://icons.iconarchive.com/icons/iconscity/flags/48/ukraine-icon.png"
                    alt=""
                  />
                </div>
                <span>Ukraine</span>
              </li>
              <li onClick={() => setLang('eng')} value="eng">
                <div className={styles.container}>
                  <img
                    className={styles.icon}
                    src="https://icons.iconarchive.com/icons/custom-icon-design/round-world-flags/48/United-kingdom-icon.png"
                    alt=""
                  />
                </div>
                <span className={styles.active}>English</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
