import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import useLang from 'shared/hooks/useLang';
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

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);

  const emailLang = locale.email[lang];
  const passwordLang = locale.password[lang];
  const validEmailLang = locale.validEmail[lang];
  const titleLang = locale.title[lang];
  const loginLang = locale.login[lang];

  //перевірка на встановлення властивості disabled для кнопки
  const [agreed, setAgreed] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    //перевіряємо чи треба блокувати кнопку логінізації:

    if (isValidEmail && isValidPass) {
      setAgreed(false);
    }
    if (!isValidEmail || !isValidPass) {
      setAgreed(true);
    }
  }, [email, password, isValidEmail, isValidPass, setAgreed]);

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
          }}
          aditionalClass={isValidEmail ? styles.inputCustomSettings : ''}
          handleChange={e => {
            handleChange(e);
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
          pattern=".{6,}" // Патерн для мінімальної довжини паролю (6 символів)
          title={titleLang} // Підказка для патерну
          style={{
            border: isValidPass ? '1px solid #54adff' : '1px solid #F43F5E',
          }}
          aditionalClass={isValidPass ? styles.inputCustomSettings : ''}
          handleChange={e => {
            handleChange(e);
            setIsValidPass(e.target.checkValidity());
          }}
          {...fields.password}
          isValid={isValidPass}
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
