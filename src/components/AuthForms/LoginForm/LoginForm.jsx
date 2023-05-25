import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import useLang from 'shared/hooks/useLang';
import useTheme from 'shared/hooks/useTheme';
import locale from '../locale.json';

import Input from 'shared/components/Input/Input';

import AuthButton from '../../../shared/components/AuthButton/AuthButton';

import useForm from 'shared/hooks/useForm';

import EyeClosedIcon from 'icons/EyeClosedIcon';
import EyeOpenIcon from 'icons/EyeOpenIcon';

import fields from './fields';
import initialState from './initialState';

import styles from './LoginForm.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { lang } = useLang();
  const { theme } = useTheme();

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  // const [securePassword, setIsValidPass] = useState(true);
  const [firstEmailValidation, setFirstEmailValidation] = useState(false);
  const [securePassword, setSecurePassword] = useState(false);

  const emailLang = locale.email[lang];
  const passwordLang = locale.password[lang];
  const validEmailLang = locale.validEmail[lang];
  // const passwordErrorMessage = locale.passwordErrorMessage[lang];
  const loginLang = locale.login[lang];
  const secureLang = locale.secure[lang];

  //перевірка на встановлення властивості disabled для кнопки
  const [agreed, setAgreed] = useState(true);

  const mainEmailValidation = e => {
    if (!firstEmailValidation && isValidEmail) {
      return;
    }
    setIsValidEmail(e.target.checkValidity());
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    //перевіряємо чи треба блокувати кнопку логінізації:

    if (isValidEmail && securePassword) {
      setAgreed(false);
    }
    if (!isValidEmail || !securePassword) {
      setAgreed(true);
    }
  }, [email, password, isValidEmail, securePassword, setAgreed]);

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
      <div className={styles.inputWrapper}>
        <Input
          id="email"
          value={email}
          placeholder={emailLang}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Патерн для валідації email
          title={validEmailLang} // Підказка для патерну
          style={{
            border: isValidEmail ? '1px solid #54adff' : '1px solid #F43F5E',
            backgroundColor: theme === 'dark' && '#2b3e51',
            color: theme === 'dark' && '#fef9f9',
          }}
          aditionalClass={isValidEmail ? styles.inputCustomSettings : ''}
          handleChange={e => {
            handleChange(e);
            mainEmailValidation(e);
            // setIsValidEmail(e.target.checkValidity());
          }}
          onBlur={e => {
            setFirstEmailValidation(true);
            setIsValidEmail(e.target.checkValidity());
          }}
          {...fields.email}
          isValid={isValidEmail}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          id="password"
          value={password}
          placeholder={passwordLang}
          type={showPassword ? 'text' : 'password'}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$" // Патерн для мінімальної довжини паролю (6 символів)
          title={secureLang} // Підказка для патерну
          style={{
            border: !securePassword ? '1px solid #54adff' : '1px solid #00C3AD',
            backgroundColor: theme === 'dark' && '#2b3e51',
            color: theme === 'dark' && '#fef9f9',
          }}
          // aditionalClass={securePassword ? styles.inputCustomSettings : ''}
          handleChange={e => {
            handleChange(e);
            setSecurePassword(e.target.checkValidity());
          }}
          {...fields.password}
          isValid={true}
          secure={securePassword}
        />
        {showPassword ? (
          <EyeClosedIcon
            className={styles.eyeIcon}
            onClick={toggleShowPassword}
          />
        ) : (
          <EyeOpenIcon
            className={styles.eyeIcon}
            onClick={toggleShowPassword}
          />
        )}
      </div>
      <AuthButton disabled={agreed}>{loginLang}</AuthButton>
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
