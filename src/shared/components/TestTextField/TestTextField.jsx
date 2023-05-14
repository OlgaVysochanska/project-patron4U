import { useMemo } from 'react';
import { nanoid } from 'nanoid';

// import styles from './TestTextField.module.scss';

const TestTextField = ({ handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <input id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TestTextField;
