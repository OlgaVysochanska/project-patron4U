import useTheme from 'shared/hooks/useTheme';
import { useState, useEffect } from 'react';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const [isChecked, setIsChecked] = useState(true);
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(isChecked ? 'light' : 'dark');
  }, [isChecked, setTheme]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id="hide_checkbox"
        className={styles.hide_checkbox}
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
      <label htmlFor="hide_checkbox" className={styles.toggle}>
        <span className={styles.toggle_button}>
          <span className={`${styles.crater} ${styles.crater_1}`}></span>
          <span className={`${styles.crater} ${styles.crater_2}`}></span>
          <span className={`${styles.crater} ${styles.crater_3}`}></span>
          <span className={`${styles.crater} ${styles.crater_4}`}></span>
          <span className={`${styles.crater} ${styles.crater_5}`}></span>
          <span className={`${styles.crater} ${styles.crater_6}`}></span>
          <span className={`${styles.crater} ${styles.crater_7}`}></span>
        </span>
        <span className={`${styles.star} ${styles.star_1}`}></span>
        <span className={`${styles.star} ${styles.star_2}`}></span>
        <span className={`${styles.star} ${styles.star_3}`}></span>
        <span className={`${styles.star} ${styles.star_4}`}></span>
        <span className={`${styles.star} ${styles.star_5}`}></span>
        <span className={`${styles.star} ${styles.star_6}`}></span>
        <span className={`${styles.star} ${styles.star_7}`}></span>
        <span className={`${styles.star} ${styles.star_8}`}></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
