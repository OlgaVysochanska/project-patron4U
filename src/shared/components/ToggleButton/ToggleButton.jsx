import EditIcon from 'icons/EditIcon';
import CheckIcon from 'icons/CheckIcon';
import { useState } from 'react';

export const ToggleButton = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <>
      {!isToggled ? (
        <span onClick={callback}>
          <EditIcon stroke="black" />
        </span>
      ) : (
        <>
          <span onClick={callback}>
            <CheckIcon stroke="black" />
          </span>
        </>
      )}
    </>
  );
};
