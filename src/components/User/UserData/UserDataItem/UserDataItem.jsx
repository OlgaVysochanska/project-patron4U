import Input from 'shared/components/Input/Input';
// import fields from './fields';
import styles from './UserDataItem.module.scss';
import Button from 'shared/components/Button/Button';
import CheckIcon from 'icons/CheckIcon';
import EditIcon from 'icons/EditIcon';
import useForm from '../../../../shared/hooks/useForm';
import { useState, useRef } from 'react';


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
  label,
  name,
  value,
  defaultValue,
  isBlocked,
  blockButtons,
  unblockButtons,
  type,
  handleEditUser,
}) => {
  const inputRef = useRef(null);
  const initialState = value;

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit: handleEditUser,
  });
  const [isNotEditing, setIsNotEditing] = useState(true);
  
  const clickEdit = () => {
    setIsNotEditing(prevState => !prevState);
    blockButtons();
    inputRef.current.focus()
  };

  const clickSave = () => {
    setIsNotEditing(true);
    unblockButtons();
    handleEditUser(state);
    // handleUser(state);
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
          readonly={isNotEditing}
          handleChange={handleChange}
          isValid="true"
          // inputStyles={{padding: "4px 12px"}}
          aditionalClass={styles.input}
          labelClass={styles.label}
          inputRef={inputRef}
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
