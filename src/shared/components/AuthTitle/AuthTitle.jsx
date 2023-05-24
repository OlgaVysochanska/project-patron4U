import PropTypes from 'prop-types';
import useTheme from 'shared/hooks/useTheme';

import styles from './AuthTitle.module.scss';

const AuthTitle = ({ text }) => {
  const { theme } = useTheme();

  const title =
    theme === 'light' ? styles.title : `${styles.title} + ${styles.titleDark}`;
  return <h2 className={title}>{text}</h2>;
};

AuthTitle.propTypes = {
  text: PropTypes.string,
};

export default AuthTitle;
