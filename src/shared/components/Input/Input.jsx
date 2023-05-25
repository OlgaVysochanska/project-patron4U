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
  icon,
  onIconClick,
  inputStyle,
  readonly,
  aditionalClass,
  labelClass = styles.label,
  inputRef,
  ...props
}) => {
  const inputStyles = {
    ...inputStyle,
  };

  return (
    <>
      <label className={labelClass} htmlFor={type}>
        {label}
      </label>
      <input
        ref={inputRef}
        type={type}
        name={type}
        id={id}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        value={value}
        readOnly={readonly}
        onChange={handleChange}
        className={`${styles.input} ${
          !isValid ? styles.invalid : ''
        } ${aditionalClass}`}
        style={inputStyles}
        {...props}
      />
      {icon && (
        <span className={styles.icon} onClick={onIconClick}>
          {icon}
        </span>
      )}
      {!isValid && <p className={styles.errorMessage}>{title}</p>}
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  // value: PropTypes.string.isRequired,
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
