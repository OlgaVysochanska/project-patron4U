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
  const [isValid, setIsValid] = useState(true);

  //перевірка на встановлення властивості disabled для кнопки
  const [agreed, setAgreed] = useState(false);

  const handleConfirmPasswordChange = event => {
    const confirmValue = event.target.value;
    setConfirmPassword(confirmValue);
    setIsValid(confirmValue.length >= 6);
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
        style={{ border: isValid ? '#54ADFF' : '#F43F5E' }}
        handleChange={handleChange}
        {...fields.email}
      />
      <div className={styles.inputWrapper}>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          style={{ border: isValid ? '#54ADFF' : '#F43F5E' }}
          value={password}
          handleChange={handleChange}
          {...fields.password}
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
          style={{ border: isValid ? '#54ADFF' : '#F43F5E' }}
          pattern=".{6,}" // Патерн для мінімальної довжини паролю (6 символів)
          title="Password must be at least 6 characters long" // Підказка для патерну
          value={confirmPassword}
          handleChange={handleConfirmPasswordChange}
          isValid={isValid}
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
