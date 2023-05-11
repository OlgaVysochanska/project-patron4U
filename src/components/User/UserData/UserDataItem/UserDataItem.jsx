import { ToggleButton } from 'shared/components/ToggleButton/ToggleButton';
import defaultAvatar from './default_avatar.svg';
import { ToggleButtonPhoto } from 'shared/components/ToggleButtonPhoto/ToggleButtonPhoto';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
const picSize = '182px';
let avatar = false;

const UserDataItem = ({ actived, onClick }) => {
  if (!avatar) {
    avatar = defaultAvatar;
  }

  const id = nanoid()
  const handleEdit = id => {};

  const [isActive, active] = useState(actived);

  const callback = () => {
    active(!isActive);
    onClick(!isActive);
  };


  return (
    <div>
      <img src={avatar} alt="Your look" width={picSize} height={picSize}></img>
      <ToggleButtonPhoto>Edit photo</ToggleButtonPhoto>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            // style={{disable: isActive ? "block" : "none"}}
            style={{ backgroundColor: 'white', color: 'black' }}
            disabled={!isActive}
            defaultValue="Anna"
          />{' '}
          <ToggleButton
            id={id}
            onClick={() => {
              callback();
            }}
          />
        </label>

        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <input type="submit" value="Submit" />
        <p>Email:</p>
        <label>
          Birthday:
          <input type="text" name="birthday" />
        </label>
        <input type="submit" value="Submit" />
        <p>Birthday:</p>
        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <input type="submit" value="Submit" />
        <p>Phone:</p>
        <label>
          City:
          <input type="text" name="city" />
        </label>
        <input type="submit" value="Submit" />
        <p>City:</p>
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
