// import { ToggleButton } from 'shared/components/ToggleButton/ToggleButton';
// import { nanoid } from '@reduxjs/toolkit';
import Input from 'shared/components/Input/Input';
// import fields from './fields';
import styles from './UserDataItem.module.scss';
// import {useDispatch} from 'react-redux'
import Button from 'shared/components/Button/Button';
import CheckIcon from 'icons/CheckIcon';
import EditIcon from 'icons/EditIcon';
// import { useState } from 'react';
import useForm from '../../../../shared/hooks/useForm';
import { useState } from 'react';
import { editCurrent } from 'redux/auth/authOperations';
import { useDispatch } from '../../../../../node_modules/react-redux/es/exports';

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
 
  label,
  name,
  value,
  defaultValue,
  
  activeItem,
  isBlocked,
  blockButtons,
  unblockButtons,
  // isEditing,
  // setActiveItem,
  // setIsEditing,
  type,
  handleEditUser,
}) => {
  const initialState = value;
  const dispatch = useDispatch();

  // const handleEditUser = (data) => {
  //   // console.log(data)
  //   dispatch(editCurrent(data));
  // };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit: handleEditUser,
  });
  const [isNotEditing, setIsNotEditing] = useState(true);
  // const id = nanoid();
  // const handleEdit = id => {
  //   dispatch(clickToglle(id))
  // };



  const handleUser = ([key, value]) => {
    // console.log(key, value);
    handleChange({
      target: {
        name: {key},
        value: {value},
      },
    });
  };

  const clickEdit = id => {
    // onClick(!isActive);
    // setActiveItem(id);

    setIsNotEditing(prevState => !prevState);
    blockButtons();
    // console.log(activeItem);
    // console.log(isNotEditing);
  };

  const clickSave = () => {
    setIsNotEditing(true);
    unblockButtons();
    console.log(state);
    handleEditUser(state)
    handleUser(state)
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on" className={styles.form}>
      <div className={styles.inputWrapper}>
        <Input
          type={type}
          // key={id}
          id={name}
          label={label}
          name={name}
          // value={value}
          defaultValue={defaultValue}
          // value={defaultValue}
          readonly={isNotEditing}
          handleChange={handleChange}
          isValid="true"
          // inputStyles={{padding: "4px 12px"}}
          aditionalClass={styles.input}
          labelClass={styles.label}
        ></Input>
        {isNotEditing ? (
          <Button
            type="button"
            onClick={clickEdit}
            disabled={isBlocked}
            className={styles.toggle}
            SVGComponent={EditIconTuned}
          />
        ) : (
          <Button
            type="button"
            className={styles.toggle}
            onClick={clickSave}
            SVGComponent={CheckIconTuned}
          />
        )}       
      </div>
    </form>
  );
};

export default UserDataItem;
