import styles from './AuthButton.module.scss';

const AuthButton = ({ children, type = 'submit', disabled = true }) => {
  return (
    <button type={type} className={styles.btn} disabled={disabled}>
      {children}
    </button>
  );
};

export default AuthButton;
