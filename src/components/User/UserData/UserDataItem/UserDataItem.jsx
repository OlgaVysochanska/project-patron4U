// import { ToggleButton } from 'shared/components/ToggleButton/ToggleButton';
import { nanoid } from '@reduxjs/toolkit';
import Input from 'shared/components/Input/Input';
// import fields from './fields';
import styles from './UserDataItem.scss';
// import {useDispatch} from 'react-redux'
import Button from 'shared/components/Button/Button';
import CheckIcon from 'icons/CheckIcon';
import CrossIcon from 'icons/CrossIcon';

const CheckIconTuned = () => {
    return <CheckIcon  stroke='green' width="16" height="16" viewBox="0 0 22 21" />;
  };
  
  const CrossIconTuned = () => {
    return <CrossIcon  stroke='red' width="16" height="16" viewBox="0 0 22 21" />;
  };

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
      {/* <div style={{ backgroundColor: 'green', position: 'relative' }}> */}
        <Input
          key={id}
          id={id}
          label={label}
          name={name}
          defaultValue={value}
          {...(!isActive && { ...rO })}
          // inputStyle={{ position: 'relative' }}
          isValid={true}
        ></Input>
        <Button
        type="button"
          onClick={clickToglle}
          className={styles.toggle}
          // buttonStyle={{
          //   backgroundColor: 'red',
          //   position: 'absolute',
          //   right: '10px',
          //   top: '10px',
            //   transform: 'translateY(-50%)',
          // }}
      
          SVGComponent={CheckIconTuned}
          stroke='red'
        />
        <Button
         type="button"
          onClick={clickToglle}
          className={styles.toggle}
          // buttonStyle={{
          
          //   position: 'absolute',
          //   right: '10px',
          //   top: '10px',
          //   //     //   transform: 'translateY(-50%)',
          // }}
          SVGComponent={CrossIconTuned}
        />
      {/* </div> */}

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
