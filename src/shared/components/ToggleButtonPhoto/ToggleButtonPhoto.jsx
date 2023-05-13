import CameraIcon from 'icons/CameraIcon';
import CheckIcon from 'icons/CheckIcon';
import CrossIcon from 'icons/CrossIcon';
import { useState } from 'react';

export const ToggleButtonPhoto = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <>
      {!isToggled ? (
        <span onClick={callback}>
          <CameraIcon stroke="#54ADFF" />
          Edit photo
        </span>
      ) : (
        <>
          <span onClick={callback}>
            <CheckIcon stroke="#54ADFF" />
            Confirm
          </span>
          <span onClick={callback}>
            <CrossIcon stroke="red" />
            Cancel
          </span>
        </>
      )}
    </>
  );
};
