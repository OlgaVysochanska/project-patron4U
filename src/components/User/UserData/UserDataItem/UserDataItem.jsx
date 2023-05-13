import { ToggleButton } from 'shared/components/ToggleButton/ToggleButton';
import { nanoid } from '@reduxjs/toolkit';
import Input from 'shared/components/Input/Input';
import fields from './fields'
import styles from './UserDataItem.scss';


const UserDataItem = ({ clickToglle, isActive }) => {
  

  const id = nanoid();
  const handleEdit = id => {};



  const rO = { readonly: 'disabled' };
  return (
    <div>
 
      
        <Input  props={fields.name} />
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
              clickToglle();
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

    </div>
  );
};

export default UserDataItem;
