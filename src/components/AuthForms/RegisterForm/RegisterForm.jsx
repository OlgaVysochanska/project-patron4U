import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Input from 'shared/components/Input/Input';

import AuthButton from '../../../shared/components/AuthButton/AuthButton';

import useForm from 'shared/hooks/useForm';
import useLang from 'shared/hooks/useLang';
import useTheme from 'shared/hooks/useTheme';
import locale from '../locale.json';

import EyeClosedIcon from 'icons/EyeClosedIcon';
import EyeOpenIcon from 'icons/EyeOpenIcon';

import fields from './fields';
import initialState from './initialState';

import styles from './RegisterForm.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { lang } = useLang();
  const { theme } = useTheme();

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  const [isValidConf, setIsValidConf] = useState(true);
  const [firstEmailValidation, setFirstEmailValidation] = useState(false);

  const registrationLang = locale.registration[lang];
  const emailLang = locale.email[lang];
  const passwordLang = locale.password[lang];
  const confirmPasswordLang = locale.confirmPassword[lang];
  const validEmailLang = locale.validEmail[lang];
  const passwordErrorMessage = locale.passwordErrorMessage[lang];
  const passwordMatch = locale.passwordMatch[lang];

  //перевірка на встановлення властивості disabled для кнопки
  const [agreed, setAgreed] = useState(true);

  useEffect(() => {
    //перевіряємо чи співпадають паролі і від цього блокуємо/розблоковуємо кнопку реєстрації:
    if (password === confirmPassword && firstEmailValidation && isValidEmail) {
      setAgreed(false);
    }
    if (password !== confirmPassword) {
      setAgreed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmPassword, setAgreed]);

  const mainEmailValidation = e => {
    if (!firstEmailValidation && isValidEmail) {
      return;
    }
    setIsValidEmail(e.target.checkValidity());
  };

  const handleConfirmPasswordChange = event => {
    const confirmValue = event.target.value;
    setConfirmPassword(confirmValue);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form
      onSubmit={e => {
        handleSubmit(e);
        setConfirmPassword('');
      }}
      autoComplete="off"
      className={styles.form}
    >
      <div className={styles.inputWrapper}>
        <Input
          id="email"
          value={email}
          placeholder={emailLang}
          // ref={emailRef}
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
            // setNextEmailValidations(e.target.checkValidity());
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
          type={showPassword ? 'text' : 'password'}
          placeholder={passwordLang}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$"
          title={passwordErrorMessage} // Підказка для патерну
          style={{
            border: isValidPass ? '1px solid #54adff' : '1px solid #F43F5E',
            backgroundColor: theme === 'dark' && '#2b3e51',
            color: theme === 'dark' && '#fef9f9',
          }}
          aditionalClass={isValidPass ? styles.inputCustomSettings : ''}
          value={password}
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

      <div className={styles.inputWrapper}>
        <Input
          id="confirm"
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder={confirmPasswordLang}
          style={{
            border: isValidConf ? '1px solid #54adff' : '1px solid #F43F5E',
            backgroundColor: theme === 'dark' && '#2b3e51',
            color: theme === 'dark' && '#fef9f9',
          }}
          aditionalClass={isValidConf ? styles.inputCustomSettings : ''}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$"
          // title={passwordErrorMessage} // Підказка для патерну
          value={confirmPassword}
          handleChange={e => {
            handleConfirmPasswordChange(e);
            setIsValidConf(e.target.checkValidity());
          }}
          isValid={isValidConf}
        />
        {showConfirmPassword ? (
          <EyeClosedIcon
            className={styles.eyeIcon}
            onClick={toggleShowConfirmPassword}
          />
        ) : (
          <EyeOpenIcon
            className={styles.eyeIcon}
            onClick={toggleShowConfirmPassword}
          />
        )}
        {agreed && firstEmailValidation && confirmPassword !== '' && (
          <p className={styles.differentPassords}>{passwordMatch}</p>
        )}
      </div>

      <AuthButton disabled={agreed}>{registrationLang}</AuthButton>
    </form>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
