import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({
  label,
  type,
  id,
  placeholder,
  pattern,
  title,
  value,
  handleChange,
  isValid,
  aditionalClass,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={type}>{label}</label>
      <input
        type={type}
        name={type}
        id={id}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        value={value}
        onChange={handleChange}
        className={`${styles.input} ${
          !isValid ? styles.invalid : ''
        } ${aditionalClass}`}
        {...props}
      />
      {!isValid && <p className={styles.errorMessage}>{title}</p>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  icon: PropTypes.string,
};

export default Input;

// import PropTypes from 'prop-types';
// import styles from './Input.module.scss';

// const Input = ({
//   label,
//   type,
//   id,
//   placeholder,
//   pattern,
//   title,
//   value,
//   handleChange,
//   isValid,
//   ...props
// }) => {
//   return (
//     <div>
//       <label htmlFor={type}>{label}</label>
//       <input
//         type={type}
//         name={type}
//         id={id}
//         placeholder={placeholder}
//         pattern={pattern}
//         title={title}
//         value={value}
//         onChange={handleChange}
//         className={`${styles.input} ${!isValid ? styles.invalid : ''}`}
//         {...props}
//       />
//       {!isValid && <p className={styles.errorMessage}>{title}</p>}
//     </div>
//   );
// };

// Input.propTypes = {
//   label: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   pattern: PropTypes.string,
//   title: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func,
// };

// export default Input;
