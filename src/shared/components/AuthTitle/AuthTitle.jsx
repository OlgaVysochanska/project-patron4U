import PropTypes from 'prop-types';

import styles from './AuthTitle.module.scss';

const AuthTitle = ({ text }) => {
  return <h2 className={styles.title}>{text}</h2>;
};

AuthTitle.propTypes = {
  text: PropTypes.string,
};

export default AuthTitle;
