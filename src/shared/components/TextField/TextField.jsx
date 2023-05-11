import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from 'react';

import styles from './textField.module.scss';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={styles.inputItem}>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.field}
        id={id}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default TextField;