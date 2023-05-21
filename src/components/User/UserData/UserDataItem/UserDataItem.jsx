// import { ToggleButton } from 'shared/components/ToggleButton/ToggleButton';
// import { nanoid } from '@reduxjs/toolkit';
import Input from 'shared/components/Input/Input';
// import fields from './fields';
import styles from './UserDataItem.scss';
// import {useDispatch} from 'react-redux'
import Button from 'shared/components/Button/Button';
import CheckIcon from 'icons/CheckIcon';
import EditIcon from 'icons/EditIcon';
// import { useState } from 'react';
import useForm from '../../../../shared/hooks/useForm';
import {useState} from 'react'

const CheckIconTuned = () => {
  return (
    <CheckIcon stroke="#00C3AD" width="16" height="16" viewBox="0 0 22 21" />
  );
};

const EditIconTuned = () => {
  return (
    <EditIcon stroke="#54ADFF" width="16" height="16" viewBox="0 0 22 21" />
  );
};

 const UserDataItem = ({
  // clickEdit,
  // clickSave,
  clickToglle,
  isActive,
  label,
  name,
  value,
  defaultValue,
  clickActive,
  activeItem,
  // isEditing,
  // setActiveItem,
  // setIsEditing,
  onSubmit,
  type,
}) => {
  const initialState = defaultValue;
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const [isNotEditing, setIsNotEditing] = useState(true);
  //  const dispatch = useDispatch()
  // const id = nanoid();
  // const handleEdit = id => {
  //   dispatch(clickToglle(id))
  // };

  const clickEdit = id => {
    // onClick(!isActive);
    // setActiveItem(id);
    setIsNotEditing(false);
    // console.log(activeItem);
    console.log(isNotEditing);
  };

  const clickSave = () => {
    setIsNotEditing(true);
    console.log(state)
  };

  // const readonly =  false;
  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <div style={{ backgroundColor: 'green',  
      //  position: 'relative' 
   }} className={styles.inputWrapper}>
      <Input
      // inputStyle={{position: 'relative'}}
        type={type}
        // key={id}
        id={name}
        label={label}
        name={name}
        value={value}

        defaultValue={defaultValue}
        // defaultValue={defaultValue}
        // {...(!isActive && isEditing && { rO })}
        // inputStyle={{ position: 'relative' }}
        // isValid={true}
        readonly={isNotEditing}
        handleChange={handleChange}
        isValid='true'
      ></Input>
{isNotEditing ? (
<Button type='button'
onClick={clickEdit}
// buttonStyle={
//   {backgroundColor: 'transparent',
// border: 'none',
// // position: 'absolute',
// right:'10px'
// }
// }
className={styles.toggle}
SVGComponent={EditIconTuned}
// stroke='#54ADFF'
/>
) : (
  <Button type='button'
  className={styles.toggle}

onClick={clickSave}
// buttonStyle={{backgroundColor: 'transparent',
// border: 'none',
// // position: 'absolute',
// right:'10px'}}
SVGComponent={CheckIconTuned}
// stroke='#54ADFF'
/>
)
}






      {/* {!isActive ? (
        <Button
          type="button"
          // className={`${styles.toggle} ${styles.active}`}
          onClick={clickActive}
          buttonStyle={{
            // backgroundColor: 'transparent',
            border: 'none',
            position: 'absolute',
            right: '10px',
            top: '10px',
            transform: 'translateY(-50%)',
          }}
          SVGComponent={EditIconTuned}
          stroke="red"
          />
        // >
        //   {activeItem}
        // </Button>
      ) : (
        <Button className={styles.button} onClick={clickActive}>
          {activeItem}
        </Button>
      )}
      {isEditing ? (
        <Button
          type="button"
          className={styles.toggle}
          onClick={clickEdit}
          icon={<EditIconTuned />}
        >
          Edit
        </Button>
      ) : (
        <Button
          className={styles.button}
          onClick={clickSave}
          icon={<CheckIconTuned />}
        >
          Save
        </Button>
      )}
      <Button
        type="submit"
        className={`${styles.button} ${styles.submit}`}
        onClick={handleSubmit}
      >
        Submit
      </Button> */}
      {/* // buttonStyle= // position: 'absolute', // right: '10px', // top: '10px',
      // // // transform: 'translateY(-50%)', // // SVGComponent= */}
      {/* {CheckIconTuned}
      /> */}







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
            </div>
    </form>
  );
};

export default UserDataItem;
