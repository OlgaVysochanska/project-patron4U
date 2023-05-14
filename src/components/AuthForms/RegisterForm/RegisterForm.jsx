import Input from 'shared/components/Input/Input';
// import TestTextField from 'shared/components/TestTextField/TestTextField';

import AuthButton from '../../../shared/components/AuthButton/AuthButton';

import useForm from 'shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';

// import styles from './RegisterForm.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password, confirm } = state;

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
      {/* <Input
        id="confirm"
        value={confirm}
        handleChange={handleChange}
        {...fields.confirm}
      /> */}
      <AuthButton>Registration</AuthButton>
    </form>
  );
};

export default RegisterForm;
