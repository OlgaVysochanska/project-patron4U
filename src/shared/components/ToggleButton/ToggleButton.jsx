import EditIcon from 'icons/EditIcon';
import CheckIcon from 'icons/CheckIcon';
import { useState } from 'react';

export const ToggleButton = ({ label, toggled, onClick, id, isActive, clickActive }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    clickActive(id)
    onClick(!isToggled);

   
  };


  return (
    <>
      {!isToggled ? (
        <span onClick={callback}>
          <EditIcon stroke="#54ADFF" />
        </span>
      ) : (
        <>
          <span onClick={callback}>
            <CheckIcon stroke="#00C3AD" />
          </span>
        </>
      )}
    </>
  );
};
