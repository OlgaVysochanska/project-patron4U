// import { ToggleButton } from 'shared/components/ToggleButton/ToggleButton';
import { nanoid } from '@reduxjs/toolkit';
import Input from 'shared/components/Input/Input';
// import fields from './fields';
import styles from './UserDataItem.scss';
// import {useDispatch} from 'react-redux'
import Button from 'shared/components/Button/Button';
import CheckIcon from 'icons/CheckIcon';
import EditIcon from 'icons/EditIcon';

const CheckIconTuned = () => {
    return <CheckIcon  stroke='#00C3AD' width="16" height="16" viewBox="0 0 22 21" />;
  };
  
  const EditIconTuned = () => {
    return <EditIcon  stroke='#54ADFF' width="16" height="16" viewBox="0 0 22 21" />;
  };

const UserDataItem = ({
  // clickEdit,
  clickSave,
  clickToglle,
  isActive,
  label,
  name,
  value,
  clickActive,
  activeItem,
  isEditing,
  setActiveItem,
  setIsEditing,
}) => {
  //  const dispatch = useDispatch()
  const id = nanoid();
  // const handleEdit = id => {
  //   dispatch(clickToglle(id))
  // };

  const clickEdit = id => {
    // onClick(!isActive);
    setActiveItem(id);
    setIsEditing(true);
    console.log(activeItem);
    console.log(isEditing)
  };

  const rO =  "readOnly";
  return (
    <form>
      {/* <div style={{ backgroundColor: 'green', position: 'relative' }}> */}
        <Input
          key={id}
          id={id}
          label={label}
          name={name}
          defaultValue={value}
          {...(!isActive && isEditing && { rO })}
          // inputStyle={{ position: 'relative' }}
          isValid={true}
        ></Input>
        <Button
        type="button"
          onClick={clickEdit}
          className={styles.toggle}
          buttonStyle={{
            backgroundColor: 'transparent',
            border: 'none',
            position: 'absolute',
            right: '10px',
          //   top: '10px',
            //   transform: 'translateY(-50%)',
          }}
      
          SVGComponent={EditIconTuned}
          stroke='red'
        />
        <Button
         type="button"
          onClick={clickSave}
          className={styles.toggle}
          // buttonStyle={{
          
          //   position: 'absolute',
          //   right: '10px',
          //   top: '10px',
          //   //     //   transform: 'translateY(-50%)',
          // }}
          SVGComponent={CheckIconTuned}
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
