import { ToggleButton } from 'shared/components/ToggleButton/ToggleButton';
import defaultAvatar from './default_avatar.svg';
import { ToggleButtonPhoto } from 'shared/components/ToggleButtonPhoto/ToggleButtonPhoto';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Input from 'shared/components/Input/Input';
import styles from './UserDataItem.scss';
const picSize = '182px';
let avatar = false;

const UserDataItem = ({ actived, onClick, }) => {
  if (!avatar) {
    avatar = defaultAvatar;
  }

  const id = nanoid();
  const handleEdit = id => {};

  const [isActive, active] = useState(actived);

  const callback = () => {
    active(!isActive);
    onClick(!isActive);
  };
  const rO = { readonly: 'disabled' };
  return (
    <div>
      <img src={avatar} alt="Your look" width={picSize} height={picSize}></img>
      <ToggleButtonPhoto>Edit photo</ToggleButtonPhoto>
      <form>
        {/* <Input /> */}
        <label>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            {...(!isActive && { ...rO })}
            defaultValue="jon"
          />
          <ToggleButton
            className={styles.togle}
            id={id}
            onClick={() => {
              callback();
            }}
          ></ToggleButton>
        </label>

        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <input type="submit" value="Submit" />

        <label>
          Birthday:
          <input type="text" name="birthday" />
        </label>
        <input type="submit" value="Submit" />

        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <input type="submit" value="Submit" />

        <label>
          City:
          <input type="text" name="city" />
        </label>
        <input type="submit" value="Submit" />

        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <button>Log Out</button>
    </div>
  );
};

export default UserDataItem;
