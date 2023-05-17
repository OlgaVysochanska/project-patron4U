import Input from 'shared/components/Input/Input';
import { useState } from 'react';

export const TestInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
    setIsValid(value.length >= 6);
    console.log(value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Input
        type={showPassword ? 'text' : 'password'}
        style={{ border: isValid ? 'black' : 'red' }}
        placeholder="Enter password"
        pattern=".{6,}" // Патерн для мінімальної довжини паролю (6 символів)
        title="Password must be at least 6 characters long" // Підказка для патерну
        value={password}
        handleChange={handlePasswordChange}
        isValid={isValid}
      />
      <button onClick={toggleShowPassword}>
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
    </>
  );
};

export default TestInput;
