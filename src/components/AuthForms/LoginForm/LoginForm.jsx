import Input from 'shared/components/Input/Input';
// import TestTextField from 'shared/components/TestTextField/TestTextField';

import TestAuthButton from '../../../shared/components/TestAuthButton/TestAuthButton';

import useForm from 'shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';

// import styles from './LoginForm.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
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
      <TestAuthButton>Login</TestAuthButton>
    </form>
  );
};

export default LoginForm;
