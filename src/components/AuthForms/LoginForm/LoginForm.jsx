import { useState, useEffect } from 'react';

import Input from 'shared/components/Input/Input';

import AuthButton from '../../../shared/components/AuthButton/AuthButton';

import useForm from 'shared/hooks/useForm';

import EyeClosedIcon from 'icons/EyeClosedIcon';

import fields from './fields';
import initialState from './initialState';

import styles from './LoginForm.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <Input
        id="email"
        value={email}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Патерн для валідації email
        title="Enter a valid Email" // Підказка для патерну
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

      <div className={styles.inputWrapper}>
        <Input
          id="password"
          value={password}
          type={showPassword ? 'text' : 'password'}
          pattern=".{6,}" // Патерн для мінімальної довжини паролю (6 символів)
          title="Password must be at least 6 characters long" // Підказка для патерну
          style={{
            border: isValidPass ? '1px solid #54adff' : '1px solid #F43F5E',
          }}
          aditionalClass={isValidPass ? styles.inputCustomSettings : ''}
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

      <AuthButton disabled={agreed}>Login</AuthButton>
    </form>
  );
};

export default LoginForm;
