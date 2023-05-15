// import { ToggleButton } from 'shared/components/ToggleButton/ToggleButton';
import { nanoid } from '@reduxjs/toolkit';
import Input from 'shared/components/Input/Input';
// import fields from './fields';
import styles from './UserDataItem.scss';
// import {useDispatch} from 'react-redux'
import Button from 'shared/components/Button/Button';

const UserDataItem = ({
  clickToglle,
  isActive,
  label,
  name,
  value,
  clickActive,
  activeItem,
}) => {
  //  const dispatch = useDispatch()
  const id = nanoid();
  // const handleEdit = id => {
  //   dispatch(clickToglle(id))
  // };

  const rO = { readOnly: 'disabled' };
  return (
    <form>
      <Input
        key={id}
        id={id}
        label={label}
        name={name}
        defaultValue={value}
        {...(!isActive && { ...rO })}
        style={{ position: 'relative' }}
        isValid={true}
      ></Input>
      <Button
        className={styles.toggle}
        buttonStyle={{
          backgroundColor: 'red',
          position: 'absolute',
          right: '10px',
        //   top: '50%',
        //   transform: 'translateY(-50%)',
        }}
        label="123"
      />
      {/* <ToggleButton
            className={styles.togle}
            id={id}
       
           {...id === activeItem && {
            clickToglle}}
            isActive={isActive}
            clickActive={clickActive}
          /> */}
      {/* <label>
        Name:
        <input
          className={styles.input}
          type="text"
          name="name"
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
      <input type="submit" value="Submit" /> */}
    </form>
  );
};

export default UserDataItem;
