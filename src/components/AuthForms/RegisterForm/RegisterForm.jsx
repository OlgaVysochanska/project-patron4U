import { useState, useEffect } from 'react';

import Input from 'shared/components/Input/Input';

import AuthButton from '../../../shared/components/AuthButton/AuthButton';

import useForm from 'shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';
import EyeOpenIcon from 'icons/EyeOpenIcon';
import EyeClosedIcon from 'icons/EyeClosedIcon';

import styles from './RegisterForm.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isValidConf, setIsValidConf] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  //перевірка на встановлення властивості disabled для кнопки
  const [agreed, setAgreed] = useState(false);

  const handleConfirmPasswordChange = event => {
    const confirmValue = event.target.value;
    setConfirmPassword(confirmValue);
    setIsValidConf(confirmValue.length >= 6);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    //перевіряємо чи співпадають паролі і від цього блокуємо/розблоковуємо кнопку реєстрації:
    if (password === confirmPassword) {
      setAgreed(false);
    }
    if (password !== confirmPassword) {
      setAgreed(true);
    }
  }, [password, confirmPassword, setAgreed]);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Input
        id="email"
        value={email}
        pattern=".{6,}" // Патерн для мінімальної довжини паролю (6 символів)
        title="Password must be at least 6 characters long" // Підказка для патерну
        style={{
          border: isValidEmail ? '1px solid #54adff' : '1px solid #F43F5E',
        }}
        handleChange={e => {
          handleChange(e);
          setIsValidEmail(email.length >= 6);
        }}
        {...fields.email}
        isValid={isValidEmail}
      />
      <div className={styles.inputWrapper}>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          pattern=".{6,}" // Патерн для мінімальної довжини паролю (6 символів)
          title="Password must be at least 6 characters long" // Підказка для патерну
          style={{
            border: isValidPass ? '1px solid #54adff' : '1px solid #F43F5E',
          }}
          value={password}
          handleChange={e => {
            handleChange(e);
            setIsValidPass(password.length >= 6);
          }}
          {...fields.password}
          isValid={isValidPass}
        />
        <EyeClosedIcon
          className={styles.eyeIcon}
          onClick={toggleShowPassword}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          id="confirm"
          placeholder="Confirm password"
          type={showPassword ? 'text' : 'password'}
          style={{
            border: isValidConf ? '1px solid #54adff' : '1px solid #F43F5E',
          }}
          pattern=".{6,}" // Патерн для мінімальної довжини паролю (6 символів)
          title="Password must be at least 6 characters long" // Підказка для патерну
          value={confirmPassword}
          handleChange={handleConfirmPasswordChange}
          isValid={isValidConf}
        />
        <EyeClosedIcon
          className={styles.eyeIcon}
          onClick={toggleShowPassword}
        />
      </div>

      <AuthButton disabled={agreed}>Registration</AuthButton>
    </form>
  );
};

export default RegisterForm;
