import styles from './AuthButton.module.scss';

const AuthButton = ({ children, type = 'submit' }) => {
  return (
    <button type={type} className={styles.btn}>
      {children}
    </button>
  );
};

export default AuthButton;
