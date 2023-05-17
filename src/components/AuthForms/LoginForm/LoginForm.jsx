import Input from 'shared/components/Input/Input';
// import TestTextField from 'shared/components/TestTextField/TestTextField';

import AuthButton from '../../../shared/components/AuthButton/AuthButton';

import useForm from 'shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';

import styles from './LoginForm.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={styles.formContainer}
    >
      <Input
        id="email"
        value={email}
        handleChange={handleChange}
        {...fields.email}
      />
      <Input
        id="password"
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <AuthButton>Login</AuthButton>
    </form>
  );
};

export default LoginForm;
