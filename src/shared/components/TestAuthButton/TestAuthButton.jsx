import styles from './TestAuthButton.module.scss';

const TestAuthButton = ({ children, type = 'submit' }) => {
  return (
    <button type={type} className={styles.btn}>
      {children}
    </button>
  );
};

export default TestAuthButton;
